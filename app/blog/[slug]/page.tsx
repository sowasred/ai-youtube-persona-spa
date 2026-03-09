import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Footer } from '@/app/components/footer'
import { getAllBlogPosts, getBlogPostBySlug } from '@/app/lib/blog'

interface BlogPostPageProps {
	params: Promise<{
		slug: string
	}>
}

function renderContent (content: string) {
	return content
		.split('\n\n')
		.map((block) => block.trim())
		.filter(Boolean)
		.map((block, index) => {
			if (block.startsWith('## ')) {
				return (
					<h2
						key={`${block}-${index}`}
						className="mt-10 text-2xl font-semibold text-foreground"
					>
						{block.replace('## ', '')}
					</h2>
				)
			}

			return (
				<p
					key={`${block}-${index}`}
					className="mt-4 text-lg leading-8 text-muted-foreground"
				>
					{block}
				</p>
			)
		})
}

export async function generateStaticParams () {
	return getAllBlogPosts().map((post) => ({
		slug: post.slug,
	}))
}

export async function generateMetadata (
	{ params }: BlogPostPageProps,
): Promise<Metadata> {
	const { slug } = await params
	const post = getBlogPostBySlug(slug)

	if (!post) {
		return {
			title: 'Post Not Found',
		}
	}

	return {
		title: `${post.title} | ReplyFan Blog`,
		description: post.excerpt,
	}
}

export default async function BlogPostPage ({ params }: BlogPostPageProps) {
	const { slug } = await params
	const post = getBlogPostBySlug(slug)

	if (!post) {
		notFound()
	}

	return (
		<>
			<article className="mx-auto max-w-[98rem] px-4 pb-24 pt-14 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl">
					<Link
						href="/blog"
						className="text-sm font-semibold text-blue-600 hover:text-blue-500"
					>
						Back to blog
					</Link>
					<p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
						{post.angle}
					</p>
					<h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground md:text-5xl">
						{post.title}
					</h1>
					<p className="mt-5 text-xl leading-8 text-muted-foreground">
						{post.excerpt}
					</p>
					<div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
						<span>
							{new Date(post.publishedAt).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</span>
						<span>{post.readTimeMinutes} min read</span>
					</div>
					<div className="mt-10">{renderContent(post.content)}</div>
					<div className="mt-10 flex flex-wrap gap-2">
						{post.tags.map((tag) => (
							<span
								key={tag}
								className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
							>
								#{tag}
							</span>
						))}
					</div>
				</div>
			</article>

			<Footer />
		</>
	)
}
