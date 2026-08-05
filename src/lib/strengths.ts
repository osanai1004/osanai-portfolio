import type { BrandId } from './brands';
import type { Locale } from './site';

/**
 * 強み・課題解決カード（プロダクト名ではなく「解ける課題」を正とする）
 * 文言は実業務（Sunrise 仕様FIX・リリース運用・TL伴走）に即して書く。盛らない。
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
				title: '営業要望を、実装できる仕様に落とす',
				problem:
					'現場の要望は熱量がある一方で、仕様が曖昧なまま開発に入り、手戻りや認識ズレが起きやすい。',
				approach:
					'法人営業の経験を土台に、セールスと開発のあいだで優先度・受け入れ条件・実装単位を合意し、仕様FIXの場で裁断する。',
				outcome:
					'「作ってほしいもの」を、「今やる範囲／後回し／やらない」まで含めた、チームが迷わない実装の切り口にできる。',
			},
			en: {
				title: 'Turn sales requests into buildable specs',
				problem:
					'Stakeholder requests often arrive with energy but fuzzy scope — leading to rework and misalignment once coding starts.',
				approach:
					'Drawing on a B2B sales background, I align sales and engineering on priority, acceptance criteria, and shippable slices — then cut scope in spec-fix sessions.',
				outcome:
					'I turn “build this” into a clear slice: what we do now, what waits, and what we won’t do — so the team can execute without guessing.',
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
				title: 'B2B SaaS を、現場の信頼を落とさず届ける',
				problem:
					'機能追加だけでは不十分で、権限・データ影響・検証・リリース手順が弱いと、業務利用の信頼を一気に失う。',
				approach:
					'Laravel / AWS / Docker 上の自社 SaaS で、実装に加えてステージング検証・影響範囲の確認・月次リリース手順まで含めて回す。',
				outcome:
					'スピードを出しつつも、本番で「壊して終わり」にならない粒度の改善を継続できる。',
			},
			en: {
				title: 'Ship B2B SaaS without losing field trust',
				problem:
					'Features alone are not enough — weak permissions, data impact checks, verification, or release process quickly erodes trust in real business use.',
				approach:
					'On an in-house SaaS built with Laravel, AWS, and Docker, I cover more than the happy path: staging verification, blast-radius checks, and monthly release flow.',
				outcome:
					'I can keep improving the product at a pace that still respects production safety for real users.',
			},
		},
	},
	{
		id: 'lead',
		order: 3,
		tech: ['github', 'cursor', 'typescript'],
		image: '/images/strengths/lead.webp',
		imageAlt: 'Team leadership and AI-assisted delivery illustration',
		copy: {
			ja: {
				title: '少人数チームの手戻りを減らす',
				problem:
					'属人化した実装や、レビュー待ち・仕様待ちで、少人数チームのスループットが落ちやすい。',
				approach:
					'実装仕様FIXの型づくり、1on1 とチケット伴走、Cursor 等の AI 活用で、考える時間と手を動かす時間の両方を短くする。',
				outcome:
					'自分だけが速く書くのではなく、メンバーが迷わず着手・レビュー・届け先まで進める状態に近づけられる。',
			},
			en: {
				title: 'Cut rework on a small engineering team',
				problem:
					'Small teams stall when knowledge is siloed, or when work piles up waiting on review and unclear specs.',
				approach:
					'I run a lightweight spec-fix rhythm, pair through 1:1s and ticket coaching, and use AI tools like Cursor to shorten both thinking and typing time.',
				outcome:
					'The win is not “I code faster alone” — it’s a team that can start, review, and ship with less friction.',
			},
		},
	},
];

export function getStrengths(): Strength[] {
	return [...STRENGTHS].sort((a, b) => a.order - b.order);
}
