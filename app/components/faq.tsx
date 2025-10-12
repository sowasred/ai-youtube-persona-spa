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
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-12">
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
                    className="overflow-hidden pb-5"
                  >
                    <div className="pr-3 text-xl leading-relaxed text-neutral-600 sm:text-2xl">
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
