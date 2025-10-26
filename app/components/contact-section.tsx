'use client'

import { useState } from 'react'
import { Button } from './button'
import { Mail } from 'lucide-react'

export function ContactSection() {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleContactClick = () => {
    const emailSubject = encodeURIComponent(subject || 'Contacting for Content Creator AI Persona Service')
    const emailBody = encodeURIComponent(message || 'Hello, I would like to get in touch with you about your Content Creator AI Persona Service.')
    const mailtoLink = `mailto:replyfanapp@gmail.com?subject=${emailSubject}&body=${emailBody}`
    window.open(mailtoLink)
  }

  return (
    <section id="contact" className="max-w-[98rem] w-10/12 lg:w-11/12 my-36 mx-auto text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl md:leading-[4rem] xl:leading-[4rem] font-bold mb-6 text-gray-800 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions about our AI chatbot service? Want to discuss your project? 
            Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <label htmlFor="subject" className="block text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="What's this might be about?"
              className="w-full px-5 py-4 text-base md:text-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask questions or just say hello! We'll get back to you as soon as possible."
              className="w-full px-5 py-4 text-base md:text-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={4}
            />
          </div>

          <div className="text-center">
            <Button
              onClick={handleContactClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 xs:px-12 xs:py-4 sm:px-16 sm:py-8 md:px-20 text-base xs:text-lg sm:text-2xl rounded-lg font-semibold inline-flex items-center gap-2 xs:gap-3 transition-colors w-full xs:w-auto"
            >
              <Mail className="!w-5 !h-5 xs:!w-6 xs:!h-6 sm:!w-7 sm:!h-7" />
              Contact Us
            </Button>
          </div>

          <div className="mt-10 text-center">
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-200">
              Or reach us directly at{' '}
              <a 
                href="mailto:replyfanapp@gmail.com" 
                className="text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200 underline"
              >
                replyfanapp@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
