import type { BrandId } from './brands';
import type { Locale } from './site';

/**
 * 強み・課題解決カード（プロダクト名ではなく「解ける課題」を正とする）
 * visual: public/images/strengths/{id}.webp
 */
export type StrengthId = 'bridge' | 'saas' | 'lead';

export type StrengthCopy = {
	title: string;
	problem: string;
	approach: string;
	outcome: string;
};

export type Strength = {
	id: StrengthId;
	order: number;
	tech: BrandId[];
	image: string;
	imageAlt: string;
	copy: Record<Locale, StrengthCopy>;
};

export const STRENGTHS: Strength[] = [
	{
		id: 'bridge',
		order: 1,
		tech: ['laravel', 'typescript', 'react'],
		image: '/images/strengths/bridge.webp',
		imageAlt: 'Business and engineering bridge illustration',
		copy: {
			ja: {
				title: 'ビジネスと実装のあいだを翻訳する',
				problem:
					'現場の要望は熱量がある一方で、仕様が曖昧なまま開発に入り、手戻りや認識ズレが起きやすい。',
				approach:
					'法人営業で鍛えたヒアリングと、実装側の制約理解を行き来しながら、優先度・受け入れ条件・実装単位まで落とす。',
				outcome:
					'「作ってほしいもの」ではなく「解くべき課題」から逆算した仕様と、チームが迷わない実装の切り口を提示できる。',
			},
			en: {
				title: 'Translate between business and implementation',
				problem:
					'Stakeholder requests often arrive with energy but fuzzy scope — leading to rework and misalignment once coding starts.',
				approach:
					'I move between sales-honed discovery and engineering constraints to clarify priority, acceptance criteria, and shippable slices.',
				outcome:
					'I can turn “build this” into a problem statement and a clear implementation path the team can execute without guessing.',
			},
		},
	},
	{
		id: 'saas',
		order: 2,
		tech: ['php', 'laravel', 'aws', 'docker'],
		image: '/images/strengths/saas.webp',
		imageAlt: 'Reliable SaaS systems illustration',
		copy: {
			ja: {
				title: 'B2B SaaS を「止まらない」前提で届ける',
				problem:
					'機能追加だけでは不十分で、運用・権限・データ整合・リリース安全性が弱いと、現場の信頼を一気に失う。',
				approach:
					'Laravel / AWS / Docker を軸に、実装だけでなくレビュー観点・リリース手順・障害時の切り分けまで含めて設計する。',
				outcome:
					'スピードと信頼性のバランスを取りながら、業務に耐えるプロダクト改善を継続的に進められる。',
			},
			en: {
				title: 'Ship B2B SaaS that holds up in production',
				problem:
					'Features alone are not enough — weak ops, permissions, data integrity, or release safety quickly erodes trust in the field.',
				approach:
					'With Laravel, AWS, and Docker, I design beyond the happy path: review criteria, release flow, and failure isolation.',
				outcome:
					'I can keep improving a product at a pace that still respects reliability for real business users.',
			},
		},
	},
	{
		id: 'lead',
		order: 3,
		tech: ['github', 'actions', 'cursor', 'typescript'],
		image: '/images/strengths/lead.webp',
		imageAlt: 'Team leadership and AI-assisted delivery illustration',
		copy: {
			ja: {
				title: 'チームの前進速度を上げる',
				problem:
					'属人化した実装や、レビュー待ち・仕様待ちで、少人数チームのスループットが落ちやすい。',
				approach:
					'実装仕様の共通化、GitHub Actions による品質ゲート、Cursor 等の AI 活用で「考える時間」と「手を動かす時間」を同時に短くする。',
				outcome:
					'自分だけが速く書くのではなく、チーム全体が迷いなく届けられる状態をつくれる。',
			},
			en: {
				title: 'Increase the team’s shipping velocity',
				problem:
					'Small teams stall when knowledge is siloed, or when work piles up waiting on review and unclear specs.',
				approach:
					'I standardize implementation specs, use GitHub Actions as quality gates, and leverage AI tools like Cursor to shorten both thinking and typing time.',
				outcome:
					'The win is not “I code faster alone” — it’s a team that can deliver with less friction and clearer ownership.',
			},
		},
	},
];

export function getStrengths(): Strength[] {
	return [...STRENGTHS].sort((a, b) => a.order - b.order);
}
