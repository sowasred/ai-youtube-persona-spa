'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface PrivateByDesignAnimationProps {
	className?: string
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

// Thumbnail data - using existing thumbnails, some repeated to make 9 total
const thumbnails = [
	{ src: '/thumbnail_1.jpeg', alt: 'Video thumbnail 1' },
	{ src: '/thumbnail_2.jpeg', alt: 'Video thumbnail 2' },
	{ src: '/thumbnail_3.jpeg', alt: 'Video thumbnail 3' },
	{ src: '/thumbnail_4.jpeg', alt: 'Video thumbnail 4' },
	{ src: '/thumbnail_5.jpeg', alt: 'Video thumbnail 5' },
	{ src: '/thumbnail_6.jpeg', alt: 'Video thumbnail 6' },
	{ src: '/thumbnail_7.jpeg', alt: 'Video thumbnail 7' },
	{ src: '/thumbnail_1.jpeg', alt: 'Video thumbnail 8' },
	{ src: '/thumbnail_2.jpeg', alt: 'Video thumbnail 9' }
]

// Animation variants
const thumbnailVariants = {
	initial: {
		opacity: 0.3,
		scale: 0.95,
		filter: 'blur(8px)',
		y: 0
	},
	visible: {
		opacity: 0.6,
		scale: 1,
		filter: 'blur(8px)',
		y: [0, -3, 3, 0],
		transition: {
			duration: 3,
			repeat: Infinity,
			ease: [0.4, 0, 0.2, 1] as const
		}
	},
	locked: {
		opacity: 0.25,
		scale: 1,
		filter: 'blur(12px)',
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0, 0, 0.2, 1] as const
		}
	}
}

const lockVariants = {
	hidden: {
		opacity: 0,
		scale: 0.8,
		pathLength: 0
	},
	drawing: {
		opacity: 1,
		scale: 1,
		pathLength: 1,
		transition: {
			duration: 1.2,
			ease: [0.4, 0, 0.2, 1] as const
		}
	},
	closed: {
		opacity: 1,
		scale: [1, 1.05, 1],
		pathLength: 1,
		transition: {
			scale: {
				duration: 0.3,
				times: [0, 0.5, 1]
			}
		}
	},
	breathing: {
		scale: [1, 1.02, 1],
		transition: {
			duration: 2,
			repeat: Infinity,
			ease: [0.4, 0, 0.2, 1] as const
		}
	}
}

const vignetteVariants = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: [0, 0, 0.2, 1] as const
		}
	}
}

export function PrivateByDesignAnimation({
	className = ""
}: PrivateByDesignAnimationProps) {
	const [animationPhase, setAnimationPhase] = useState<'thumbnails-fade-in' | 'lock-appearing' | 'locked'>('thumbnails-fade-in')
	const shouldReduceMotion = useReducedMotion()

	useEffect(() => {
		const timer1 = setTimeout(() => {
			setAnimationPhase('lock-appearing')
		}, 1500)

		const timer2 = setTimeout(() => {
			setAnimationPhase('locked')
		}, 3500)

		return () => {
			clearTimeout(timer1)
			clearTimeout(timer2)
		}
	}, [])

	const getThumbnailVariant = () => {
		if (shouldReduceMotion) return 'visible'
		switch (animationPhase) {
			case 'thumbnails-fade-in':
				return 'visible'
			case 'lock-appearing':
				return 'visible'
			case 'locked':
				return 'locked'
			default:
				return 'initial'
		}
	}

	const getLockVariant = () => {
		if (shouldReduceMotion) return 'closed'
		switch (animationPhase) {
			case 'thumbnails-fade-in':
				return 'hidden'
			case 'lock-appearing':
				return 'drawing'
			case 'locked':
				return 'breathing'
			default:
				return 'hidden'
		}
	}

	const getVignetteVariant = () => {
		if (shouldReduceMotion) return 'hidden'
		return animationPhase === 'locked' ? 'visible' : 'hidden'
	}

	return (
		<div
			className={`${containerClasses.join(' ')} dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-700${className ? ` ${className}` : ''}`}
			style={{
				height: '750px',
				width: '100%',
				minWidth: '100%'
			}}
		>
			{/* Thumbnail Grid */}
			<div className="grid grid-cols-3 gap-4 w-full max-w-[600px] mx-auto">
				{thumbnails.map((thumbnail, index) => (
					<motion.div
						key={index}
						variants={thumbnailVariants}
						initial="initial"
						animate={getThumbnailVariant()}
						transition={{
							delay: shouldReduceMotion ? 0 : index * 0.1,
							duration: shouldReduceMotion ? 0.3 : 0.8
						}}
						className="relative aspect-square w-[180px] h-[180px] rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
					>
						<Image
							src={thumbnail.src}
							alt={thumbnail.alt}
							fill
							className="object-cover"
							sizes="180px"
						/>
					</motion.div>
				))}
			</div>

			{/* Lock Icon */}
			<motion.div
				className="absolute inset-0 flex items-center justify-center z-10"
				variants={lockVariants}
				initial="hidden"
				animate={getLockVariant()}
			>
				<svg
					width="240"
					height="260"
					viewBox="0 0 120 140"
					className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
					aria-label="Content encrypted and secured"
				>
					{/* Lock Shackle - U-shaped top part */}
					<motion.path
						d="M30 50 C30 30 45 15 60 15 C75 15 90 30 90 50"
						stroke="#1e40af"
						strokeWidth="8"
						strokeLinecap="round"
						strokeLinejoin="round"
						fill="none"
						strokeDasharray="1000"
						strokeDashoffset="1000"
						animate={{
							strokeDashoffset: animationPhase === 'lock-appearing' ? 0 : 1000,
							fill: animationPhase === 'locked' ? 'rgba(30, 64, 175, 0.6)' : 'none'
						}}
						transition={{
							strokeDashoffset: { duration: 1.2, ease: [0.4, 0, 0.2, 1] as const },
							fill: { duration: 0.3, delay: 1.2, ease: [0.4, 0, 0.2, 1] as const }
						}}
					/>
					{/* Lock Body - rectangular bottom part */}
					<motion.path
						d="M25 50 L25 100 C25 110 35 120 60 120 C85 120 95 110 95 100 L95 50"
						stroke="#1e40af"
						strokeWidth="8"
						strokeLinecap="round"
						strokeLinejoin="round"
						fill="none"
						strokeDasharray="1000"
						strokeDashoffset="1000"
						animate={{
							strokeDashoffset: animationPhase === 'lock-appearing' ? 0 : 1000,
							fill: animationPhase === 'locked' ? 'rgba(30, 64, 175, 0.8)' : 'none'

						}}
						transition={{
							strokeDashoffset: { duration: 1.2, ease: [0.4, 0, 0.2, 1] as const },
							fill: { duration: 0.3, delay: 1.2 }
						}}
					/>
					{/* Keyhole in the center of lock body */}
					<motion.circle
						cx="60"
						cy="80"
						r="8"
						fill="none"
						stroke="#1e40af"
						strokeWidth="4"
						strokeDasharray="1000"
						strokeDashoffset="1000"
						animate={{
							strokeDashoffset: animationPhase === 'lock-appearing' ? 0 : 1000,
							fill: animationPhase === 'locked' ? 'rgb(195, 209, 255)' : 'none'
						}}
						transition={{
							strokeDashoffset: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const, delay: 0.4 },
							fill: { duration: 0.3, delay: 1.2 }
						}}
					/>
					{/* Keyhole slot */}
					<motion.rect
						x="56"
						y="86"
						width="8"
						height="12"
						rx="2"
						fill="none"
						stroke="#1e40af"
						strokeWidth="4"
						strokeDasharray="1000"
						strokeDashoffset="1000"
						animate={{
							strokeDashoffset: animationPhase === 'lock-appearing' ? 0 : 1000,
							fill: animationPhase === 'locked' ? 'rgb(195, 209, 255)' : 'none'
						}}
						transition={{
							strokeDashoffset: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const, delay: 0.6 },
							fill: { duration: 0.3, delay: 1.2 }
						}}
					/>
				</svg>

				{/* Click Effect Glow */}
				{animationPhase === 'lock-appearing' && (
					<motion.div
						className="absolute inset-0 flex items-center justify-center"
						initial={{ scale: 0, opacity: 0 }}
						animate={{
							scale: [0, 1, 0],
							opacity: [0, 0.6, 0]
						}}
						transition={{
							delay: 2.7,
							duration: 0.3,
							times: [0, 0.5, 1]
						}}
					>
						<div className="w-[240px] h-[240px] rounded-full bg-white/60 blur-sm" />
					</motion.div>
				)}

				{/* Shimmer Effect */}
				{animationPhase === 'locked' && (
					<motion.div
						className="absolute inset-0 flex items-center justify-center overflow-hidden"
						initial={{ x: '-100%' }}
						animate={{ x: '100%' }}
						transition={{
							delay: 0.5,
							duration: 2,
							ease: [0.4, 0, 0.2, 1] as const
						}}
					>
						<div
							className="w-[240px] h-[260px]"
							style={{
								background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
							}}
						/>
					</motion.div>
				)}
			</motion.div>

			{/* Vignette Effect */}
			<motion.div
				className="absolute inset-0 pointer-events-none"
				variants={vignetteVariants}
				initial="hidden"
				animate={getVignetteVariant()}
				style={{
					background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.4) 100%)'
				}}
			/>
		</div>
	)
}
