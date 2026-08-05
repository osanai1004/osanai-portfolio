/** サイト全体の定数（マジックナンバー・ハードコード禁止の集約先） */
export const SITE = {
	/** 表示名（英語） */
	nameEn: 'Tsukasa Osanai',
	/** 表示名（日本語） */
	nameJa: '小山内 僚',
	/** GitHub プロフィール URL（コンタクト導線） */
	githubUrl: 'https://github.com/osanai1004', // pragma: allowlist secret
	/** GitHub ユーザー名（表示用） */
	githubUser: 'osanai1004', // pragma: allowlist secret
} as const;

export const LOCALES = ['ja', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'ja';
