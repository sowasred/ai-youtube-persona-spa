import type { Metadata } from 'next'
import Link from 'next/link'

import { Footer } from '@/app/components/footer'
import { getAllBlogPosts } from '@/app/lib/blog'

export const metadata: Metadata = {
	title: 'ReplyFan Blog',
	description:
		'Ideas on how ReplyFan helps creators stay available, grow fan connection, and earn more from their audience.',
}

export default function BlogPage () {
	const posts = getAllBlogPosts()

	return (
		<>
			<section className="mx-auto max-w-[98rem] px-4 pb-20 pt-14 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-5xl">
					<p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
						ReplyFan Blog
					</p>
					<h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-foreground md:text-6xl">
						How creators can turn fan access into stronger relationships and
						new revenue
					</h1>
					<p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
						ReplyFan helps creators stay available, give fans better access, and
						build new income streams without taking on more daily work.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-[98rem] px-4 pb-24 sm:px-6 lg:px-8">
				<div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 xl:grid-cols-3">
					{posts.map((post) => (
						<Link
							key={post.slug}
							href={`/blog/${post.slug}`}
							className="group rounded-[2rem] border border-border/70 bg-background/90 p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-blue-300"
						>
							<p className="text-sm text-muted-foreground">
								{new Date(post.publishedAt).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'short',
									day: 'numeric',
								})}
							</p>
							<h2 className="mt-3 text-2xl font-semibold leading-tight text-foreground group-hover:text-blue-600">
								{post.title}
							</h2>
							<p className="mt-3 text-base leading-7 text-muted-foreground">
								{post.excerpt}
							</p>
							<div className="mt-5 flex flex-wrap gap-2">
								{post.tags.map((tag) => (
									<span
										key={tag}
										className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
									>
										#{tag}
									</span>
								))}
							</div>
						</Link>
					))}
				</div>
			</section>

			<Footer />
		</>
	)
}
