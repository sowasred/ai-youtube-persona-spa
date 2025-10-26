'use client'

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

export function PrivateByDesignAnimation({
	className = ""
}: PrivateByDesignAnimationProps) {

	return (
		<div
			className={`${containerClasses.join(' ')} dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-700${className ? ` ${className}` : ''}`}
			style={{
				height: '750px',
				width: '100%',
				minWidth: '100%'
			}}
		>
		</div>
	)
}
