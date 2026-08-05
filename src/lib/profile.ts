/** スキルデータ（言語非依存。カテゴリー名の翻訳は i18n 辞書側で行う） */
export const SKILL_GROUPS = [
	{
		categoryKey: 'skills.backend',
		items: [
			{ id: 'php', label: 'PHP' },
			{ id: 'laravel', label: 'Laravel' },
		],
	},
	{
		categoryKey: 'skills.infra',
		items: [
			{ id: 'aws', label: 'AWS' },
			{ id: 'docker', label: 'Docker' },
		],
	},
	{
		categoryKey: 'skills.frontend',
		items: [
			{ id: 'astro', label: 'Astro' },
			{ id: 'nextjs', label: 'Next.js' },
			{ id: 'typescript', label: 'TypeScript' },
		],
	},
	{
		categoryKey: 'skills.tools',
		items: [
			{ id: 'github', label: 'GitHub' },
			{ id: 'actions', label: 'GitHub Actions' },
			{ id: 'ai', label: 'AI-assisted Dev' },
		],
	},
] as const;

/** ヒーローパネルに表示するフォーカススタック */
export const HERO_STACK = [
	{ id: 'laravel', label: 'Laravel' },
	{ id: 'php', label: 'PHP' },
	{ id: 'aws', label: 'AWS' },
	{ id: 'docker', label: 'Docker' },
	{ id: 'typescript', label: 'TypeScript' },
	{ id: 'github', label: 'GitHub' },
] as const;

export type SkillId = (typeof SKILL_GROUPS)[number]['items'][number]['id'];
