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
    question: "How quickly can I have my AI persona live?",
    answer:
      "We set everything up for you. Most creators launch within a few days once onboarding is complete and we have your source material.",
  },
  {
    question: "Do I need to record new content?",
    answer:
      "No extra recording is required. We ingest your existing calls, interviews, long-form videos, and written material to capture your voice.",
  },
  {
    question: "Where can fans talk to the persona?",
    answer:
      "Fans can reach you directly through WhatsApp and Telegram today. We are rolling out additional channels based on demand.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Your data stays private, is encrypted in transit and at rest, and we only use it to serve your conversations.",
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
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-10">
      <header className="space-y-3">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          {title}
        </h2>
        <p className="text-base text-neutral-500 sm:max-w-xl">{description}</p>
      </header>
      <div className="divide-y divide-slate-200 border-y border-slate-200">
        {items.map((faq, index) => {
          const isOpen = openIndex === index

          return (
            <article
              key={faq.question}
              className="transition-colors duration-200 hover:bg-slate-50/70"
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 py-5 text-left",
                  isOpen ? "text-slate-900" : "hover:text-slate-900",
                )}
              >
                <span className="text-xl font-medium text-slate-900 sm:text-2xl">
                  {faq.question}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-colors duration-200">
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.26, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-colors duration-200",
                        isOpen ? "text-blue-500" : "text-slate-500",
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
                    className="overflow-hidden pb-5"
                  >
                    <div className="pr-8 text-lg leading-relaxed text-neutral-500 sm:text-xl">
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
