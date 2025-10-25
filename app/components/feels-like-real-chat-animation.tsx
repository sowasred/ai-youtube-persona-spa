'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

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
	'items-center',
	'justify-center',
	'overflow-hidden',
	'rounded-3xl',
	'border',
	'border-white/60',
	'bg-white/60',
	'from-[#f5f5f5]',
	'to-[#e9ecef]',
	'bg-gradient-to-b',
	'p-6',
	'shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]',
	'backdrop-blur-xl'
]

const videoCardClasses = [
	'relative',
	'flex',
	'flex-col',
	'items-start',
	'rounded-2xl',
	'bg-white/90',
	'p-4',
	'shadow-[0_8px_32px_rgba(0,0,0,0.1)]',
	'backdrop-blur-sm',
	'border',
	'border-white/50',
	'w-full',
	'min-w-full'
]

const videoThumbClasses = [
	'w-full',
	'max-w-md',
	'h-56',
	'rounded-xl',
	'object-cover',
	'relative',
	'overflow-hidden'
]

const videoTitleClasses = [
	'text-lg',
	'font-medium',
	'text-gray-800',
	'mt-4',
	'text-left',
	'w-full'
]

const transcriptClasses = [
	'text-xl',
	'font-bold',
	'leading-relaxed',
	'text-gray-800',
	'w-full',
	'text-left'
]

const highlightClasses = [
	'bg-gradient-to-r',
	'from-yellow-200',
	'to-orange-200',
	'bg-[length:200%_100%]',
	'animate-highlight',
	'px-1',
	'rounded-sm'
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
	highlightedSentences.forEach((sentence, index) => {
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

	useEffect(() => {
		const timers = [
			setTimeout(() => setCurrentScene(2), 1000), // Scene 2 at 1s
			setTimeout(() => setCurrentScene(3), 1800), // Scene 3 at 1.8s
			setTimeout(() => setCurrentScene(4), 2800), // Scene 4 at 2.8s
		]

		return () => {
			timers.forEach(clearTimeout)
		}
	}, [])
	return (
		<div
			className={containerClasses.join(' ')}
			style={{
				background: 'linear-gradient(180deg, #f5f5f5 0%, #e9ecef 100%)',
				height: '750px',
				width: '100%',
				minWidth: '100%'
			}}
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
						<img
							src={thumbnailSrc}
							alt="Video thumbnail"
							className={videoThumbClasses.join(' ')}
						/>
						{/* YouTube play icon overlay */}
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
								<svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
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
				className="absolute left-1/2 transform -translate-x-1/2 z-10"
				style={{ top: '310px', width: '5px', height: '65px' }}
			>
				{/* Connection line */}
				<div className="w-full h-full bg-blue-500" />
				{/* Top dot */}
				<div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500" />
				{/* Bottom dot */}
				<div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500" />
			</motion.div>

			{/* Transcript - Appears at Scene 3 and stays visible */}
			<motion.div
				initial="initial"
				animate={currentScene >= 3 ? "animate" : "initial"}
				variants={transcriptVariants}
				transition={transcriptTransition}
				className="absolute bottom-50 left-1/2 transform -translate-x-1/2 w-4/5 max-w-2xl"
			>
				<div className="relative bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200/80 shadow-lg p-6">
					{/* Transcript Label */}
					<div className="flex items-center gap-2 mb-4">
						<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
						<span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
							Transcript
						</span>
					</div>
					{/* Transcript Content */}
					<div className="relative">
						<span className="absolute -left-3 text-gray-400 text-3xl font-serif leading-none">"</span>
						<p className={`${transcriptClasses.join(' ')} pl-4`}>
							{parseTranscriptWithHighlights(transcript, highlightedSentences)}
						</p>
						<span className="absolute -right-3 text-gray-400 text-3xl font-serif leading-none">"</span>
					</div>
				</div>
			</motion.div>

			{/* Chat Bubble - Appears at Scene 4 */}
			<motion.div
				initial="initial"
				animate={currentScene >= 4 ? "animate" : "initial"}
				variants={chatVariants}
				transition={chatTransition}
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-4/5 max-w-2xl"
			>
				<div className="message-bubble-me">
					<p className="message-text">
						{parseTranscriptWithHighlights(chatResponse, highlightedSentences)}
					</p>
					<div className="message-meta">
						<span className="timestamp">now</span>
					</div>
				</div>
			</motion.div>
		</div>
	)
}
