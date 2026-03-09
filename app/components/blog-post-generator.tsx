'use client'

import { useState } from 'react'
import Link from 'next/link'

import type { GeneratedBlogPost } from '@/app/lib/blog-types'

function renderContentBlocks (content: string) {
	return content
		.split('\n\n')
		.map((block) => block.trim())
		.filter(Boolean)
		.map((block, index) => {
			if (block.startsWith('## ')) {
				return (
					<h3
						key={`${block}-${index}`}
						className="mt-6 text-xl font-semibold text-foreground"
					>
						{block.replace('## ', '')}
					</h3>
				)
			}

			return (
				<p
					key={`${block}-${index}`}
					className="text-base leading-7 text-muted-foreground"
				>
					{block}
				</p>
			)
		})
}

export function BlogPostGenerator () {
	const [generatedPost, setGeneratedPost] =
		useState<GeneratedBlogPost | null>(null)
	const [isLoading, setIsLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	const handleGenerate = async () => {
		setIsLoading(true)
		setErrorMessage(null)

		try {
			const response = await fetch('/api/blog/generate', {
				method: 'POST',
			})

			if (!response.ok) {
				const payload = (await response.json()) as { error?: string }
				throw new Error(payload.error || 'Failed to generate blog post')
			}

			const payload = (await response.json()) as {
				post: GeneratedBlogPost
			}

			setGeneratedPost(payload.post)
		} catch (error) {
			const message =
				error instanceof Error
					? error.message
					: 'Failed to generate blog post'

			setErrorMessage(message)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="rounded-[2rem] border border-border/70 bg-background/90 p-6 shadow-sm backdrop-blur">
			<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
				<div className="max-w-2xl">
					<p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
						AI Blog Generator
					</p>
					<h2 className="mt-2 text-3xl font-semibold text-foreground">
						Generate a concise ReplyFan post from a random benefit angle
					</h2>
					<p className="mt-3 text-base leading-7 text-muted-foreground">
						Uses your OpenAI API key server-side and keeps the writing short,
						clear, and focused on creators, fans, and ReplyFan’s done-for-you
						model.
					</p>
				</div>
				<button
					type="button"
					onClick={handleGenerate}
					disabled={isLoading}
					className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
				>
					{isLoading ? 'Generating...' : 'Generate Post'}
				</button>
			</div>

			{errorMessage ? (
				<p className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300">
					{errorMessage}
				</p>
			) : null}

			{generatedPost ? (
				<div className="mt-8 rounded-[1.75rem] border border-border bg-muted/20 p-6">
					<div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
						<span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700 dark:bg-blue-950 dark:text-blue-200">
							{generatedPost.angle}
						</span>
						<span>{generatedPost.readTimeMinutes} min read</span>
					</div>
					<h3 className="mt-4 text-3xl font-semibold text-foreground">
						{generatedPost.title}
					</h3>
					<p className="mt-3 text-lg text-muted-foreground">
						{generatedPost.excerpt}
					</p>
					<div className="mt-6 flex flex-col gap-4">
						{renderContentBlocks(generatedPost.content)}
					</div>
					<p className="mt-6 text-sm font-medium text-foreground">
						{generatedPost.cta}
					</p>
					<div className="mt-6 flex flex-wrap gap-2">
						{generatedPost.tags.map((tag) => (
							<span
								key={tag}
								className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
							>
								#{tag}
							</span>
						))}
					</div>
				</div>
			) : null}

			<p className="mt-4 text-sm text-muted-foreground">
				Set <code>OPENAI_API_KEY</code> and optionally{' '}
				<code>OPENAI_BLOG_MODEL</code>. Static posts stay available even if the
				key is missing.
			</p>

			<Link
				href="/blog"
				className="mt-4 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-500"
			>
				Open the full blog page
			</Link>
		</div>
	)
}
