import type { BrandId } from './brands';

/**
 * 掲載方針（主要技術に絞る）
 * - 日常的に書いている / 設計判断しているもの
 * - 採用・技術者へのシグナルになるもの
 * - 一度触っただけの周辺ツールは載せない
 */
export const SKILL_GROUPS: ReadonlyArray<{
	categoryKey: 'skills.backend' | 'skills.infra' | 'skills.frontend' | 'skills.tools';
	items: ReadonlyArray<{ id: BrandId; label: string }>;
}> = [
	{
		categoryKey: 'skills.backend',
		items: [
			{ id: 'php', label: 'PHP' },
			{ id: 'laravel', label: 'Laravel' },
			{ id: 'supabase', label: 'Supabase' },
		],
	},
	{
		categoryKey: 'skills.infra',
		items: [
			{ id: 'aws', label: 'AWS' },
			{ id: 'docker', label: 'Docker' },
			{ id: 'vercel', label: 'Vercel' },
			{ id: 'cloudflare', label: 'Cloudflare' },
		],
	},
	{
		categoryKey: 'skills.frontend',
		items: [
			{ id: 'typescript', label: 'TypeScript' },
			{ id: 'react', label: 'React' },
			{ id: 'nextjs', label: 'Next.js' },
			{ id: 'astro', label: 'Astro' },
		],
	},
	{
		categoryKey: 'skills.tools',
		items: [
			{ id: 'github', label: 'GitHub' },
			{ id: 'actions', label: 'GitHub Actions' },
			{ id: 'cursor', label: 'Cursor' },
		],
	},
];

/** ヒーローパネルに表示するフォーカススタック（モダンさのシグナルを優先） */
export const HERO_STACK: ReadonlyArray<{ id: BrandId; label: string }> = [
	{ id: 'laravel', label: 'Laravel' },
	{ id: 'typescript', label: 'TypeScript' },
	{ id: 'react', label: 'React' },
	{ id: 'aws', label: 'AWS' },
	{ id: 'docker', label: 'Docker' },
	{ id: 'cursor', label: 'Cursor' },
];
