import type { UiKey } from './i18n/ui';

/**
 * ヒーロー右パネルの whoami セッション台本（案A）
 * 文言の正本は i18n 辞書。ここは行の種類と順序だけを持つ。
 */
export type HeroTerminalTone = 'ink' | 'muted' | 'success';

export type HeroTerminalStep =
	| { kind: 'command'; cmdKey: UiKey }
	| { kind: 'output'; textKey: UiKey; tone: HeroTerminalTone }
	| { kind: 'blank' };

export const HERO_TERMINAL_STEPS: readonly HeroTerminalStep[] = [
	{ kind: 'command', cmdKey: 'hero.terminal.cmd.whoami' },
	{ kind: 'output', textKey: 'hero.terminal.out.name', tone: 'ink' },
	{ kind: 'output', textKey: 'hero.terminal.out.role', tone: 'muted' },
	{ kind: 'blank' },
	{ kind: 'command', cmdKey: 'hero.terminal.cmd.mission' },
	{ kind: 'output', textKey: 'hero.terminal.out.missionPrimary', tone: 'ink' },
	{ kind: 'output', textKey: 'hero.terminal.out.missionSecondary', tone: 'muted' },
	{ kind: 'blank' },
	{ kind: 'command', cmdKey: 'hero.terminal.cmd.focus' },
	{ kind: 'output', textKey: 'hero.terminal.out.focus', tone: 'success' },
];

/** スクリーンリーダー（読み上げソフト）向けに、1ループ分をプレーンテキストへ落とす */
export function formatHeroTerminalTranscript(t: (key: UiKey) => string): string {
	const prompt = t('hero.terminal.prompt');
	const lines: string[] = [];

	for (const step of HERO_TERMINAL_STEPS) {
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
