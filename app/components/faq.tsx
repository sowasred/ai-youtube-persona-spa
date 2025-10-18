'use client'

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

import { cn } from "./lib/utils/cn"

type FaqItem = {
  question: string
  answer: string
}

const defaultFaqs: FaqItem[] = [
  {
    question: "How quickly can I launch my AI persona?",
    answer:
      "Most creators can go live within a week. We handle production, training, and platform setup as soon as you share onboarding materials.",
  },
  {
    question: "What content do you need from me?",
    answer:
      "Existing podcasts, long-form videos, newsletters, or coaching calls work best. We use that library to learn your tone and talking points—no extra recording required.",
  },
  {
    question: "Where will fans interact with the persona?",
    answer:
      "Today we support WhatsApp and Telegram with native feeling chats. We’re adding web embeds and additional messaging apps based on creator demand.",
  },
  {
    question: "Will answers stay accurate to my brand?",
    answer:
      "Yes. Conversations stay within the guardrails you approve. You can review transcripts, flag responses, and fine tune the messaging tone however you like.",
  },
  {
    question: "How is my data secured?",
    answer:
      "Your raw content remains private, is encrypted at rest and in transit, and is only used to power your persona. You retain ownership and can request deletion any time.",
  },
  {
    question: "What happens if fans ask something off-topic?",
    answer:
      "The persona gently redirects or declines to comment, staying true to your brand and personality boundaries.",
  },
  {
    question: "Can I monetize my AI persona?",
    answer:
      "Yes! You’re in full control of how you monetize. Each chatbot includes built-in subscribe and cancel-subscription flows, so fans can easily manage payments directly through WhatsApp or Telegram. You can set your own pricing, offer premium access through Reply Fan’s platform.",
  },
]

export function FAQ({
  items = defaultFaqs,
  title = "Frequently asked questions",
  description = "Straightforward answers so you know exactly what to expect.",
}: {
  items?: FaqItem[]
  title?: string
  description?: string
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="max-w-[98rem] w-10/12 lg:w-11/12 mx-auto flex flex-col gap-12">
      <header className="space-y-4">
        <h2 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
          {title}
        </h2>
        <p className="text-lg text-neutral-600 sm:max-w-2xl">{description}</p>
      </header>
      <div className="flex flex-col gap-4 sm:gap-6">
        {items.map((faq, index) => {
          const isOpen = openIndex === index

          return (
            <article
              key={faq.question}
              className="transition-colors duration-200"
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className={cn(
                  "flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7",
                  isOpen
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-900",
                )}
              >
                <span className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                  {faq.question}
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center text-slate-400 transition-transform duration-200">
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.26, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <ChevronDown
                      className={cn(
                        "h-6 w-6 transition-colors duration-200",
                        isOpen ? "text-slate-900" : "text-slate-400",
                      )}
                      aria-hidden
                    />
                  </motion.div>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.33, 1, 0.68, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 pr-3 text-xl leading-relaxed text-neutral-600 sm:text-2xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          )
        })}
      </div>
    </section>
  )
}
