"use client"

import clsx from "clsx"

import type { ChatMessageData } from "./mockData"
import styles from "./styles.module.css"

export function ChatMessage({ text, from, timestamp, type }: ChatMessageData) {

	return (
		<div className={clsx(styles.messageRow, from === "me" ? styles.meRow : styles.themRow)}>
			<div
				className={clsx(
					styles.message,
					from === "me" ? styles.meBubble : styles.themBubble,
					type === "voice" && styles.voiceBubble,
				)}
			>
				{type === "voice" ? (
					<div className={styles.voiceContent}>
						<button type="button" className={styles.voicePlayButton} aria-label="Play voice message" />
						<div className={styles.voiceWaveform} aria-hidden>
							<span className={styles.voiceWaveDash} />
							<span className={styles.voiceWaveBars} />
							<span className={styles.voiceWaveDash} />
						</div>
				<div className={styles.voiceMeta}>
					<span className={styles.voiceDuration}>{from === "them" ? "00:09" : "00:12"}</span>
				</div>
					</div>
				) : (
					<p>{text}</p>
				)}
				<div className={clsx(styles.messageMeta, from === "them" && styles.metaLeft)}>
					<span className={styles.timestamp}>{timestamp}</span>
				</div>
			</div>
		</div>
	)
}
