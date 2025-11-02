'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

type UseInViewOptions = IntersectionObserverInit & {
	once?: boolean
}

export function useInView<T extends HTMLElement = HTMLElement>(options?: UseInViewOptions) {
	const {
		root = null,
		rootMargin = '0px',
		threshold = 0.35,
		once = true
	} = options ?? {}

	const [isInView, setIsInView] = useState(false)
	const elementRef = useRef<T | null>(null)

	useEffect(() => {
		const node = elementRef.current
		if (!node) return

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsInView(true)
				if (once) {
					observer.disconnect()
				}
			} else if (!once) {
				setIsInView(false)
			}
		}, {
			root,
			rootMargin,
			threshold
		})

		observer.observe(node)
		return () => observer.disconnect()
	}, [root, rootMargin, threshold, once])

	const setRef = useCallback((node: T | null) => {
		elementRef.current = node
	}, [])

	return { ref: setRef, isInView }
}

