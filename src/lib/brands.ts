/**
 * 公式ブランドアイコン（Simple Icons / CC0-1.0）とブランドカラーの正本
 * SVG: public/icons/{id}.svg
 * 出典: https://simpleicons.org / https://github.com/simple-icons/simple-icons
 */
export const BRANDS = {
	php: { label: 'PHP', color: '#777BB4', file: 'php.svg' },
	laravel: { label: 'Laravel', color: '#FF2D20', file: 'laravel.svg' },
	aws: { label: 'AWS', color: '#FF9900', file: 'aws.svg' },
	docker: { label: 'Docker', color: '#2496ED', file: 'docker.svg' },
	astro: { label: 'Astro', color: '#BC52EE', file: 'astro.svg' },
	react: { label: 'React', color: '#61DAFB', file: 'react.svg' },
	nextjs: { label: 'Next.js', color: 'ink', file: 'nextjs.svg' },
	typescript: { label: 'TypeScript', color: '#3178C6', file: 'typescript.svg' },
	github: { label: 'GitHub', color: 'ink', file: 'github.svg' },
	actions: { label: 'GitHub Actions', color: '#2088FF', file: 'actions.svg' },
	cursor: { label: 'Cursor', color: 'ink', file: 'cursor.svg' },
	vercel: { label: 'Vercel', color: 'ink', file: 'vercel.svg' },
	supabase: { label: 'Supabase', color: '#3FCF8E', file: 'supabase.svg' },
	cloudflare: { label: 'Cloudflare', color: '#F38020', file: 'cloudflare.svg' },
} as const;

export type BrandId = keyof typeof BRANDS;
