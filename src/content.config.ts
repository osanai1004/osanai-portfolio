import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * projects コレクション
 * - 配置: src/content/projects/{ja|en}/{slug}.md（entry id が "ja/slug" になる）
 * - 追加手順: 両言語のフォルダに同名の .md を置くだけ（スキーマは Zod で検証される）
 */
const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		type: z.enum(['work', 'freelance', 'personal']),
		tech: z.array(z.string()),
		order: z.number().int(),
		links: z
			.object({
				site: z.url().optional(),
				github: z.url().optional(),
			})
			.optional(),
	}),
});

export const collections = { projects };
