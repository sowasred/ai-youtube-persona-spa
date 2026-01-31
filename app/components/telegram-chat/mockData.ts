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

// ID 1: Andrew Huberman - Neuroscience/Health topics
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
		text: "Go with 25 grams of protein and a small piece of fruit. That'll keep energy steady.",
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

// ID 2: Casey Zander - Dating/Relationships topics
export const caseyZanderMessages: ChatMessageData[] = [
	{
		id: 'cz1',
		from: 'me',
		text: 'What do I text after a good first date?',
		timestamp: '9:41',
	},
	{
		id: 'cz2',
		from: 'them',
		text: 'Keep momentum by saying "Had fun. Free Thu 7? Drinks at Oak & Ivy?" Done. No essay.',
		timestamp: '9:41',
	},
	{
		id: 'cz3',
		from: 'me',
		text: 'She takes hours to reply. Do I double text?',
		timestamp: '9:41',
	},
	{
		id: 'cz4',
		from: 'them',
		text: 'Nope. Live your life. If you must, wait a day and send one new, purposeful ping.',
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

// ID 4: Jordan B. Peterson - Psychology/Philosophy topics
export const jordanPetersonMessages: ChatMessageData[] = [
	{
		id: 'jp1',
		from: 'me',
		text: "I'm stuck. I keep procrastinating on starting my portfolio. I'm scared it won't be good enough. What should I do?",
		timestamp: '9:41',
	},
	{
		id: 'jp2',
		from: 'them',
		text: "You're negotiating with fear. Don't wait for courage—build it. Pick one tiny piece you can finish by tonight. Publish it, even if it's rough. Momentum first, polish second.",
		timestamp: '9:41',
	},
	{
		id: 'jp3',
		from: 'me',
		text: 'Okay, but how do I keep going after that first push? I always slide back..',
		timestamp: '9:41',
	},
	{
		id: 'jp4',
		from: 'them',
		text: 'Give the work a time and a place—same hour, same chair. Track one metric: "minutes spent creating" per day. Miss a day? Start the next day, smaller. Discipline beats mood when mood is unreliable.',
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

// ID 5: Healthy Gamer GG - Mental Health/Gaming topics
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
	4: jordanPetersonMessages, // Jordan B. Peterson
	5: healthyGamerMessages,   // Healthy Gamer GG
}

// Default messages (fallback)
export const mockMessages = andrewHubermanMessages
