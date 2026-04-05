import type { BlogPost, StoredBlogPost } from '@/app/lib/blog-types'
import blogPosts from '@/content/blog/posts.json'

const storedPosts = blogPosts as StoredBlogPost[]

export const replyFanBenefitAngles = [
	'Passive income without extra screen time',
	'24/7 fan access without creator burnout',
	'Turning fan questions into a scalable product',
	'Helping fans get answers in the creator\'s voice',
	'Monetizing attention without hiring a team',
	'Keeping creator knowledge available after every upload',
	'Making fan relationships deeper without adding manual replies',
	'Launching a digital twin with no upfront operational work',
] as const

function toBlogPost (post: StoredBlogPost): BlogPost {
	return {
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		content: post.content,
		publishedAt: post.publishedAt,
		readTimeMinutes: post.readTimeMinutes,
		tags: post.tags,
		angle: post.angle,
	}
}

export function getAllBlogPosts (): BlogPost[] {
	return [...storedPosts]
		.sort((firstPost, secondPost) => {
		return (
			new Date(secondPost.publishedAt).getTime() -
			new Date(firstPost.publishedAt).getTime()
		)
	})
		.map(toBlogPost)
}

export function getBlogPostBySlug (slug: string): BlogPost | undefined {
	return getAllBlogPosts().find((post) => post.slug === slug)
}

export function getRandomBenefitAngle (): string {
	const randomIndex = Math.floor(
		Math.random() * replyFanBenefitAngles.length,
	)

	return replyFanBenefitAngles[randomIndex]
}

export function getBlogPostSlugs (): string[] {
	return storedPosts.map((post) => post.slug)
}
