import type { Metadata } from "next";
import { LegalLayout } from "../components/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service - ReplyFan",
  description: "Terms of Service for ReplyFan - AI-powered WhatsApp and Telegram chatbot service for content creators.",
};

const tableOfContents = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
  },
  {
    id: "service-description",
    title: "Service Description",
  },
  {
    id: "eligibility",
    title: "Eligibility",
  },
  {
    id: "user-accounts",
    title: "Creator Accounts and Access",
  },
  {
    id: "subscription-payment",
    title: "Subscription and Payment",
    subsections: [
      { id: "payment-processing", title: "Payment Processing" },
      { id: "cancellation", title: "Subscription Management" },
    ],
  },
  {
    id: "creator-dashboard",
    title: "Creator Dashboard and Insights",
  },
  {
    id: "user-responsibilities",
    title: "Creator Responsibilities",
  },
  {
    id: "ai-persona-content",
    title: "AI Persona and Content",
  },
  {
    id: "prohibited-content",
    title: "Prohibited Content and Activities",
  },
  {
    id: "liability-disclaimers",
    title: "Liability and Disclaimers",
  },
  {
    id: "termination",
    title: "Termination",
  },
  {
    id: "governing-law",
    title: "Governing Law",
  },
  {
    id: "changes",
    title: "Changes to Terms",
  },
  {
    id: "contact",
    title: "Contact Information",
  },
];

export default function TermsOfService() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="October 18, 2025"
      tableOfContents={tableOfContents}
    >
      <div className="space-y-8">
        <section id="acceptance">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Acceptance of Terms
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            These Terms of Service ("Terms") govern your use of ReplyFan, an AI-powered 
            chatbot service operated by Punica ("we," "our," or "us"). By accessing or 
            using our service, you agree to be bound by these Terms.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            If you do not agree to these Terms, please do not use our service. We reserve 
            the right to modify these Terms at any time, and your continued use of the 
            service constitutes acceptance of any changes.
          </p>
        </section>

        <section id="service-description">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Service Description
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            ReplyFan is an AI-powered chatbot service that allows content creators to:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Create personalized AI personas based on their existing content (podcasts, videos, newsletters, coaching calls, etc.)</li>
            <li>Deploy AI chatbots on WhatsApp and Telegram platforms with your own voice message support</li>
            <li>Engage with their audience 24/7 through automated conversations (text and voice)</li>
            <li>Receive AI-powered content advice based on audience interactions</li>
            <li>Access analytics and insights about audience interactions</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            The service uses advanced AI technology, including OpenAI's language models, 
            to generate responses that reflect the creator's style, knowledge, and personality.
          </p>
        </section>

        <section id="eligibility">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Eligibility
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            To use ReplyFan, you must:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Be at least 18 years of age (or have parental/guardian consent if under 18)</li>
            <li>Have the legal capacity to enter into binding agreements</li>
            <li>Provide accurate and complete registration information</li>
            <li>Be a content creator with existing content (podcasts, videos, newsletters, coaching calls) for AI persona creation</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            We reserve the right to refuse service to anyone at any time.
          </p>
        </section>

        <section id="user-accounts">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Creator Accounts and Access
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            To use ReplyFan as a content creator, you must create an account and provide access to the content that will be used to train your AI persona. This may include podcasts, videos, newsletters, or other media that you own or have permission to use.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            After your persona is trained, ReplyFan will provide you with dedicated WhatsApp and Telegram chatbot accounts, which you can share publicly with your audience. These chatbots allow fans to interact with your AI persona directly.
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Maintain the accuracy and ownership of the content you provide.</li>
            <li>Ensure your chatbot’s tone and responses align with your intended audience.</li>
          </ul>
      </section>

      <section id="subscription-payment">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Subscriptions and Revenue Sharing
        </h2>

        <div className="mb-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Fans can chat with your AI persona for free with limited daily messages. To continue unlimited access or unlock premium features, fans can subscribe directly through WhatsApp or Telegram using ReplyFan’s seamless in-app payment system.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            As a content creator, you will receive a share of the subscription revenue from premium users interacting with your AI persona. The specific revenue split will be agreed upon between you and ReplyFan prior to your chatbot’s launch.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            ReplyFan covers all development, hosting, and maintenance costs. You will not be charged to create or maintain your AI chatbot unless otherwise agreed in writing.
          </p>
        </div>

        <div id="payment-processing" className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Payment Processing
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            All payments and subscription renewals are processed securely through Stripe. ReplyFan does not store any sensitive payment information. By subscribing or receiving revenue shares, you agree to comply with Stripe's terms of service and privacy policy.
          </p>
        </div>

        <div id="cancellation" className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Subscription Management
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Fans can start, pause, or cancel their subscriptions directly through WhatsApp or Telegram at any time. Cancellation takes effect at the end of the current billing period.
          </p>
        </div>
      </section>

      <section id="creator-dashboard">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Creator Dashboard and Insights
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          ReplyFan provides each creator with access to a dashboard containing anonymized performance metrics, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Total fan messages and engagement levels</li>
          <li>Number of free and subscribed users</li>
          <li>Conversation trends and engagement insights</li>
          <li>AI-powered content advice based on audience conversations</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          These analytics are intended to help creators understand fan engagement and develop new content ideas. No private user data or individual conversations are shared.
        </p>
      </section>

        <section id="user-responsibilities">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Creator Responsibilities
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            As a creator using ReplyFan, you agree to:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Provide accurate and lawful content for AI persona training.</li>
            <li>Respect the intellectual property rights of others and use only content you own or have rights to.</li>
            <li>Understand that conversations are processed by OpenAI’s API for generating responses, and consent to their data usage practices as part of using our service.</li>
          </ul>
        </section>

        <section id="ai-persona-content">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            AI Persona and Content
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Content Ownership
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You retain full ownership of all content you provide, including any recordings, videos, transcripts, or written materials used to create your AI persona. ReplyFan does not claim ownership of your original work.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Permission to Use Content
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By using our service, you grant ReplyFan permission to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mt-2">
                <li>Access and process your approved content to train and maintain your AI persona.</li>
                <li>Store and reference this content for improving conversation accuracy and continuity.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Content Usage Restrictions
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                ReplyFan will not use your content for any other purpose without your written consent. This includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mt-2">
                <li>Training AI personas for other creators.</li>
                <li>Using your content for marketing materials or demonstrations.</li>
                <li>Sharing your content with third parties.</li>
                <li>Commercial use beyond maintaining your chatbot.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="prohibited-content">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Prohibited Content and Activities
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            You may not use ReplyFan to create, distribute, or promote content that:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Violates any applicable law or regulation.</li>
            <li>Violates the terms of service of WhatsApp or Telegram.</li>
            <li>Contains hate speech, harassment, discrimination, or personal attacks.</li>
            <li>Promotes violence, terrorism, or illegal activities.</li>
            <li>Infringes on intellectual property or privacy rights.</li>
            <li>Contains sexually explicit or otherwise inappropriate material.</li>
            <li>Spreads false, misleading, or harmful information.</li>
            <li>Attempts to impersonate others or misrepresent identity.</li>
            <li>Attempts to hack, disrupt, or damage our systems.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            We reserve the right to suspend or terminate any account that violates these restrictions.
          </p>
        </section>

        <section id="liability-disclaimers">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Liability and Disclaimers
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                AI-Generated Content
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                While we make every effort to ensure AI responses are accurate and appropriate, ReplyFan does not warrant their completeness or reliability. We recommend that creators periodically review their AI persona’s interactions to maintain consistency with their brand voice.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Third-Party Liability
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We are not responsible for the actions or content of third-party services, 
                including OpenAI, Stripe, WhatsApp, or Telegram. Any issues with these 
                services are subject to their respective terms of service.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Incident Response
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                In the event of harmful or incorrect AI-generated advice, we will:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mt-2">
                <li>Investigate the incident promptly upon notification</li>
                <li>Take appropriate corrective measures</li>
                <li>Implement safeguards to prevent similar incidents</li>
                <li>Work with OpenAI to address any model-related issues</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Service Availability
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We strive to maintain high service availability but cannot guarantee 
                uninterrupted access. We are not liable for any downtime, data loss, 
                or service interruptions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You agree to indemnify and hold ReplyFan harmless from any claims, damages, or losses arising from your use of the service or the actions of your AI persona.
              </p>
            </div>
          </div>
        </section>

        <section id="termination">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Termination
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We may terminate or suspend your account immediately, without prior notice, 
            for any of the following reasons:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Violation of these Terms of Service</li>
            <li>Engaging in prohibited activities</li>
            <li>Fraudulent or illegal use of the service</li>
            <li>At our sole discretion for any reason</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Upon termination, your access to the service will cease immediately, and 
            all your data will be deleted within 30 days, except where retention is 
            required by law.
          </p>
        </section>

        <section id="governing-law">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Governing Law
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            These Terms of Service are governed by and construed in accordance with 
            the laws of Ontario, Canada. Any disputes arising from these Terms or 
            your use of ReplyFan will be subject to the exclusive jurisdiction of 
            the courts of Ontario, Canada.
          </p>
        </section>

        <section id="changes">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Changes to Terms
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We reserve the right to modify these Terms at any time. We will notify 
            users of significant changes via email or through the service. Your 
            continued use of ReplyFan after changes are posted constitutes acceptance 
            of the modified Terms.
          </p>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Email:</strong>{" "}
              <a 
                href="mailto:replyfanapp@gmail.com" 
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                replyfanapp@gmail.com
              </a>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              <strong>Company:</strong> Punica
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              <strong>Location:</strong> Ontario, Canada
            </p>
          </div>
        </section>
      
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          By agreeing to these terms, you grant ReplyFan permission to process and use your provided content exclusively for creating and maintaining your AI persona. You retain full ownership of your original content. ReplyFan will not use your content for other creators or purposes without your explicit consent.
        </p>
      </div>
    </LegalLayout>
  );
}
