import type { UiKey } from './i18n/ui';

/**
 * ヒーロー右パネルのターミナル台本
 * 文言の正本は i18n 辞書。ここは行の種類と順序だけを持つ。
 */
export type HeroTerminalTone = 'ink' | 'muted' | 'success';

export type HeroTerminalVariant = 'a' | 'b' | 'c';

export type HeroTerminalStep =
	| { kind: 'command'; cmdKey: UiKey }
	| { kind: 'output'; textKey: UiKey; tone: HeroTerminalTone }
	| { kind: 'blank' };

export const HERO_TERMINAL_VARIANTS: readonly HeroTerminalVariant[] = ['a', 'b', 'c'];

export const HERO_TERMINAL_SCRIPTS: Record<HeroTerminalVariant, readonly HeroTerminalStep[]> = {
	/** 案A — whoami セッション */
	a: [
		{ kind: 'command', cmdKey: 'hero.terminal.a.cmd.whoami' },
		{ kind: 'output', textKey: 'hero.terminal.a.out.name', tone: 'ink' },
		{ kind: 'output', textKey: 'hero.terminal.a.out.role', tone: 'muted' },
		{ kind: 'blank' },
		{ kind: 'command', cmdKey: 'hero.terminal.a.cmd.mission' },
		{ kind: 'output', textKey: 'hero.terminal.a.out.missionPrimary', tone: 'ink' },
		{ kind: 'output', textKey: 'hero.terminal.a.out.missionSecondary', tone: 'muted' },
		{ kind: 'blank' },
		{ kind: 'command', cmdKey: 'hero.terminal.a.cmd.focus' },
		{ kind: 'output', textKey: 'hero.terminal.a.out.focus', tone: 'success' },
	],
	/** 案B — 仕様FIX対話 */
	b: [
		{ kind: 'command', cmdKey: 'hero.terminal.b.cmd.spec' },
		{ kind: 'blank' },
		{ kind: 'output', textKey: 'hero.terminal.b.q.who', tone: 'muted' },
		{ kind: 'output', textKey: 'hero.terminal.b.a.who', tone: 'ink' },
		{ kind: 'output', textKey: 'hero.terminal.b.q.what', tone: 'muted' },
		{ kind: 'output', textKey: 'hero.terminal.b.a.what', tone: 'ink' },
		{ kind: 'output', textKey: 'hero.terminal.b.q.why', tone: 'muted' },
		{ kind: 'output', textKey: 'hero.terminal.b.a.why', tone: 'ink' },
		{ kind: 'blank' },
		{ kind: 'command', cmdKey: 'hero.terminal.b.cmd.commit' },
	],
	/** 案C — キャリアを git log 風に（起承転結の時系列） */
	c: [
		{ kind: 'command', cmdKey: 'hero.terminal.c.cmd.log' },
		{ kind: 'output', textKey: 'hero.terminal.c.log.ki', tone: 'muted' },
		{ kind: 'output', textKey: 'hero.terminal.c.log.sho', tone: 'muted' },
		{ kind: 'output', textKey: 'hero.terminal.c.log.ten', tone: 'ink' },
		{ kind: 'blank' },
		{ kind: 'command', cmdKey: 'hero.terminal.c.cmd.why' },
		{ kind: 'output', textKey: 'hero.terminal.c.out.ketsu', tone: 'success' },
	],
};

export const HERO_TERMINAL_CHROME: Record<HeroTerminalVariant, UiKey> = {
	a: 'hero.cli.chrome.a',
	b: 'hero.cli.chrome.b',
	c: 'hero.cli.chrome.c',
};

export const HERO_TERMINAL_SWITCH: Record<HeroTerminalVariant, UiKey> = {
	a: 'hero.cli.a',
	b: 'hero.cli.b',
	c: 'hero.cli.c',
};

/** スクリーンリーダー（読み上げソフト）向けに、1ループ分をプレーンテキストへ落とす */
export function formatHeroTerminalTranscript(
	t: (key: UiKey) => string,
	steps: readonly HeroTerminalStep[],
): string {
	const prompt = t('hero.terminal.prompt');
	const lines: string[] = [];

	for (const step of steps) {
		if (step.kind === 'blank') {
			lines.push('');
			continue;
		}
		if (step.kind === 'command') {
			lines.push(`${prompt} ${t(step.cmdKey)}`);
			continue;
		}
		lines.push(t(step.textKey));
	}

	return lines.join('\n');
}
