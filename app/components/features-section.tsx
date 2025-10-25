import type { ReactNode } from 'react'

import Feature from './feature'
import { TrainedOnYouAnimation } from './trained-on-you-animation'

interface FeatureConfig {
	title: string
	subtitle: string
	isLeft: boolean
	visual: React.ReactElement | null
}

const features: FeatureConfig[] = [
	{
		title: 'Trained on You',
		subtitle:
			'Built from your own videos. Answers sound like you, your tone'
			+ ' and phrasing.',
		isLeft: true,
		visual: <TrainedOnYouAnimation />
	},
	{
		title: 'Feels Like a Real Chat',
		subtitle:
			'Fans can text or send voice messages. Your AI replies naturally,'
			+ ' with context from real conversations.',
		isLeft: false,
		visual: null
	},
	{
		title: 'Always On',
		subtitle:
			'Your voice, available 24/7. Engage your audience even when you’re'
			+ ' off the clock.',
		isLeft: true,
		visual: null
	},
	{
		title: 'Backed by Your Knowledge',
		subtitle:
			'Every answer comes from what you’ve actually said. Not a guess.',
		isLeft: false,
		visual: null
	},
	{
		title: 'Talk or Type',
		subtitle:
			'Fans can hear you or read you. It’s the same connection, in any'
			+ ' format.',
		isLeft: true,
		visual: null
	},
	{
		title: 'We Handle the Tech',
		subtitle:
			'We setup and host your service. You focus on creating.',
		isLeft: false,
		visual: null
	},
	{
		title: 'Private by Design',
		subtitle:
			'Your data stays yours. Always encrypted, always secure.',
		isLeft: true,
		visual: null
	},
	{
		title: 'Ready to Grow',
		subtitle:
			'Built to scale with your channel. Whether it’s hundreds or'
			+ ' millions, it just works.',
		isLeft: false,
		visual: null
	}
]

export default function FeaturesSection() {
  return(
    <div className="flex gap-24 flex-col">
      {features.map((elem, i) => {
        return (
          <Feature
            key={i}
            isLeft={elem.isLeft}
            title={elem.title}
            subtitle={elem.subtitle}
            visual={elem.visual}
          />
        )
      })}
    </div>
  )
}
