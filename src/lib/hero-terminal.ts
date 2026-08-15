import type { UiKey } from './i18n/ui';

/**
 * ヒーロー右パネルの git log 台本（起承転結）
 * 文言の正本は i18n 辞書。ここは行の種類と順序だけを持つ。
 */
export type HeroTerminalTone = 'ink' | 'muted' | 'success';

export type HeroTerminalStep =
	| { kind: 'command'; cmdKey: UiKey }
	| { kind: 'output'; textKey: UiKey; tone: HeroTerminalTone }
	| { kind: 'blank' };

export const HERO_TERMINAL_STEPS: readonly HeroTerminalStep[] = [
	{ kind: 'command', cmdKey: 'hero.terminal.cmd.log' },
	{ kind: 'output', textKey: 'hero.terminal.log.ki', tone: 'muted' },
	{ kind: 'output', textKey: 'hero.terminal.log.sho', tone: 'muted' },
	{ kind: 'output', textKey: 'hero.terminal.log.ten', tone: 'ink' },
	{ kind: 'blank' },
	{ kind: 'command', cmdKey: 'hero.terminal.cmd.why' },
	{ kind: 'output', textKey: 'hero.terminal.out.ketsu', tone: 'success' },
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
