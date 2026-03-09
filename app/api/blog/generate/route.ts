import { NextResponse } from 'next/server'

import { getRandomBenefitAngle } from '@/app/lib/blog'
import type { GeneratedBlogPost } from '@/app/lib/blog-types'

interface OpenAIResponsePayload {
	output_text?: string
	output?: Array<{
		content?: Array<{
			text?: string
			output_text?: string
		}>
	}>
	error?: {
		message?: string
	}
}

const defaultModel = process.env.OPENAI_BLOG_MODEL || 'gpt-5-mini'

function createSlug (value: string): string {
	return value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
}

function extractOutputText (payload: OpenAIResponsePayload): string | null {
	if (typeof payload.output_text === 'string' && payload.output_text.trim()) {
		return payload.output_text
	}

	if (!Array.isArray(payload.output)) {
		return null
	}

	for (const outputItem of payload.output) {
		if (!Array.isArray(outputItem.content)) {
			continue
		}

		for (const contentItem of outputItem.content) {
			if (
				typeof contentItem.text === 'string' &&
				contentItem.text.trim()
			) {
				return contentItem.text
			}

			if (
				typeof contentItem.output_text === 'string' &&
				contentItem.output_text.trim()
			) {
				return contentItem.output_text
			}
		}
	}

	return null
}

export async function POST () {
	const apiKey = process.env.OPENAI_API_KEY

	if (!apiKey) {
		return NextResponse.json(
			{
				error:
					'OPENAI_API_KEY is missing. Add it to generate new blog posts.',
			},
			{ status: 500 },
		)
	}

	const angle = getRandomBenefitAngle()

	const response = await fetch('https://api.openai.com/v1/responses', {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${apiKey}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			model: defaultModel,
			input: [
				{
					role: 'developer',
					content: [
						{
							type: 'input_text',
							text:
								'Return valid JSON only. Write concise blog content for ReplyFan. The audience is influencers, YouTubers, and their fans. Emphasize that a digital twin gives creators 24/7 availability, convenience, deeper fan connection, and passive income potential without operational investment. ReplyFan handles setup, training, and operations. The creator mainly needs to tell followers they can talk to the digital twin. Keep the tone sharp, commercial, and precise. Avoid hypey filler, long intros, and generic AI language.',
						},
					],
				},
				{
					role: 'user',
					content: [
						{
							type: 'input_text',
							text: `Generate one concise ReplyFan blog post focused on this random subject: ${angle}. Include benefits for both creators and fans. The post should feel current and practical, not futuristic fluff.`,
						},
					],
				},
			],
			text: {
				format: {
					type: 'json_schema',
					name: 'replyfan_blog_post',
					strict: true,
					schema: {
						type: 'object',
						properties: {
							title: { type: 'string' },
							excerpt: { type: 'string' },
							content: { type: 'string' },
							readTimeMinutes: {
								type: 'number',
							},
							tags: {
								type: 'array',
								items: { type: 'string' },
							},
							cta: { type: 'string' },
						},
						required: [
							'title',
							'excerpt',
							'content',
							'readTimeMinutes',
							'tags',
							'cta',
						],
						additionalProperties: false,
					},
				},
			},
		}),
	})

	const payload = (await response.json()) as OpenAIResponsePayload

	if (!response.ok) {
		return NextResponse.json(
			{
				error:
					payload.error?.message ||
					'OpenAI request failed while generating the blog post.',
			},
			{ status: response.status },
		)
	}

	const outputText = extractOutputText(payload)

	if (!outputText) {
		return NextResponse.json(
			{
				error: 'OpenAI returned an empty response.',
			},
			{ status: 500 },
		)
	}

	let parsedPost: Omit<
		GeneratedBlogPost,
		'slug' | 'publishedAt' | 'angle'
	>

	try {
		parsedPost = JSON.parse(outputText) as Omit<
			GeneratedBlogPost,
			'slug' | 'publishedAt' | 'angle'
		>
	} catch {
		return NextResponse.json(
			{
				error: 'OpenAI returned invalid JSON for the blog post.',
			},
			{ status: 500 },
		)
	}

	const post: GeneratedBlogPost = {
		...parsedPost,
		slug: createSlug(parsedPost.title),
		publishedAt: new Date().toISOString(),
		angle,
	}

	return NextResponse.json({ post })
}
