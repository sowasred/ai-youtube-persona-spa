"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import styles from "./styles.module.css"
import { ChatMessage } from "./ChatMessage"
import type { ChatMessageData } from "./mockData"
import { mockMessages } from "./mockData"
import { DeviceFrame } from "./DeviceFrame"
import { MicIcon, ChevronLeft } from "../icons"
import Image from "next/image"

const messageVariants = {
	initial: { opacity: 0, y: 32, scale: 0.98 },
	animate: { opacity: 1, y: 0, scale: 1 },
	exit: { opacity: 0, y: -12, scale: 0.96 },
}

export function TelegramChatMockup() {
	const [visibleMessages, setVisibleMessages] = useState<ChatMessageData[]>([])
	useEffect(() => {
		let index = 0
		const timeouts: Array<ReturnType<typeof setTimeout>> = []

		const resetSequence = () => {
			timeouts.push(
				setTimeout(() => {
					setVisibleMessages([])
					index = 0
					queueNext(800)
				}, 3200),
			)
		}

		const queueNext = (delay: number) => {
			const nextMessage = mockMessages[index]

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
					queueNext(1500)
				}, delay),
			)
		}

		queueNext(700)

		return () => {
			timeouts.forEach((timer) => clearTimeout(timer))
		}
	}, [])

	return (
		<div className={styles.frameWrapper}>
			<DeviceFrame className={styles.frameSvg}>
				<div className={styles.telegramScreen}>
					<div className={styles.screenHeader}>
						<div className={styles.statusRow}>
							<span>9:41</span>
							<div className={styles.statusIcons}>
								<span className={styles.signalBars} aria-hidden>
									<span className={styles.signalBar} />
									<span className={styles.signalBar} />
									<span className={styles.signalBar} />
									<span className={styles.signalBar} />
								</span>
								<span className={styles.batteryIcon} aria-hidden>
									<span className={styles.batteryBody} />
									<span className={styles.batteryCap} />
								</span>
							</div>
						</div>
					<header className={styles.conversationRow}>
						<span className={styles.backButton}>
							<ChevronLeft className={styles.backIcon} aria-hidden />
							Back
						</span>
						<div className={styles.headerMeta}>
							<span className={styles.contactName}>Andrew Huberman</span>
							<span className={styles.contactStatus}>online</span>
						</div>
						<div className={styles.headerAvatar} aria-hidden>
							<Image src="/andrew_huberman_pic.jpg" alt="Andrew Huberman" width={32} height={32} className={styles.headerAvatarImage} />
						</div>
					</header>
					</div>

					<div className={styles.chatSurface}>
						<div className={styles.chatOverlayPattern} />

						<div className={styles.chatContent}>
							<div className={styles.chatScroll}>
								<span className={styles.dateChip}>Today</span>

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

						<div className={styles.inputBar}>
							<span className={styles.inputPlaceholder}>Message</span>
							<MicIcon className={styles.micIcon} aria-hidden />
						</div>
						</div>
					</div>
				</div>
			</DeviceFrame>
		</div>
	)
}
