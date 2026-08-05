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
	nextjs: { label: 'Next.js', color: 'ink', file: 'nextjs.svg' },
	typescript: { label: 'TypeScript', color: '#3178C6', file: 'typescript.svg' },
	github: { label: 'GitHub', color: 'ink', file: 'github.svg' },
	actions: { label: 'GitHub Actions', color: '#2088FF', file: 'actions.svg' },
	ai: { label: 'AI-assisted Dev', color: '#D97757', file: 'ai.svg' },
} as const;

export type BrandId = keyof typeof BRANDS;

/** プロジェクトカード画像（AI生成・public/images/projects/・WebP） */
export const PROJECT_IMAGES = {
	saas: { src: '/images/projects/saas.webp', alt: 'B2B SaaS dashboard mockup' },
	web: { src: '/images/projects/web.webp', alt: 'Corporate website mockup' },
	pwa: { src: '/images/projects/pwa.webp', alt: 'Mobile PWA mockup' },
} as const;

export type ProjectVisual = keyof typeof PROJECT_IMAGES;
