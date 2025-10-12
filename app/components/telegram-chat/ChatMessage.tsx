"use client"

import clsx from "clsx"

import type { ChatMessageData } from "./mockData"
import styles from "./styles.module.css"

export function ChatMessage({ text, from, timestamp }: ChatMessageData) {
	const isMe = from === "me"

	return (
		<div className={clsx(styles.messageRow, from === "me" ? styles.meRow : styles.themRow)}>
			<div className={clsx(styles.message, from === "me" ? styles.meBubble : styles.themBubble)}>
				<p>{text}</p>
				<div className={clsx(styles.messageMeta, from === "them" && styles.metaLeft)}>
					<span className={styles.timestamp}>{timestamp}</span>
				</div>
			</div>
		</div>
	)
}
