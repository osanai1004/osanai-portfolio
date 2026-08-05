import { SITE, type Locale } from '../site';

/** UI 文言の翻訳辞書（表示層はこの辞書経由でのみ文言を参照する） */
export const ui = {
	ja: {
		'meta.title': `${SITE.nameJa} | エンジニアチームリーダー`,
		'meta.description':
			'B2B SaaS をつくるエンジニアチームリーダー、小山内 僚のポートフォリオ。PHP / Laravel / AWS を軸に、チームビルディングとプロダクト開発に取り組んでいます。',
		'nav.about': 'About',
		'nav.skills': 'Skills',
		'nav.projects': 'Projects',
		'nav.contact': 'Contact',
		'nav.toggleTheme': 'テーマを切り替える',
		'nav.switchLang': 'English',
		'nav.switchLangShort': 'EN',
		'hero.eyebrow': 'Engineering Team Leader',
		'hero.name': SITE.nameJa,
		'hero.tagline':
			'B2B SaaS を Laravel と AWS でつくる、営業出身のエンジニアチームリーダー。技術とビジネスの両輪で、プロダクトとチームを育てています。',
		'hero.cta.projects': '取り組んでいること',
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
		'projects.eyebrow': 'Projects',
		'projects.title': '取り組んでいること',
		'projects.type.work': '業務',
		'projects.type.freelance': 'フリーランス',
		'projects.type.personal': '個人開発',
		'projects.link.site': 'サイトを見る',
		'projects.link.github': 'GitHub',
		'contact.eyebrow': 'Contact',
		'contact.title': 'お気軽にご連絡ください',
		'contact.body':
			'お仕事のご相談・技術の話題など、GitHub からお声がけください。プロフィールに活動履歴をまとめています。',
		'contact.cta': 'GitHub で見る',
		'footer.builtWith': 'Built with Astro. Design tokens based on Linear (awesome-design-md).',
		'notFound.title': 'ページが見つかりません',
		'notFound.body': 'お探しのページは移動または削除された可能性があります。',
		'notFound.cta': 'トップへ戻る',
	},
	en: {
		'meta.title': `${SITE.nameEn} | Engineering Team Leader`,
		'meta.description':
			'Portfolio of Tsukasa Osanai, an engineering team leader building B2B SaaS with PHP, Laravel, and AWS — combining product development with team building.',
		'nav.about': 'About',
		'nav.skills': 'Skills',
		'nav.projects': 'Projects',
		'nav.contact': 'Contact',
		'nav.toggleTheme': 'Toggle theme',
		'nav.switchLang': '日本語',
		'nav.switchLangShort': 'JA',
		'hero.eyebrow': 'Engineering Team Leader',
		'hero.name': SITE.nameEn,
		'hero.tagline':
			'A sales-turned-engineer leading a product team that builds B2B SaaS with Laravel and AWS — growing both the product and the people behind it.',
		'hero.cta.projects': 'What I work on',
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
		'projects.eyebrow': 'Projects',
		'projects.title': 'What I work on',
		'projects.type.work': 'Work',
		'projects.type.freelance': 'Freelance',
		'projects.type.personal': 'Personal',
		'projects.link.site': 'Visit site',
		'projects.link.github': 'GitHub',
		'contact.eyebrow': 'Contact',
		'contact.title': 'Let’s connect',
		'contact.body':
			'For work inquiries or tech conversations, reach out via GitHub — my profile is the best summary of what I’m up to.',
		'contact.cta': 'Find me on GitHub',
		'footer.builtWith': 'Built with Astro. Design tokens based on Linear (awesome-design-md).',
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
