/** サイト全体の定数（マジックナンバー・ハードコード禁止の集約先） */
export const SITE = {
	/** 表示名（英語） */
	nameEn: 'Tsukasa Osanai',
	/** 表示名（日本語・漢字） */
	nameJa: '小山内 僚',
	/**
	 * タブ・ヘッダー向けの読みやすい表記（日本語圏向け）
	 * 漢字「僚」は初見で読めないことがあるため、ひらがな表記を併用する
	 */
	nameJaReadable: '小山内つかさ',
	/** 姓の読み */
	familyReading: 'おさない',
	/** 名の読み */
	givenReading: 'つかさ',
	/** 姓（漢字） */
	familyKanji: '小山内',
	/** 名（漢字） */
	givenKanji: '僚',
	/** GitHub プロフィール URL（コード・活動履歴。公開情報） */
	githubUrl: 'https://github.com/osanai1004', // pragma: allowlist secret
	/** GitHub ユーザー名（表示用・公開情報） */
	githubUser: 'osanai1004', // pragma: allowlist secret
	/** GitHub アバター（ヘッダー・favicon 用） */
	avatarPath: '/images/avatar.png',
	/** OGP（URL共有プレビュー）画像 */
	ogImagePath: '/images/og.png',
	/** 所属企業の公式サイト（About の社名リンク） */
	companyUrl: 'https://www.molcareer.com',
	/** LinkedIn プロフィール（仕事の問い合わせ先。公開情報） */
	linkedinUrl: 'https://www.linkedin.com/in/僚-小山内-014754418',
} as const;

export const LOCALES = ['ja', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'ja';
