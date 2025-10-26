'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

interface TrainedOnYouAnimationProps {
	thumbnails?: { src: string; alt?: string }[]
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

const chipContainerClasses = [
	'relative',
	'aspect-square',
	'w-full',
	'max-w-[580px]',
	'mx-auto',
	'grid',
	'place-items-center'
]

const chipClasses = [
	'h-48',
	'w-48',
	'drop-shadow-[0_5px_35px_rgba(59,130,246,0.35)]'
]

const orbitLineClasses = [
	'absolute',
	'left-1/2',
	'top-1/2',
	'-translate-x-1/2',
	'-translate-y-1/2',
	'rounded-full',
	'border',
	'border-white/40',
	'dark:border-gray-600/40'
]

const thumbCardClasses = [
	'relative',
	'h-16',
	'w-[86px]',
	'md:h-20',
	'md:w-[108px]',
	'rounded-xl',
	'overflow-hidden',
	'shadow-[0_10px_30px_rgba(0,0,0,0.25)]',
	'dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)]',
	'ring-2',
	'ring-white/70',
	'dark:ring-gray-600/70',
	'backdrop-blur-sm',
	'bg-white',
	'dark:bg-gray-700'
]

const thumbImageClasses = [
	'h-full',
	'w-full',
	'object-cover'
]

const glowClasses = [
	'pointer-events-none',
	'absolute',
	'-inset-1',
	'rounded-[14px]'
]

export function TrainedOnYouAnimation({
	thumbnails = defaultThumbs,
	className = ""
}: TrainedOnYouAnimationProps) {
	const prefersReduced = useReducedMotion()
	const rings = 3
	const perRing = Math.max(1, Math.ceil(thumbnails.length / rings))
	const ringGroups = Array.from({ length: rings }, (_, r) =>
		thumbnails.slice(r * perRing, (r + 1) * perRing)
	)

	const baseDuration = 28

	return (
		<div
			className={`${containerClasses.join(' ')} dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-700${className ? ` ${className}` : ''}`}
			style={{
				height: '750px',
				width: '100%',
				minWidth: '100%'
			}}
		>
			<div className={chipContainerClasses.join(' ')}>
				<div className="absolute inset-0 rounded-full bg-white/40 dark:bg-gray-600/40 blur-3xl opacity-60" />

				{/* Center brain */}
				<div className="absolute inset-0 grid place-items-center">
					<motion.div
						initial={{ scale: 0.96, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ type: "spring", stiffness: 120, damping: 18 }}
						className="relative"
					>
						<ChipSVG className={chipClasses.join(' ')} />
					</motion.div>
				</div>

				{/* Orbiting rings with moving thumbnails */}
				{ringGroups.map((group, r) => {
					const radius = 120 + r * 70
					const duration = prefersReduced ? 0 : baseDuration - r * 6
					const direction = r % 2 === 0 ? 1 : -1

					return (
						<div key={r} className="absolute inset-0">
							{/* Orbit line */}
							<div
								className={orbitLineClasses.join(' ')}
								style={{
									width: radius * 2,
									height: radius * 2,
									boxShadow: "inset 0 0 60px rgba(99,102,241,0.15)"
								}}
							/>

							{/* Moving thumbnails */}
							{group.map((t, i) => {
								const startAngle = (i / group.length) * 360
								return (
									<motion.div
										key={i}
										className="absolute left-1/2 top-1/2"
										style={{
											transformOrigin: "center center",
											left: "50%",
											top: "50%"
										}}
										animate={{ rotate: [startAngle, startAngle + 360 * direction] }}
										transition={{ ease: "linear", duration, repeat: Infinity }}
									>
										<div
											className="absolute"
											style={{
												left: `${radius}px`,
												top: "0",
												transform: "translateX(-50%) translateY(-50%)"
											}}
										>
											<motion.div
												animate={{ rotate: [-(startAngle), -(startAngle + 360 * direction)] }}
												transition={{ ease: "linear", duration, repeat: Infinity }}
											>
												<ThumbCard src={t.src} alt={t.alt} ring={r} />
											</motion.div>
										</div>
									</motion.div>
								)
							})}
						</div>
					)
				})}
			</div>
		</div>
	)
}

function ThumbCard({ src, alt, ring }: { src?: string; alt?: string; ring: number }) {
	return (
		<div className={thumbCardClasses.join(' ')}>
			<Image
				src={src || "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"}
				alt={alt || "video thumbnail"}
				loading="lazy"
				width={108}
				height={80}
				className={thumbImageClasses.join(' ')}
			/>
			<div className={glowClasses.join(' ')} style={{ filter: "blur(10px)" }}>
				<div
					className={
						"h-full w-full rounded-[14px] " +
						(ring === 0
							? "bg-cyan-400/40"
							: ring === 1
							? "bg-indigo-400/40"
							: "bg-fuchsia-400/40")
					}
				/>
			</div>
		</div>
	)
}

function ChipSVG({ className = "" }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 500 500"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-label="AI processor chip"
		>
			<defs>
				<radialGradient id="cgrad" cx="50%" cy="50%" r="60%">
					<stop offset="0%" stopColor="#60A5FA" />
					<stop offset="60%" stopColor="#A78BFA" />
					<stop offset="100%" stopColor="#F0ABFC" />
				</radialGradient>
			</defs>
			<path
				d="M272.3,227.1h-44.9V272h44.9V227.1z M268.4,268.1h-37v-37h37V268.1z M365.6,275.8c-6.8,0-12.5,5.1-13.4,11.7h-17.3L320,272.6h-16v-21.3h30.4c0.9,5.3,5.5,9.3,11.1,9.3 c6.2,0,11.3-5.1,11.3-11.3s-5.1-11.3-11.3-11.3c-5.5,0-10.1,4-11.1,9.3H304v-21.5h16l14.9-14.9h17.3c1,6.6,6.6,11.7,13.4,11.7 c7.5,0,13.6-6.1,13.6-13.6c0-7.5-6.1-13.6-13.6-13.6c-6.8,0-12.5,5.1-13.4,11.7h-19l-14.9,14.9H304v-23.8l20.3-20.3 c1.5,0.7,3.1,1.1,4.8,1.1c6.2,0,11.3-5.1,11.3-11.3s-5.1-11.3-11.3-11.3s-11.3,5.1-11.3,11.3c0,3,1.2,5.8,3.2,7.8l-20,20h-24v-14.6 L292,166v-19c6.6-1,11.7-6.6,11.7-13.4c0-7.5-6.1-13.6-13.6-13.6c-7.5,0-13.6,6.1-13.6,13.6c0,6.8,5.1,12.5,11.7,13.4v17.3 l-14.9,14.9v16.2h-21.3v-30.6c5.3-0.9,9.3-5.5,9.3-11.1c0-6.2-5.1-11.3-11.3-11.3c-6.2,0-11.3,5.1-11.3,11.3c0,5.5,4,10.1,9.3,11.1 v30.6h-21.5v-16.2l-14.9-14.9V147c6.6-1,11.7-6.6,11.7-13.4c0-7.5-6.1-13.6-13.6-13.6c-7.5,0-13.6,6.1-13.6,13.6 c0,6.8,5.1,12.5,11.7,13.4v19l14.9,14.9v14.6h-24l-20-20c2-2,3.2-4.8,3.2-7.8c0-6.2-5.1-11.3-11.3-11.3s-11.3,5.1-11.3,11.3 s5.1,11.3,11.3,11.3c1.7,0,3.4-0.4,4.8-1.1l20.5,20.5V222h-14.4l-14.9-14.9h-19c-1-6.6-6.6-11.7-13.4-11.7 c-7.5,0-13.6,6.1-13.6,13.6c0,7.5,6.1,13.6,13.6,13.6c6.8,0,12.5-5.1,13.4-11.7h17.3l14.9,14.9h16.1v21.3h-30.4 c-0.9-5.3-5.5-9.3-11.1-9.3c-6.2,0-11.3,5.1-11.3,11.3s5.1,11.3,11.3,11.3c5.5,0,10.1-4,11.1-9.3h30.4v21.5h-16.1l-14.9,14.9h-17.3 c-1-6.6-6.6-11.7-13.4-11.7c-7.5,0-13.6,6.1-13.6,13.6c0,7.5,6.1,13.6,13.6,13.6c6.8,0,12.5-5.1,13.4-11.7h19l14.9-14.9h14.4v24.7 l-20.1,20.1c-1.5-0.7-3.1-1.1-4.8-1.1c-6.2,0-11.3,5.1-11.3,11.3s5.1,11.3,11.3,11.3c6.2,0,11.3-5.1,11.3-11.3c0-3-1.2-5.8-3.2-7.8 l20-20h24v14.6L208,333.1v19c-6.6,1-11.7,6.6-11.7,13.4c0,7.5,6.1,13.6,13.6,13.6c7.5,0,13.6-6.1,13.6-13.6 c0-6.8-5.1-12.5-11.7-13.4v-17.3l14.9-14.9v-16.2h21.3v30.6c-5.3,0.9-9.3,5.5-9.3,11.1c0,6.2,5.1,11.3,11.3,11.3 s11.3-5.1,11.3-11.3c0-5.5-4-10.1-9.3-11.1v-30.6h21.5v16.2l14.9,14.9v17.3c-6.6,1-11.7,6.6-11.7,13.4c0,7.5,6.1,13.6,13.6,13.6 c7.5,0,13.6-6.1,13.6-13.6c0-6.8-5.1-12.5-11.7-13.4v-19l-14.9-14.9v-14.6h24l20,20c-0.7,1.5-1.1,3.1-1.1,4.8 c0,6.2,5.1,11.3,11.3,11.3s11.3-5.1,11.3-11.3s-5.1-11.3-11.3-11.3c-3,0-5.8,1.2-7.8,3.2L304,300.7v-24.2h14.4l14.9,14.9h19 c1,6.6,6.6,11.7,13.4,11.7c7.5,0,13.6-6.1,13.6-13.6S373.1,275.8,365.6,275.8z M345.4,241.9c4.1,0,7.4,3.3,7.4,7.4 s-3.3,7.4-7.4,7.4c-4.1,0-7.4-3.3-7.4-7.4S341.3,241.9,345.4,241.9z M365.6,199.3c5.4,0,9.7,4.4,9.7,9.7c0,5.4-4.4,9.7-9.7,9.7 c-5.4,0-9.7-4.4-9.7-9.7C355.9,203.6,360.3,199.3,365.6,199.3z M280.3,133.6c0-5.4,4.4-9.7,9.7-9.7s9.7,4.4,9.7,9.7 c0,5.4-4.4,9.7-9.7,9.7S280.3,138.9,280.3,133.6z M242.5,153.8c0-4.1,3.3-7.4,7.4-7.4s7.4,3.3,7.4,7.4c0,4.1-3.3,7.4-7.4,7.4 S242.5,157.9,242.5,153.8z M199.9,133.6c0-5.4,4.4-9.7,9.7-9.7c5.4,0,9.7,4.4,9.7,9.7c0,5.4-4.4,9.7-9.7,9.7 C204.3,143.3,199.9,138.9,199.9,133.6z M134.1,218.8c-5.4,0-9.7-4.4-9.7-9.7c0-5.4,4.4-9.7,9.7-9.7c5.4,0,9.7,4.4,9.7,9.7 C143.8,214.4,139.4,218.8,134.1,218.8z M154.3,256.6c-4.1,0-7.4-3.3-7.4-7.4c0-4.1,3.3-7.4,7.4-7.4s7.4,3.3,7.4,7.4 C161.6,253.3,158.3,256.6,154.3,256.6z M134.1,299.2c-5.4,0-9.7-4.4-9.7-9.7c0-5.4,4.4-9.7,9.7-9.7c5.4,0,9.7,4.4,9.7,9.7 C143.8,294.8,139.4,299.2,134.1,299.2z M219.6,365.5c0,5.4-4.4,9.7-9.7,9.7c-5.4,0-9.7-4.4-9.7-9.7s4.4-9.7,9.7-9.7 C215.3,355.8,219.6,360.2,219.6,365.5z M257.4,345.3c0,4.1-3.3,7.4-7.4,7.4s-7.4-3.3-7.4-7.4c0-4.1,3.3-7.4,7.4-7.4 S257.4,341.3,257.4,345.3z M300,365.5c0,5.4-4.4,9.7-9.7,9.7c-5.4,0-9.7-4.4-9.7-9.7s4.4-9.7,9.7-9.7 C295.7,355.8,300,360.2,300,365.5z M329.2,160.3c4.1,0,7.4,3.3,7.4,7.4s-3.3,7.4-7.4,7.4c-4.1,0-7.4-3.3-7.4-7.4 S325.1,160.3,329.2,160.3z M163.1,167.6c0-4.1,3.3-7.4,7.4-7.4s7.4,3.3,7.4,7.4s-3.3,7.4-7.4,7.4S163.1,171.7,163.1,167.6z M170.8,338.8c-4.1,0-7.4-3.3-7.4-7.4s3.3-7.4,7.4-7.4s7.4,3.3,7.4,7.4S174.9,338.8,170.8,338.8z M300,299.7H199.7V199.4H300V299.7 z M331.6,321.2c4.1,0,7.4,3.3,7.4,7.4s-3.3,7.4-7.4,7.4s-7.4-3.3-7.4-7.4S327.5,321.2,331.6,321.2z M365.6,299.1 c-5.4,0-9.7-4.4-9.7-9.7c0-5.4,4.4-9.7,9.7-9.7c5.4,0,9.7,4.4,9.7,9.7C375.3,294.7,371,299.1,365.6,299.1z"
				fill="url(#cgrad)"
			/>
		</svg>
	)
}

const defaultThumbs = [
  { src: "/thumbnail_1.jpeg" },
  { src: "/thumbnail_2.jpeg" },
  { src: "/thumbnail_3.jpeg" },
  { src: "/thumbnail_4.jpeg" },
  { src: "/thumbnail_5.jpeg" },
  { src: "/thumbnail_6.jpeg" },
  { src: "/thumbnail_7.jpeg" },
];