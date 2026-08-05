import { SITE, type Locale } from '../site';

/** UI 文言の翻訳辞書（表示層はこの辞書経由でのみ文言を参照する） */
export const ui = {
	ja: {
		'meta.title': `${SITE.nameEn} | Portfolio`,
		'meta.description':
			'エンジニアチームリーダー・小山内つかさのポートフォリオ。ビジネスと技術をつなぎ、B2B SaaS の課題解決とチームづくりができることを伝えています。',
		'nav.about': 'About',
		'nav.skills': 'Skills',
		'nav.strengths': 'Strengths',
		'nav.contact': 'Contact',
		'nav.toggleTheme': 'テーマを切り替える',
		'nav.switchLang': 'English',
		'nav.switchLangShort': 'EN',
		'hero.eyebrow': 'Engineering Team Leader',
		'hero.name': SITE.nameJaReadable,
		'hero.tagline':
			'営業で培った課題整理力と、Laravel / React / AWS の実装力で、曖昧な要望を「届くプロダクト」に変えます。技術自慢ではなく、解決できることにフォーカスしています。',
		'hero.cta.strengths': '強みを見る',
		'hero.cta.github': 'GitHub',
		'hero.panel.label': 'Focus stack',
		'hero.panel.role': 'Team Lead · Product Engineering',
		'about.eyebrow': 'About',
		'about.title': '営業 7 年から、エンジニアリングの世界へ',
		'about.body1':
			'株式会社MOL CAREERでエンジニアチームリーダーとして、B2B 外国人材マッチング SaaS の開発とチームマネジメントを担当しています。',
		'about.body2':
			'前職は法人向けフィールドセールス約 7 年。働きながら独学を重ね、2025 年に開発職へ転身しました。現在は技術的深度とビジネス・マネジメントの幅を併せ持つ「π 字型キャリア」を目指し、CTO への段階的な移行に取り組んでいます。',
		'about.stat1.value': '7年+',
		'about.stat1.label': '法人営業の経験',
		'about.stat2.value': '2025〜',
		'about.stat2.label': 'エンジニアとしてのキャリア',
		'about.stat3.value': 'チームリード',
		'about.stat3.label': 'エンジニアチームの育成・マネジメント',
		'skills.eyebrow': 'Skills',
		'skills.title': '技術スタック',
		'skills.backend': 'バックエンド',
		'skills.infra': 'クラウド・インフラ',
		'skills.frontend': 'フロントエンド',
		'skills.tools': 'CI/CD・開発ツール',
		'activity.eyebrow': 'Activity',
		'activity.title': 'GitHub Contributions',
		'activity.lead': '直近1年のコントリビューション。',
		'activity.updated': '最終更新：{date}',
		'activity.cacheNote': '※最大1時間キャッシュ',
		'activity.link': 'GitHub で見る',
		'activity.alt': 'GitHub のコントリビューショングラフ',
		'strengths.eyebrow': 'Strengths',
		'strengths.title': '課題解決として届けられること',
		'strengths.lead':
			'いま担当している自社 SaaS 開発・仕様FIX・チームリードの実務に即して、「どんな課題をどう解くか」をまとめています。',
		'contact.eyebrow': 'Contact',
		'contact.title': 'お気軽にご連絡ください',
		'contact.body':
			'お仕事のご相談・技術の話題など、GitHub からお声がけください。プロフィールに活動履歴をまとめています。',
		'contact.cta': 'GitHub で見る',
		'notFound.title': 'ページが見つかりません',
		'notFound.body': 'お探しのページは移動または削除された可能性があります。',
		'notFound.cta': 'トップへ戻る',
	},
	en: {
		'meta.title': `${SITE.nameEn} | Portfolio`,
		'meta.description':
			'Portfolio of Tsukasa Osanai — an engineering team leader who bridges business and technology to ship B2B SaaS outcomes, not just features.',
		'nav.about': 'About',
		'nav.skills': 'Skills',
		'nav.strengths': 'Strengths',
		'nav.contact': 'Contact',
		'nav.toggleTheme': 'Toggle theme',
		'nav.switchLang': '日本語',
		'nav.switchLangShort': 'JA',
		'hero.eyebrow': 'Engineering Team Leader',
		'hero.name': SITE.nameEn,
		'hero.tagline':
			'I turn ambiguous business needs into shipped product — combining sales-honed problem framing with hands-on Laravel, React, and AWS delivery. Less about tools for their own sake; more about the outcomes I can own.',
		'hero.cta.strengths': 'See strengths',
		'hero.cta.github': 'GitHub',
		'hero.panel.label': 'Focus stack',
		'hero.panel.role': 'Team Lead · Product Engineering',
		'about.eyebrow': 'About',
		'about.title': 'From 7 years in sales to engineering',
		'about.body1':
			'I lead the engineering team at MOL CAREER Inc., building a B2B SaaS for global talent matching while managing the team.',
		'about.body2':
			'Before engineering, I spent about 7 years in B2B field sales. After self-directed study alongside work, I moved into software development in 2025. I am now working toward a "π-shaped career" — deep technical skill combined with business and management breadth — on a step-by-step path to CTO.',
		'about.stat1.value': '7+ yrs',
		'about.stat1.label': 'B2B sales experience',
		'about.stat2.value': 'Since 2025',
		'about.stat2.label': 'Engineering career',
		'about.stat3.value': 'Team lead',
		'about.stat3.label': 'Growing and managing an engineering team',
		'skills.eyebrow': 'Skills',
		'skills.title': 'Tech stack',
		'skills.backend': 'Backend',
		'skills.infra': 'Cloud & Infrastructure',
		'skills.frontend': 'Frontend',
		'skills.tools': 'CI/CD & Tooling',
		'activity.eyebrow': 'Activity',
		'activity.title': 'GitHub Contributions',
		'activity.lead': 'Contributions from the last year.',
		'activity.updated': 'Updated: {date}',
		'activity.cacheNote': 'Cached up to 1 hour',
		'activity.link': 'View on GitHub',
		'activity.alt': 'GitHub contribution graph',
		'strengths.eyebrow': 'Strengths',
		'strengths.title': 'Problems I can help solve',
		'strengths.lead':
			'Grounded in the SaaS work, spec-fix sessions, and team lead coaching I do today — focused on the problems I can help solve.',
		'contact.eyebrow': 'Contact',
		'contact.title': 'Let’s connect',
		'contact.body':
			'For work inquiries or tech conversations, reach out via GitHub — my profile is the best summary of what I’m up to.',
		'contact.cta': 'Find me on GitHub',
		'notFound.title': 'Page not found',
		'notFound.body': 'The page you are looking for may have been moved or removed.',
		'notFound.cta': 'Back to top',
	},
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)['ja'];

/** 指定ロケールの翻訳関数を返す */
export function useTranslations(locale: Locale) {
	return function t(key: UiKey): string {
		return ui[locale][key];
	};
}
