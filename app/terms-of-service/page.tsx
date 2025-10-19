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
    title: "User Accounts and Registration",
  },
  {
    id: "subscription-payment",
    title: "Subscription and Payment",
    subsections: [
      { id: "free-trial", title: "Free Trial" },
      { id: "subscription-plans", title: "Subscription Plans" },
      { id: "payment-processing", title: "Payment Processing" },
      { id: "no-refunds", title: "No Refund Policy" },
      { id: "cancellation", title: "Cancellation" },
    ],
  },
  {
    id: "user-responsibilities",
    title: "User Responsibilities",
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
            These Terms of Service (&quot;Terms&quot;) govern your use of ReplyFan, an AI-powered 
            chatbot service operated by Punica (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or 
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
            <li>Create personalized AI personas based on their existing content (podcasts, videos, newsletters, coaching calls)</li>
            <li>Deploy AI chatbots on WhatsApp and Telegram platforms with voice message support</li>
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
            User Accounts and Registration
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            To use ReplyFan, you must create an account by connecting your WhatsApp or 
            Telegram account. You are responsible for:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Maintaining the security of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Keeping your contact information up to date</li>
            <li>Notifying us immediately of any unauthorized access</li>
          </ul>
        </section>

        <section id="subscription-payment">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Subscription and Payment
          </h2>
          
          <div id="free-trial" className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Free Trial
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              New users can access ReplyFan with limited usage through our free trial. 
              During the trial period, you can:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mt-2">
              <li>Test the AI chatbot functionality</li>
              <li>Send a limited number of messages</li>
              <li>Experience the core features of the service</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              Once you reach the usage limit, you will be prompted to subscribe to 
              continue using the service.
            </p>
          </div>

          <div id="subscription-plans" className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Subscription Plans
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We offer various subscription plans with different features and usage limits. 
              Pricing and plan details are available on our website and may be updated 
              from time to time.
            </p>
          </div>

          <div id="payment-processing" className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Payment Processing
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All payments are processed securely through Stripe. By subscribing, you 
              agree to Stripe's terms of service and privacy policy. We do not store 
              your payment information directly.
            </p>
          </div>

          <div id="no-refunds" className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              No Refund Policy
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All subscription fees are non-refundable. This includes partial refunds 
              for unused portions of your subscription period. By subscribing, you 
              acknowledge and agree to this no-refund policy.
            </p>
          </div>

          <div id="cancellation" className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Cancellation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You may cancel your subscription at any time through your account settings 
              or by contacting us. Cancellation will take effect at the end of your 
              current billing period, and you will retain access to the service until 
              that time.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              Upon cancellation, your account and all associated data will be deleted 
              within 30 days, unless you request immediate deletion.
            </p>
          </div>
        </section>

        <section id="user-responsibilities">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            User Responsibilities
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            As a user of ReplyFan, you are responsible for:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Ensuring the accuracy of information provided for AI persona creation</li>
            <li>Monitoring and supervising AI-generated responses to your audience</li>
            <li>Taking responsibility for the content and advice given by your AI persona</li>
            <li>Complying with all applicable laws and regulations in your jurisdiction</li>
            <li>Respecting the intellectual property rights of others</li>
            <li>Using the service in a manner that does not harm or abuse our systems</li>
            <li>Understanding that conversation data is shared with OpenAI for AI processing</li>
            <li>Consenting to OpenAI's data usage policies when using our service</li>
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
                You retain full ownership of your original content, including YouTube 
                videos and transcripts used to create your AI persona. We do not claim 
                ownership of your content.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Permission to Use Content
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By using our service, you grant us permission to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mt-2">
                <li>Access and process your existing content (podcasts, videos, newsletters, coaching calls)</li>
                <li>Use this content to train your personalized AI persona</li>
                <li>Maintain conversation context for better user experience</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Content Usage Restrictions
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We will not use your content for any other purposes without your explicit 
                permission. This includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mt-2">
                <li>Training AI models for other users</li>
                <li>Creating marketing materials featuring your content</li>
                <li>Sharing your content with third parties</li>
                <li>Using your content for commercial purposes beyond your AI persona</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="prohibited-content">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Prohibited Content and Activities
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            You may not use ReplyFan to create, distribute, or facilitate content that:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Violates any applicable laws or regulations</li>
            <li>Contains hate speech, harassment, or discrimination</li>
            <li>Promotes violence, terrorism, or illegal activities</li>
            <li>Infringes on intellectual property rights</li>
            <li>Contains sexually explicit or inappropriate content</li>
            <li>Promotes misinformation or false medical advice</li>
            <li>Attempts to hack, disrupt, or damage our systems</li>
            <li>Violates the terms of service of WhatsApp or Telegram</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            We reserve the right to suspend or terminate accounts that violate these 
            prohibitions.
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
                While we strive to provide accurate and helpful AI responses, we cannot 
                guarantee the accuracy, completeness, or appropriateness of AI-generated 
                content. You are responsible for monitoring and supervising all AI 
                interactions with your audience.
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
            <li>Non-payment of subscription fees</li>
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
      </div>
    </LegalLayout>
  );
}
