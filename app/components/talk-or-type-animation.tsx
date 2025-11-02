'use client'

import { motion } from 'framer-motion'
import { useInView } from '../hooks/use-in-view'

interface TalkOrTypeAnimationProps {
	className?: string
}

// Voice wave animation variants - simplified
// const voiceWaveVariants: Variants = {
// 	idle: {
// 		scaleY: [1, 0.3, 1],
// 		opacity: [0.6, 1, 0.6],
// 		transition: {
// 			duration: 0.6,
// 			ease: "easeInOut" as const,
// 			repeat: Infinity,
// 			repeatDelay: 0.1
// 		}
// 	},
// 	active: {
// 		scaleY: [0, 0.8, 0.3, 1, 0.5, 0.9, 0.2, 0],
// 		transition: {
// 			duration: 1.5,
// 			ease: "easeInOut" as const,
// 			repeat: Infinity,
// 			delay: 0
// 		}
// 	}
// }

export function TalkOrTypeAnimation({
	className = ""
}: TalkOrTypeAnimationProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.35, once: false })
  const shouldAnimate = isInView

	// Generate multiple wave lines with varying heights and delays
	const waveConfigs = [
		{ height: 20, delay: 0 },
		{ height: 35, delay: 0.1 },
		{ height: 28, delay: 0.2 },
		{ height: 42, delay: 0.1 },
		{ height: 25, delay: 0.15 },
		{ height: 38, delay: 0.05 },
		{ height: 32, delay: 0.2 },
		{ height: 45, delay: 0.1 }
	]

	return (
		<div
			ref={ref}
			className={`relative flex flex-col items-center justify-center gap-8 w-full min-w-full overflow-hidden rounded-3xl border border-white/60 dark:border-gray-700/60 bg-white/60 dark:bg-gray-800/60 from-[#f5f5f5] dark:from-gray-800 to-[#e9ecef] dark:to-gray-700 bg-gradient-to-b p-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(0,0,0,0.3)] backdrop-blur-xl ${className}`}
			style={{
				minHeight: '600px'
			}}
		>
			{/* Voice and Text side by side */}
			<div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
				{/* Voice Option */}
				<motion.div
					className="relative bg-white/95 dark:bg-gray-700/95 backdrop-blur-sm rounded-3xl border border-gray-200/80 dark:border-gray-600/80 shadow-lg px-8 py-6 flex flex-row items-center justify-center gap-6 min-h-[120px] w-fit"
					aria-label="Voice message option"
					initial={{ opacity: 0, x: -30 }}
					animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
					transition={{ duration: 0.6, delay: shouldAnimate ? 0.2 : 0 }}
				>
					<div className="flex items-center">
						<svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
						</svg>
					</div>

					{/* Voice waves - audio wave animation */}
					<div className="flex items-end justify-center gap-1.5" style={{ height: '56px' }}>
						{waveConfigs.map((config, index) => (
							<motion.div
								key={index}
								className="w-2 bg-blue-500 rounded-full"
								animate={shouldAnimate ? {
									scaleY: [0, 0.8, 0.3, 1, 0.5, 0.9, 0.2, 0]
								} : { scaleY: 0 }}
								transition={shouldAnimate ? {
									duration: 1.5,
									ease: "easeInOut",
									repeat: Infinity,
									delay: config.delay
								} : { duration: 0 }}
								style={{
									height: `${config.height}px`,
									originY: 1
								}}
							/>
						))}
					</div>
				</motion.div>

				{/* Text Option */}
				<motion.div
					className="relative bg-white/95 dark:bg-gray-700/95 backdrop-blur-sm rounded-3xl border border-gray-200/80 dark:border-gray-600/80 shadow-lg px-8 py-6 flex flex-row items-center justify-center gap-6 min-h-[120px] w-fit"
					aria-label="Text message option"
					initial={{ opacity: 0, x: 30 }}
					animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
					transition={{ duration: 0.6, delay: shouldAnimate ? 0.4 : 0 }}
				>
					<div className="flex items-center">
						<svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L3 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
						</svg>
					</div>

					{/* Typing indicator - simplified */}
					<div className="flex items-center gap-2.5" style={{ height: '56px' }}>
						{[0, 1, 2].map((index) => (
							<motion.div
								key={index}
								className="w-3 h-3 rounded-full bg-green-400"
								initial={{ opacity: 0.3, scale: 0.8 }}
								animate={shouldAnimate ? {
									opacity: [0.3, 1, 0.3],
									scale: [0.8, 1, 0.8]
								} : { opacity: 0.3, scale: 0.8 }}
								transition={shouldAnimate ? {
									delay: 0.6 + index * 0.2,
									duration: 0.6,
									repeat: Infinity,
									ease: "easeInOut"
								} : { duration: 0 }}
							/>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	)
}
