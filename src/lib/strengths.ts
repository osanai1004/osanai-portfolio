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
	image: string;
	imageAlt: string;
	copy: Record<Locale, StrengthCopy>;
};

export const STRENGTHS: Strength[] = [
	{
		id: 'bridge',
		order: 1,
		image: '/images/strengths/bridge.webp',
		imageAlt: 'Digging the intent behind messy requests and turning them into a clear spec',
		copy: {
			ja: {
				title: '要望の裏の意図を掘り、実装できる仕様に落とす',
				problem:
					'現場の要望は熱量がある一方で、「本当に解きたい課題」が言語化されないまま開発に入ると、手戻りや認識ズレが起きやすい。',
				approach:
					'延べ 数百社の商談で染みついた「意思決定者は何を見て判断するか」の逆算で、要望の裏にある意図・優先度・受け入れ条件を掘り、仕様FIXの場で裁断する。',
				outcome:
					'「作ってほしいもの」を、「今やる範囲／後回し／やらない」まで含めた、チームが迷わない実装の切り口にできる。',
			},
			en: {
				title: 'Dig out the intent behind requests, then spec it',
				problem:
					'Requests arrive with energy, but when the real problem is never articulated, coding starts on fuzzy ground — and rework follows.',
				approach:
					'Negotiating with hundreds of companies taught me to work backwards from what decision-makers judge by. I dig into the intent, priority, and acceptance criteria behind each request, then cut scope in spec-fix sessions.',
				outcome:
					'I turn “build this” into a clear slice: what we do now, what waits, and what we won’t do — so the team can execute without guessing.',
			},
		},
	},
	{
		id: 'saas',
		order: 2,
		image: '/images/strengths/saas.webp',
		imageAlt: 'Handing a verified SaaS product to trusting people in the field',
		copy: {
			ja: {
				title: '「検証してから届ける」で、現場の信頼を守る',
				problem:
					'機能追加だけでは不十分で、権限・データ影響・検証・リリース手順が弱いと、業務利用の信頼を一気に失う。',
				approach:
					'「効果が出なければ購入不要」のテスト導入を実測で検証してから契約した営業時代と同じ発想で、Laravel / AWS / Docker 上の自社 SaaS をステージング検証・影響範囲の確認・月次リリース手順まで含めて回す。',
				outcome:
					'スピードを出しつつも、本番で「壊して終わり」にならない粒度の改善を継続できる。',
			},
			en: {
				title: 'Verify before shipping — and keep field trust',
				problem:
					'Features alone are not enough — weak permissions, data impact checks, verification, or release process quickly erodes trust in real business use.',
				approach:
					'The same instinct as my “no results, no purchase” trials in sales: on an in-house SaaS built with Laravel, AWS, and Docker, I verify on staging, check the blast radius, and run the monthly release flow before changes reach users.',
				outcome:
					'I can keep improving the product at a pace that still respects production safety for real users.',
			},
		},
	},
	{
		id: 'lead',
		order: 3,
		image: '/images/strengths/lead.webp',
		imageAlt: 'A team lead handing context so a small team ships with less rework',
		copy: {
			ja: {
				title: '判断材料を渡して、チームの手戻りを減らす',
				problem:
					'少人数だと、仕様が固まる前に実装が走り、レビューで初めてズレが分かる。速さの問題というより、認識ズレの後始末が重い。',
				approach:
					'正解を配るのではなく、背景・優先度・受け入れ条件という判断材料を揃えて渡す。実装仕様FIXの型づくりと、1on1・チケット伴走で、着手前にズレを潰す。',
				outcome:
					'自分が全部書くのではなく、着手前にズレを潰せる状態に近づける。速さより、後からやり直さないこと。',
			},
			en: {
				title: 'Hand the team context, not answers — and cut rework',
				problem:
					'On a small team, implementation often starts before the spec is settled — and the gap only shows up in review. The real cost is not speed, but cleaning up misalignment.',
				approach:
					'Instead of handing out answers, I hand over what people need to decide: background, priorities, acceptance criteria. A lightweight spec-fix rhythm and 1:1 ticket coaching catch the gap before work starts.',
				outcome:
					'The win is not writing everything myself — it’s catching the gap before work starts. Less about speed, more about not redoing it later.',
			},
		},
	},
];

export function getStrengths(): Strength[] {
	return [...STRENGTHS].sort((a, b) => a.order - b.order);
}
