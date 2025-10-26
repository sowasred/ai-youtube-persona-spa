type MessageAuthor = 'me' | 'them'

export type ChatMessageData = {
	id: string
	from: MessageAuthor
	text: string
	timestamp: string
	type?: 'voice'
}

export type Creator = {
	id: number
	name: string
	image: string
}

// Andrew Huberman - Neuroscience/Health topics
export const andrewHubermanMessages: ChatMessageData[] = [
	{
		id: 'ah1',
		from: 'me',
		text: 'Andrew, what should I eat before an evening lift?',
		timestamp: '9:41',
	},
	{
		id: 'ah2',
		from: 'them',
		text: 'Go with 25 grams of protein and a small piece of fruit. That’ll keep energy steady.',
		timestamp: '9:41',
	},
	{
		id: 'ah3',
		from: 'me',
		text: 'Got it. What about after training?',
		timestamp: '9:41',
	},
	{
		id: 'ah4',
		from: 'them',
		text: 'Creatine right after, magnesium before bed. Helps recovery and keeps sleep solid.',
		timestamp: '9:41',
	},
	{
		id: 'ah5',
		from: 'me',
		type: 'voice',
		text: 'voice-note',
		timestamp: '9:43',
	},
	{
		id: 'ah6',
		from: 'them',
		type: 'voice',
		text: 'voice-reply',
		timestamp: '9:44',
	},
]

// Casey Zander - Dating/Relationships topics
export const caseyZanderMessages: ChatMessageData[] = [
	{
		id: 'cz1',
		from: 'me',
		text: 'Casey, how do I approach a girl at the gym?',
		timestamp: '9:41',
	},
	{
		id: 'cz2',
		from: 'them',
		text: 'Keep it simple. "Hey, I noticed you working on your form. Mind if I give you a tip?"',
		timestamp: '9:41',
	},
	{
		id: 'cz3',
		from: 'me',
		text: 'What if she says no?',
		timestamp: '9:41',
	},
	{
		id: 'cz4',
		from: 'them',
		text: 'Respect it and move on. Confidence is not about getting every girl, it is about handling rejection well.',
		timestamp: '9:41',
	},
	{
		id: 'cz5',
		from: 'me',
		type: 'voice',
		text: 'voice-note',
		timestamp: '9:43',
	},
	{
		id: 'cz6',
		from: 'them',
		type: 'voice',
		text: 'voice-reply',
		timestamp: '9:44',
	},
]

// Jordan B. Peterson - Psychology/Philosophy topics
export const jordanPetersonMessages: ChatMessageData[] = [
	{
		id: 'jp1',
		from: 'me',
		text: 'Dr. Peterson, I feel lost in life. Where do I start?',
		timestamp: '9:41',
	},
	{
		id: 'jp2',
		from: 'them',
		text: 'Start by cleaning your room. Order in the small things creates order in the mind.',
		timestamp: '9:41',
	},
	{
		id: 'jp3',
		from: 'me',
		text: 'That seems too simple...',
		timestamp: '9:41',
	},
	{
		id: 'jp4',
		from: 'them',
		text: 'The simple things are the foundation. Master the basics before tackling complexity. What is your room like right now?',
		timestamp: '9:41',
	},
	{
		id: 'jp5',
		from: 'me',
		type: 'voice',
		text: 'voice-note',
		timestamp: '9:43',
	},
	{
		id: 'jp6',
		from: 'them',
		type: 'voice',
		text: 'voice-reply',
		timestamp: '9:44',
	},
]

// Healthy Gamer GG - Mental Health/Gaming topics
export const healthyGamerMessages: ChatMessageData[] = [
	{
		id: 'hg1',
		from: 'me',
		text: 'Dr. K, I am addicted to gaming and it is ruining my life.',
		timestamp: '9:41',
	},
	{
		id: 'hg2',
		from: 'them',
		text: 'First, let us understand why you game. What emotions are you trying to escape?',
		timestamp: '9:41',
	},
	{
		id: 'hg3',
		from: 'me',
		text: 'I feel lonely and gaming gives me a sense of achievement.',
		timestamp: '9:41',
	},
	{
		id: 'hg4',
		from: 'them',
		text: 'That is valid. Gaming is not the problem - it is the symptom. Let us work on building real-world connections and achievements.',
		timestamp: '9:41',
	},
	{
		id: 'hg5',
		from: 'me',
		type: 'voice',
		text: 'voice-note',
		timestamp: '9:43',
	},
	{
		id: 'hg6',
		from: 'them',
		type: 'voice',
		text: 'voice-reply',
		timestamp: '9:44',
	},
]

// Creator messages mapping
export const creatorMessages: Record<number, ChatMessageData[]> = {
	1: andrewHubermanMessages, // Andrew Huberman
	2: caseyZanderMessages,    // Casey Zander
	5: jordanPetersonMessages, // Jordan B. Peterson
	6: healthyGamerMessages,   // Healthy Gamer GG
}

// Default messages (fallback)
export const mockMessages = andrewHubermanMessages
