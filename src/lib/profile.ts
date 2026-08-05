/** スキルデータ（言語非依存。カテゴリー名の翻訳は i18n 辞書側で行う） */
export const SKILL_GROUPS = [
	{
		categoryKey: 'skills.backend',
		items: ['PHP', 'Laravel'],
	},
	{
		categoryKey: 'skills.infra',
		items: ['AWS (EC2 / RDS / S3 / ElastiCache / CloudWatch)', 'Docker'],
	},
	{
		categoryKey: 'skills.frontend',
		items: ['Astro', 'Next.js', 'TypeScript'],
	},
	{
		categoryKey: 'skills.tools',
		items: ['GitHub Actions', 'GitHub', 'AI-assisted development (Cursor / Claude Code)'],
	},
] as const;
