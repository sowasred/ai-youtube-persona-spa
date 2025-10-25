import Feature from './feature'
import { FeelsLikeRealChatAnimation } from './feels-like-real-chat-animation'
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
		visual: <FeelsLikeRealChatAnimation />
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
		title: 'Private by Design',
		subtitle:
			'Your data stays yours. Always encrypted, always secure.',
		isLeft: false,
		visual: null
	},
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
