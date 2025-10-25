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
	'bg-white/60',
	'from-[#f5f5f5]',
	'to-[#e9ecef]',
	'bg-gradient-to-b',
	'p-6',
	'shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]',
	'backdrop-blur-xl'
]

export function PrivateByDesignAnimation({
	className = ""
}: PrivateByDesignAnimationProps) {

	return (
		<div
			className={containerClasses.join(' ') + (className ? ` ${className}` : '')}
			style={{
				background: 'linear-gradient(180deg, #f5f5f5 0%, #e9ecef 100%)',
				height: '750px',
				width: '100%',
				minWidth: '100%'
			}}
		>
		</div>
	)
}
