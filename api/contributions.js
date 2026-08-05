/**
 * GitHub コントリビューショングラフ（草）を SVG で返す。
 * - 優先: GitHub GraphQL（GITHUB_TOKEN / GH_TOKEN）
 * - フォールバック: ghchart をパースし、同じモダン描画で再構成（ダーク/ライト対応）
 * Cache-Control で最大1時間キャッシュ。
 */

const USER = 'osanai1004'; // pragma: allowlist secret

const QUERY = `
query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function themePalette(theme) {
	const dark = theme !== 'light';
	return {
		bg: 'transparent',
		// GitHub 公式ダーク/ライトに近い段階色
		levels: dark
			? ['#21262d', '#0e4429', '#006d32', '#26a641', '#3fb950']
			: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
		label: dark ? '#8b949e' : '#656d76',
		gridGap: dark ? '#0d1117' : '#ffffff',
	};
}

function levelFromCount(count) {
	if (count <= 0) return 0;
	if (count <= 2) return 1;
	if (count <= 5) return 2;
	if (count <= 9) return 3;
	return 4;
}

function pad2(n) {
	return String(n).padStart(2, '0');
}

function toUtcDate(isoDate) {
	const [y, m, d] = isoDate.split('-').map(Number);
	return new Date(Date.UTC(y, m - 1, d));
}

function formatUtcDate(date) {
	return `${date.getUTCFullYear()}-${pad2(date.getUTCMonth() + 1)}-${pad2(date.getUTCDate())}`;
}

/** ghchart の data-date / data-score からカレンダー構造を復元 */
function calendarFromDayMap(dayMap) {
	const dates = [...dayMap.keys()].sort();
	if (dates.length === 0) {
		return { totalContributions: 0, weeks: [] };
	}

	const start = toUtcDate(dates[0]);
	start.setUTCDate(start.getUTCDate() - start.getUTCDay()); // 日曜始まり
	const end = toUtcDate(dates[dates.length - 1]);

	const weeks = [];
	let week = [];
	const cursor = new Date(start);
	let total = 0;

	while (cursor <= end || week.length > 0) {
		const key = formatUtcDate(cursor);
		const count = dayMap.get(key) ?? 0;
		if (dayMap.has(key)) total += count;
		week.push({ date: key, contributionCount: count });

		if (week.length === 7) {
			weeks.push({ contributionDays: week });
			week = [];
			if (cursor >= end) break;
		}
		cursor.setUTCDate(cursor.getUTCDate() + 1);
		if (cursor > end && week.length === 0) break;
	}

	return { totalContributions: total, weeks };
}

function parseGhChartSvg(svg) {
	const dayMap = new Map();
	const re =
		/<rect\b[^>]*\bdata-score="(\d+)"[^>]*\bdata-date="(\d{4}-\d{2}-\d{2})"|<rect\b[^>]*\bdata-date="(\d{4}-\d{2}-\d{2})"[^>]*\bdata-score="(\d+)"/gi;
	for (const match of svg.matchAll(re)) {
		const score = Number(match[1] ?? match[4] ?? 0);
		const date = match[2] ?? match[3];
		if (date) dayMap.set(date, score);
	}
	if (dayMap.size === 0) {
		throw new Error('Failed to parse ghchart SVG');
	}
	return calendarFromDayMap(dayMap);
}

function buildSvgFromCalendar(calendar, theme) {
	const palette = themePalette(theme);
	const cell = 10;
	const gap = 3;
	const step = cell + gap;
	const left = 28;
	const top = 18;
	const weeks = calendar.weeks ?? [];
	const width = left + weeks.length * step + 8;
	const height = top + 7 * step + 8;

	let rects = '';
	const monthMarks = [];

	weeks.forEach((week, wi) => {
		const days = week.contributionDays ?? [];
		days.forEach((day, di) => {
			const level = levelFromCount(day.contributionCount ?? 0);
			const fill = palette.levels[level];
			const x = left + wi * step;
			const y = top + di * step;
			rects += `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="2" ry="2" fill="${fill}"><title>${day.date}: ${day.contributionCount} contributions</title></rect>`;

			if (di === 0 && day.date) {
				const dt = toUtcDate(day.date);
				if (dt.getUTCDate() <= 7) {
					monthMarks.push({ x, label: MONTHS[dt.getUTCMonth()] });
				}
			}
		});
	});

	// 月ラベルの重なりを間引き
	const monthLabels = [];
	let lastX = -Infinity;
	for (const mark of monthMarks) {
		if (mark.x - lastX < 28) continue;
		monthLabels.push(
			`<text x="${mark.x}" y="12" fill="${palette.label}" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" font-size="10">${mark.label}</text>`,
		);
		lastX = mark.x;
	}

	const weekdayLabels = [
		{ i: 1, text: 'Mon' },
		{ i: 3, text: 'Wed' },
		{ i: 5, text: 'Fri' },
	]
		.map(
			({ i, text }) =>
				`<text x="0" y="${top + i * step + 8}" fill="${palette.label}" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" font-size="9">${text}</text>`,
		)
		.join('');

	return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="GitHub contributions">
  <rect width="100%" height="100%" fill="${palette.bg}"/>
  ${monthLabels.join('')}
  ${weekdayLabels}
  ${rects}
</svg>`;
}

async function fetchFromGitHub(token) {
	const res = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
			'User-Agent': 'osanai-portfolio',
		},
		body: JSON.stringify({ query: QUERY, variables: { login: USER } }),
	});
	if (!res.ok) {
		throw new Error(`GitHub GraphQL ${res.status}`);
	}
	const json = await res.json();
	if (json.errors?.length) {
		throw new Error(`GitHub GraphQL errors: ${json.errors[0]?.message ?? 'unknown'}`);
	}
	const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar;
	if (!calendar) {
		throw new Error('No contribution calendar in response');
	}
	return calendar;
}

async function fetchFromGhChart() {
	// 色は自前で塗るのでベース色は何でもよい
	const url = `https://ghchart.rshah.org/26a641/${USER}`;
	const res = await fetch(url, { headers: { 'User-Agent': 'osanai-portfolio' } });
	if (!res.ok) {
		throw new Error(`ghchart ${res.status}`);
	}
	return await res.text();
}

export default async function handler(req, res) {
	const theme = req.query?.theme === 'light' ? 'light' : 'dark';
	const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
	const generatedAt = new Date().toISOString();

	res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
	res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Expose-Headers', 'X-Contributions-Generated-At, X-Contributions-Source');
	res.setHeader('X-Contributions-Generated-At', generatedAt);

	try {
		let calendar;
		let source = 'ghchart';

		if (token) {
			try {
				calendar = await fetchFromGitHub(token);
				source = 'graphql';
			} catch (err) {
				console.error('GraphQL failed, falling back to ghchart:', err);
				calendar = parseGhChartSvg(await fetchFromGhChart());
				source = 'ghchart-fallback';
			}
		} else {
			calendar = parseGhChartSvg(await fetchFromGhChart());
		}

		res.setHeader('X-Contributions-Source', source);
		res.status(200).send(buildSvgFromCalendar(calendar, theme));
	} catch (err) {
		console.error(err);
		const palette = themePalette(theme);
		res.setHeader('X-Contributions-Source', 'error');
		res.status(200).send(
			`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="320" height="40"><text x="0" y="24" fill="${palette.label}" font-family="system-ui,sans-serif" font-size="12">Contributions unavailable</text></svg>`,
		);
	}
}
