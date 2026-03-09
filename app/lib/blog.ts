import type { BlogPost } from '@/app/lib/blog-types'
import blogPosts from '@/content/blog/posts.json'

const staticPosts = blogPosts as BlogPost[]

export const replyFanBenefitAngles = [
	'Passive income without extra screen time',
	'24/7 fan access without creator burnout',
	'Turning fan questions into a scalable product',
	'Helping fans get answers in the creator’s voice',
	'Monetizing attention without hiring a team',
	'Keeping creator knowledge available after every upload',
	'Making fan relationships deeper without adding manual replies',
	'Launching a digital twin with no upfront operational work',
] as const

export function getAllBlogPosts (): BlogPost[] {
	return [...staticPosts].sort((firstPost, secondPost) => {
		return (
			new Date(secondPost.publishedAt).getTime() -
			new Date(firstPost.publishedAt).getTime()
		)
	})
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
	return staticPosts.map((post) => post.slug)
}
