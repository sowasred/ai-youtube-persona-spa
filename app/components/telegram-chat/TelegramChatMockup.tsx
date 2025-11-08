"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useInView } from "../../hooks/use-in-view"
import styles from "./styles.module.css"
import { ChatMessage } from "./ChatMessage"
import type { ChatMessageData } from "./mockData"
import { creatorMessages } from "./mockData"
import { MicIcon, ChevronLeft } from "../icons"
import Image from "next/image"
import { useCreator } from "../creator-interaction"
import type { Creator } from "../../data/creators"

const messageVariants = {
	initial: { opacity: 0, y: 32, scale: 0.98 },
	animate: { opacity: 1, y: 0, scale: 1 },
	exit: { opacity: 0, y: -12, scale: 0.96 },
}

const INITIAL_MESSAGE_DELAY = 700
const BETWEEN_MESSAGES_DELAY = 1500
const LOOP_RESTART_DELAY = 10000
const LOOP_RESET_CLEAR_DELAY = Math.max(
	LOOP_RESTART_DELAY - INITIAL_MESSAGE_DELAY,
	0,
)

interface TelegramChatMockupProps {
  people: Creator[];
}

export function TelegramChatMockup({ people }: TelegramChatMockupProps) {
  const { selectedCreatorId } = useCreator();
	const [visibleMessages, setVisibleMessages] = useState<ChatMessageData[]>([])
	const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.35, once: false })
	const [currentTime, setCurrentTime] = useState("9:41")
	
	// Get the selected creator's data
	const selectedCreator = people.find(person => person.id === selectedCreatorId) || people[0]
	const selectedCreatorMessages = creatorMessages[selectedCreatorId] || creatorMessages[1]

	// Update time periodically
	useEffect(() => {
		const updateTime = () => {
			const now = new Date()
			const hours = now.getHours()
			const minutes = now.getMinutes().toString().padStart(2, '0')
			setCurrentTime(`${hours}:${minutes}`)
		}
		updateTime()
		const interval = setInterval(updateTime, 60000) // Update every minute
		return () => clearInterval(interval)
	}, [])
	
	useEffect(() => {
		if (!isInView) {
			setVisibleMessages([])
			return
		}

		let index = 0
		const timeouts: Array<ReturnType<typeof setTimeout>> = []

		const resetSequence = () => {
			timeouts.push(
				setTimeout(() => {
					setVisibleMessages([])
					index = 0
					queueNext(INITIAL_MESSAGE_DELAY)
				}, LOOP_RESET_CLEAR_DELAY),
			)
		}

		const queueNext = (delay: number) => {
			const nextMessage = selectedCreatorMessages[index]

			if (!nextMessage) {
				resetSequence()
				return
			}

			timeouts.push(
				setTimeout(() => {
					setVisibleMessages((prev) => {
						if (prev.some((msg) => msg.id === nextMessage.id)) {
							return prev
						}

						return [...prev, nextMessage]
					})
					index += 1
					queueNext(BETWEEN_MESSAGES_DELAY)
				}, delay),
			)
		}

		// Reset when creator changes
		setVisibleMessages([])
		index = 0
		queueNext(INITIAL_MESSAGE_DELAY)

		return () => {
			timeouts.forEach((timer) => clearTimeout(timer))
		}
	}, [isInView, selectedCreatorId, selectedCreatorMessages])

	return (
		<div className={styles.telegramScreen}>
			<div ref={ref} className={styles.frameWrapper}>
				<div className={styles.statusBar}>
					<div className={styles.statusRow}>
						<span className={styles.time}>{currentTime}</span>
						<div className={styles.statusIcons}>
							<div className={styles.signalBars} aria-label="Signal strength">
								<span className={styles.signalBar} />
								<span className={styles.signalBar} />
								<span className={styles.signalBar} />
								<span className={styles.signalBar} />
							</div>
							<div className={styles.batteryIcon} aria-label="Battery">
								<div className={styles.batteryBody} />
								<div className={styles.batteryCap} />
							</div>
						</div>
					</div>
				</div>

				<header className={styles.conversationRow}>
					<span className={styles.backButton}>
						<ChevronLeft className={styles.backIcon} aria-hidden />
						Back
					</span>
					<div className={styles.headerMeta}>
						<span className={styles.contactName}>{selectedCreator.name}</span>
						<span className={styles.contactStatus}>online</span>
					</div>
					<div className={styles.headerActions}>
					</div>
					<div className={styles.headerAvatar} aria-hidden>
						<Image src={selectedCreator.image} alt={selectedCreator.name} width={32} height={32} className={styles.headerAvatarImage} />
					</div>
				</header>

				<div className={styles.chatSurface}>
					<div className={styles.chatOverlayPattern} aria-hidden />
					<div className={styles.chatContent}>
						<div className={styles.chatScroll}>
							<AnimatePresence>
								{visibleMessages.map((msg) => (
									<motion.div
										key={msg.id}
										variants={messageVariants}
										initial="initial"
										animate="animate"
										exit="exit"
										transition={{ type: "spring", stiffness: 320, damping: 24 }}
									>
										<ChatMessage {...msg} />
									</motion.div>
								))}
							</AnimatePresence>
						</div>
					</div>
				</div>

				<div className={styles.inputBar}>
					<span className={styles.inputPlaceholder}>Type a message...</span>
					<MicIcon className={styles.micIcon} aria-label="Record voice message" />
				</div>
			</div>
		</div>
	)
}
