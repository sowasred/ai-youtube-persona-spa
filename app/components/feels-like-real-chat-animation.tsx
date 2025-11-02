'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useInView } from '../hooks/use-in-view'

interface FeelsLikeRealChatAnimationProps {
	thumbnailSrc?: string
	videoTitle?: string
	transcript?: string
	highlightedSentences?: string[]
	chatResponse?: string
}

const containerClasses = [
	'relative',
	'flex',
	'w-full',
	'min-w-full',
	'h-[750px]',
	'items-center',
	'justify-center',
	'overflow-hidden',
	'rounded-3xl',
	'border',
	'border-white/60',
	'dark:border-gray-700/60',
	'bg-white/60',
	'dark:bg-gray-800/60',
	'from-[#f5f5f5]',
	'dark:from-gray-800',
	'to-[#e9ecef]',
	'dark:to-gray-700',
	'bg-gradient-to-b',
	'p-6',
	'shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]',
	'dark:shadow-[inset_0_1px_0_rgba(0,0,0,0.3)]',
	'backdrop-blur-xl'
]

const videoCardClasses = [
	'relative',
	'flex',
	'flex-col',
	'items-start',
	'rounded-2xl',
	'bg-white/90',
	'dark:bg-gray-700/90',
	'p-2',
	'sm:p-3',
	'lg:p-4',
	'shadow-[0_8px_32px_rgba(0,0,0,0.1)]',
	'dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]',
	'backdrop-blur-sm',
	'border',
	'border-white/50',
	'dark:border-gray-600/50',
	'w-full',
	'max-w-full',
	'sm:max-w-md',
	'lg:min-w-full',
	'bottom-[30px]'
]

const videoThumbClasses = [
	'w-full',
	'max-w-sm',
	'sm:max-w-md',
	'h-40',
	'sm:h-48',
	'lg:h-56',
	'rounded-xl',
	'object-cover',
	'relative',
	'overflow-hidden'
]

const videoTitleClasses = [
	'text-lg',
	'font-medium',
	'text-gray-800',
	'dark:text-gray-200',
	'mt-4',
	'text-left',
	'w-full'
]

const highlightClasses = [
	'bg-gradient-to-r',
	'from-yellow-200',
	'to-orange-200',
	'dark:from-black',
	'dark:to-black',
	'bg-[length:200%_100%]',
	'animate-highlight',
	'px-1',
	'rounded-sm',
	'text-black',
	'dark:text-white'
]


const playIconOverlayClasses = [
	'absolute',
	'inset-0',
	'flex',
	'items-center',
	'justify-center'
]

const playButtonClasses = [
	'w-12',
	'h-12',
	'bg-red-600',
	'rounded-full',
	'flex',
	'items-center',
	'justify-center',
	'shadow-lg'
]

const playButtonSvgClasses = [
	'w-6',
	'h-6',
	'ml-1',
	'text-white'
]

const connectionLineClasses = [
	'absolute',
	'left-1/2',
	'transform',
	'-translate-x-1/2',
	'w-[5px]',
	'h-[70px]',
	'ty:h-[90px]',
	'min-[400px]:h-[130px]',
	'sm:h-[80px]',
	'md:h-[85px]',
	'lg:h-[90px]',
	'xl:h-[95px]',
	'2xl:h-[100px]',
	'3xl:h-[105px]',
	'top-[255px]',
	'min-[400px]:top-[240px]',
	'sm:top-[265px]',
	'md:top-[270px]',
	'lg:top-[275px]',
	'xl:top-[280px]',
	'2xl:top-[285px]',
	'3xl:top-[290px]',
	'z-10'
]

const connectionLineBarClasses = [
	'w-full',
	'h-full',
	'bg-blue-500'
]

const connectionLineDotClasses = [
	'absolute',
	'left-1/2',
	'transform',
	'-translate-x-1/2',
	'w-4',
	'h-4',
	'rounded-full',
	'bg-blue-500'
]

const transcriptWrapperClasses = [
	'absolute',
	'bottom-[240px]',
	'lg:bottom-[170px]',
	'left-1/2',
	'transform',
	'-translate-x-1/2',
	'w-[90%]',
	'sm:w-4/5',
	'lg:w-4/5',
	'max-w-2xl'
]

const transcriptCardClasses = [
	'relative',
	'bg-white/95',
	'dark:bg-gray-700/95',
	'backdrop-blur-sm',
	'rounded-2xl',
	'border',
	'border-gray-200/80',
	'dark:border-gray-600/80',
	'shadow-lg',
	'p-4',
	'sm:p-5',
	'lg:p-6'
]

const transcriptLabelContainerClasses = [
	'flex',
	'items-center',
	'gap-2',
	'mb-3',
	'sm:mb-4'
]

const transcriptLabelDotClasses = [
	'w-2',
	'h-2',
	'bg-blue-500',
	'rounded-full'
]

const transcriptLabelTextClasses = [
	'text-xs',
	'font-semibold',
	'text-gray-600',
	'dark:text-gray-400',
	'uppercase',
	'tracking-wider'
]

const transcriptQuoteClasses = [
	'absolute',
	'text-gray-400',
	'dark:text-gray-500',
	'text-2xl',
	'sm:text-3xl',
	'font-serif',
	'leading-none'
]

const transcriptTextWithQuoteClasses = [
	'text-sm',
	'lg:text-xl',
	'font-bold',
	'leading-relaxed',
	'text-gray-800',
	'dark:text-gray-200',
	'w-full',
	'text-left',
	'pl-3',
	'sm:pl-4'
]

const chatBubbleWrapperClasses = [
	'absolute',
	'bottom-[30px]',
	'left-1/2',
	'transform',
	'-translate-x-1/2',
	'w-[90%]',
	'sm:w-4/5',
	'lg:w-4/5',
	'max-w-2xl'
]

const messageBubbleClasses = [
	'bg-[#dcf8c6]',
	'py-4',
	'px-5',
	'pb-3.5',
	'rounded-[18px]',
	'rounded-bl-[6px]',
	'shadow-[0_6px_18px_rgba(59,170,89,0.22)]',
	'text-md',
	'leading-[1.4]',
	'text-slate-900',
	'text-left',
	'w-full',
	'max-w-full',
	'relative',
	'flex',
	'flex-col',
	'gap-1.5'
]

const messageTextClasses = [
	'm-0',
	'text-left'
]

const messageMetaClasses = [
	'inline-flex',
	'gap-1.5',
	'items-center',
	'self-start',
	'text-xs',
	'text-slate-900/55',
	'mt-1.5'
]

const timestampClasses = [
	'tracking-[0.01em]'
]

const containerFullClasses = [
	...containerClasses,
	'dark:bg-gradient-to-b',
	'dark:from-gray-800',
	'dark:to-gray-700'
]


const transcriptVariants = {
	initial: { opacity: 0, y: 10 },
	animate: { opacity: 1, y: 0 }
}

const chatVariants = {
	initial: { opacity: 0, y: 20, scale: 0.9 },
	animate: { opacity: 1, y: 0, scale: 1 }
}

const videoTransition = {
	duration: 0.4,
	ease: [0.16, 1, 0.3, 1] as const
}

const shrinkTransition = {
	duration: 1,
	ease: "easeOut" as const
}

const transcriptTransition = {
	duration: 0.5,
	ease: "easeOut" as const
}

const chatTransition = {
	duration: 0.4,
	ease: "easeOut" as const
}

// Helper function to parse transcript and wrap highlighted sentences
function parseTranscriptWithHighlights(text: string, highlightedSentences: string[]): React.ReactNode {
	if (!text || !highlightedSentences.length) return text

	let result = text
	highlightedSentences.forEach((sentence) => {
		const regex = new RegExp(`(${sentence.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
		result = result.replace(regex, `<span class="${highlightClasses.join(' ')}">$1</span>`)
	})

	return <span dangerouslySetInnerHTML={{ __html: result }} />
}

export function FeelsLikeRealChatAnimation({
	thumbnailSrc = '/thumbnail.jpeg',
	videoTitle = 'How to Stay Consistent with Content',
	transcript = "Consistency isn't about motivation, it's about showing up even when it's boring. The key is building systems that work regardless of how you feel.",
	highlightedSentences = ["it's about showing up even when it's boring"],
	chatResponse = "You're absolutely right - it's about showing up even when it's boring. That's the foundation of real consistency."
}: FeelsLikeRealChatAnimationProps) {
	const [currentScene, setCurrentScene] = useState(1)
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.35, once: false })

	useEffect(() => {
		if (!isInView) {
			setCurrentScene(1)
			return
		}

		const timers = [
			setTimeout(() => setCurrentScene(2), 1000),
			setTimeout(() => setCurrentScene(3), 1800),
			setTimeout(() => setCurrentScene(4), 2800)
		]

		return () => {
			timers.forEach(clearTimeout)
		}
	}, [isInView])

	return (
		<div
			ref={ref}
			className={containerFullClasses.join(' ')}
		>
			{/* Video Thumbnail - Animates from Scene 1 to Scene 2 */}
			<motion.div
				initial="initial"
				animate={currentScene >= 2 ? "shrink" : "animate"}
				variants={{
					initial: { opacity: 0, scale: 0.95 },
					animate: { opacity: 1, scale: 1 },
					shrink: { y: -200, opacity: 0.95 }
				}}
				transition={currentScene >= 2 ? shrinkTransition : videoTransition}
				// className={currentScene >= 2 ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" : ""}
			>
				<div className={videoCardClasses.join(' ')}>
					<div className="relative">
						<Image
							src={thumbnailSrc}
							alt="Video thumbnail"
							width={448}
							height={224}
							className={videoThumbClasses.join(' ')}
						/>
						{/* YouTube play icon overlay */}
						<div className={playIconOverlayClasses.join(' ')}>
							<div className={playButtonClasses.join(' ')}>
								<svg className={playButtonSvgClasses.join(' ')} fill="currentColor" viewBox="0 0 24 24">
									<path d="M8 5v14l11-7z"/>
								</svg>
							</div>
						</div>
					</div>
					<h3 className={videoTitleClasses.join(' ')}>
						{videoTitle}
					</h3>
				</div>
			</motion.div>

			{/* Connection Line - Appears at Scene 2 as video shrinks */}
			<motion.div
				initial="initial"
				animate={currentScene >= 3 ? "animate" : "initial"}
				variants={{
					initial: { opacity: 0, y: 20 },
					animate: { opacity: .5, y: 0 }
				}}
				transition={shrinkTransition}
				className={connectionLineClasses.join(' ')}
			>
				{/* Connection line */}
				<div className={connectionLineBarClasses.join(' ')} />
				{/* Top dot */}
				<div className={[...connectionLineDotClasses, '-top-1.5'].join(' ')} />
				{/* Bottom dot */}
				<div className={[...connectionLineDotClasses, '-bottom-1.5'].join(' ')} />
			</motion.div>

			{/* Transcript - Appears at Scene 3 and stays visible */}
			<motion.div
				initial="initial"
				animate={currentScene >= 3 ? "animate" : "initial"}
				variants={transcriptVariants}
				transition={transcriptTransition}
				className={transcriptWrapperClasses.join(' ')}
			>
				<div className={transcriptCardClasses.join(' ')}>
					{/* Transcript Label */}
					<div className={transcriptLabelContainerClasses.join(' ')}>
						<div className={transcriptLabelDotClasses.join(' ')}></div>
						<span className={transcriptLabelTextClasses.join(' ')}>
							Transcript
						</span>
					</div>
					{/* Transcript Content */}
					<div className="relative">
						<span className={[...transcriptQuoteClasses, '-left-2', 'sm:-left-3'].join(' ')}>&ldquo;</span>
						<p className={transcriptTextWithQuoteClasses.join(' ')}>
							{parseTranscriptWithHighlights(transcript, highlightedSentences)}
						</p>
						<span className={[...transcriptQuoteClasses, '-right-2', 'sm:-right-3'].join(' ')}>&rdquo;</span>
					</div>
				</div>
			</motion.div>

			{/* Chat Bubble - Appears at Scene 4 */}
			<motion.div
				initial="initial"
				animate={currentScene >= 4 ? "animate" : "initial"}
				variants={chatVariants}
				transition={chatTransition}
				className={chatBubbleWrapperClasses.join(' ')}
			>
				<div className={messageBubbleClasses.join(' ')}>
					<p className={messageTextClasses.join(' ')}>
						{parseTranscriptWithHighlights(chatResponse, highlightedSentences)}
					</p>
					<div className={messageMetaClasses.join(' ')}>
						<span className={timestampClasses.join(' ')}>now</span>
					</div>
				</div>
			</motion.div>
		</div>
	)
}
