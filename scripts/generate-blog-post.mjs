import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const blogPostsPath = path.join(process.cwd(), 'content/blog/posts.json')
const defaultModel = process.env.OPENAI_BLOG_MODEL || 'gpt-5-mini'

const replyFanBenefitAngles = [
	'Passive income without extra screen time',
	'24/7 fan access without creator burnout',
	'Turning fan questions into a scalable product',
	'Helping fans get answers in the creator’s voice',
	'Monetizing attention without hiring a team',
	'Keeping creator knowledge available after every upload',
	'Making fan relationships deeper without adding manual replies',
	'Launching a digital twin with no upfront operational work',
]

function extractOutputText (payload) {
	if (typeof payload?.output_text === 'string' && payload.output_text.trim()) {
		return payload.output_text
	}

	if (!Array.isArray(payload?.output)) {
		return null
	}

	for (const outputItem of payload.output) {
		if (!Array.isArray(outputItem?.content)) {
			continue
		}

		for (const contentItem of outputItem.content) {
			if (
				typeof contentItem?.text === 'string' &&
				contentItem.text.trim()
			) {
				return contentItem.text
			}

			if (
				typeof contentItem?.output_text === 'string' &&
				contentItem.output_text.trim()
			) {
				return contentItem.output_text
			}
		}
	}

	return null
}

function getRandomBenefitAngle () {
	const randomIndex = Math.floor(
		Math.random() * replyFanBenefitAngles.length,
	)

	return replyFanBenefitAngles[randomIndex]
}

function createSlug (value) {
	return value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
}

function createUniqueSlug (value, existingPosts) {
	const baseSlug = createSlug(value)
	const existingSlugs = new Set(existingPosts.map((post) => post.slug))

	if (!existingSlugs.has(baseSlug)) {
		return baseSlug
	}

	const dateSuffix = new Date().toISOString().slice(0, 10)
	const datedSlug = `${baseSlug}-${dateSuffix}`

	if (!existingSlugs.has(datedSlug)) {
		return datedSlug
	}

	return `${datedSlug}-${Date.now()}`
}

async function generatePost (angle) {
	const apiKey = process.env.OPENAI_API_KEY

	if (!apiKey) {
		throw new Error('OPENAI_API_KEY is missing.')
	}

	const response = await fetch('https://api.openai.com/v1/responses', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${apiKey}`,
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
							text: `Generate one concise ReplyFan blog post focused on this random subject: ${angle}. Include benefits for both creators and fans. Keep it practical. Return JSON with title, excerpt, content, readTimeMinutes, tags, and cta.`,
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
							readTimeMinutes: { type: 'number' },
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

	const payload = await response.json()

	if (!response.ok) {
		throw new Error(
			payload?.error?.message ||
				'OpenAI request failed while generating the blog post.',
		)
	}

	const outputText = extractOutputText(payload)

	if (!outputText) {
		throw new Error('OpenAI returned an empty response.')
	}

	return JSON.parse(outputText)
}

async function main () {
	const existingPosts = JSON.parse(await readFile(blogPostsPath, 'utf8'))
	const angle = getRandomBenefitAngle()
	const generatedPost = await generatePost(angle)

	const newPost = {
		title: generatedPost.title,
		slug: createUniqueSlug(generatedPost.title, existingPosts),
		excerpt: generatedPost.excerpt,
		content: generatedPost.content,
		publishedAt: new Date().toISOString(),
		readTimeMinutes: generatedPost.readTimeMinutes,
		tags: generatedPost.tags,
		angle,
	}

	const updatedPosts = [newPost, ...existingPosts]

	await writeFile(
		blogPostsPath,
		`${JSON.stringify(updatedPosts, null, '\t')}\n`,
		'utf8',
	)

	console.log(
		JSON.stringify(
			{
				title: newPost.title,
				slug: newPost.slug,
				angle,
			},
			null,
			2,
		),
	)
}

main().catch((error) => {
	console.error(error instanceof Error ? error.message : error)
	process.exit(1)
})
