/**
 * GitHub コントリビューショングラフ（草）を SVG で返す。
 * - 優先: GitHub GraphQL（GITHUB_TOKEN / GH_TOKEN があるとき）
 * - フォールバック: ghchart.rshah.org をサーバー側プロキシ
 * Cache-Control で最大1時間キャッシュ。
 */

const USER = 'osanai1004';

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
            color
          }
        }
      }
    }
  }
}
`;

function themePalette(theme) {
	const dark = theme !== 'light';
	return {
		bg: 'transparent',
		levels: dark
			? ['#23252a', '#0e4429', '#006d32', '#26a641', '#39d353']
			: ['#e4e5e8', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
		label: dark ? '#8a8f98' : '#62666d',
	};
}

function levelFromCount(count) {
	if (count <= 0) return 0;
	if (count <= 2) return 1;
	if (count <= 5) return 2;
	if (count <= 9) return 3;
	return 4;
}

function buildSvgFromCalendar(calendar, theme) {
	const palette = themePalette(theme);
	const cell = 11;
	const gap = 3;
	const weeks = calendar.weeks ?? [];
	const width = weeks.length * (cell + gap) + 8;
	const height = 7 * (cell + gap) + 28;
	const total = calendar.totalContributions ?? 0;

	let rects = '';
	weeks.forEach((week, wi) => {
		(week.contributionDays ?? []).forEach((day, di) => {
			const level = levelFromCount(day.contributionCount ?? 0);
			const fill = palette.levels[level];
			const x = 4 + wi * (cell + gap);
			const y = 4 + di * (cell + gap);
			rects += `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="2" ry="2" fill="${fill}"><title>${day.date}: ${day.contributionCount} contributions</title></rect>`;
		});
	});

	return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="GitHub contributions">
  <rect width="100%" height="100%" fill="${palette.bg}"/>
  ${rects}
  <text x="4" y="${height - 6}" fill="${palette.label}" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11">${total} contributions in the last year</text>
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
	const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar;
	if (!calendar) {
		throw new Error('No contribution calendar in response');
	}
	return calendar;
}

async function fetchFromGhChart(theme) {
	const color = theme === 'light' ? '5e6ad2' : '26a641';
	const url = `https://ghchart.rshah.org/${color}/${USER}`;
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
	res.setHeader('Access-Control-Expose-Headers', 'X-Contributions-Generated-At');
	res.setHeader('X-Contributions-Generated-At', generatedAt);

	try {
		if (token) {
			const calendar = await fetchFromGitHub(token);
			res.status(200).send(buildSvgFromCalendar(calendar, theme));
			return;
		}
		const svg = await fetchFromGhChart(theme);
		res.status(200).send(svg);
	} catch (err) {
		console.error(err);
		const palette = themePalette(theme);
		res.status(200).send(
			`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="320" height="40"><text x="0" y="24" fill="${palette.label}" font-family="system-ui,sans-serif" font-size="12">Contributions unavailable</text></svg>`,
		);
	}
}
