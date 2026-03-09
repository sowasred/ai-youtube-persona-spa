export interface BlogPost {
	title: string
	slug: string
	excerpt: string
	content: string
	publishedAt: string
	readTimeMinutes: number
	tags: string[]
	angle: string
}

export interface GeneratedBlogPost extends BlogPost {
	cta: string
}
