type MessageAuthor = 'me' | 'them'

export type ChatMessageData = {
	id: string
	from: MessageAuthor
	text: string
	timestamp: string
	type?: 'voice'
}

export const mockMessages: ChatMessageData[] = [
	{
		id: 'm1',
		from: 'me',
		text: 'Andrew, what should I eat before an evening lift?',
		timestamp: '9:41',
	},
	{
		id: 'm2',
		from: 'them',
		text: 'Go with 25 grams of protein and a small piece of fruit. That’ll keep energy steady.',
		timestamp: '9:41',
	},
	{
		id: 'm3',
		from: 'me',
		text: 'Got it. What about after training?',
		timestamp: '9:41',
	},
	{
		id: 'm4',
		from: 'them',
		text: 'Creatine right after, magnesium before bed. Helps recovery and keeps sleep solid.',
		timestamp: '9:41',
	},
	{
		id: 'm5',
		from: 'me',
		type: 'voice',
		text: 'voice-note',
		timestamp: '9:43',
	},
	{
		id: 'm6',
		from: 'them',
		type: 'voice',
		text: 'voice-reply',
		timestamp: '9:44',
	},
]
