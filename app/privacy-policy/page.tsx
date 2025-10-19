import type { Metadata } from "next";
import { LegalLayout } from "../components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy - ReplyFan",
  description: "Privacy Policy for ReplyFan - AI-powered WhatsApp and Telegram chatbot service for content creators.",
};

const tableOfContents = [
  {
    id: "introduction",
    title: "Introduction",
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    subsections: [
      { id: "personal-information", title: "Personal Information" },
      { id: "usage-data", title: "Usage Data" },
      { id: "content-data", title: "Content Data" },
      { id: "payment-information", title: "Payment Information" },
      { id: "analytics-data", title: "Usage Analytics" },
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
  },
  {
    id: "data-sharing",
    title: "Data Sharing and Disclosure",
  },
  {
    id: "ai-data-processing",
    title: "How AI Uses Your Data",
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
  },
  {
    id: "data-security",
    title: "Data Security and Storage",
  },
  {
    id: "data-retention",
    title: "Data Retention",
  },
  {
    id: "your-rights",
    title: "Your Rights",
  },
  {
    id: "international-users",
    title: "International Users",
  },
  {
    id: "children-privacy",
    title: "Children's Privacy",
  },
  {
    id: "changes",
    title: "Changes to This Policy",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="October 18, 2025"
      tableOfContents={tableOfContents}
    >
      <div className="space-y-8">
        <section id="introduction">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Introduction
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Punica (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates ReplyFan, an AI-powered chatbot service 
            that allows content creators to create personalized AI personas trained on their 
            existing content (podcasts, videos, newsletters, coaching calls, etc.) and interact 
            with their fans through WhatsApp and Telegram. This Privacy Policy explains how 
            we collect, use, disclose, and protect your information when you use our service.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            By using ReplyFan, you agree to the collection and use of information in 
            accordance with this policy. If you do not agree with the terms of this 
            Privacy Policy, please do not access or use our service.
          </p>
        </section>

        <section id="information-we-collect">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Information We Collect
          </h2>
          
          <div id="personal-information" className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Personal Information
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Email address (when provided)</li>
              <li>Username or display name</li>
              <li>WhatsApp or Telegram user identifiers</li>
              <li>Account creation and last activity timestamps</li>
            </ul>
          </div>

          <div id="usage-data" className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Usage Data
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Last 20 messages in the conversation history between users and AI personas</li>
              <li>AI model usage metrics (tokens used, response times)</li>
              <li>Service interaction patterns and frequency</li>
              <li>Subscription status and billing information</li>
            </ul>
          </div>

          <div id="content-data" className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Content Data
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Podcasts, videos, newsletters, coaching calls, and other content (with creator permission)</li>
              <li>Content metadata (titles, descriptions, channel information)</li>
              <li>AI persona training data derived from creator content</li>
              <li>Conversation context for maintaining chat continuity</li>
            </ul>
          </div>

          <div id="payment-information" className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Payment Information
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use Stripe to process payments. We collect:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mt-2">
              <li>Stripe customer IDs and subscription IDs</li>
              <li>Payment amounts and currency</li>
              <li>Subscription types and billing cycles</li>
              <li>Payment status and transaction history</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              <strong>Note:</strong> We do not store credit card numbers or other sensitive 
              payment information. This data is securely handled by Stripe.
            </p>
          </div>

          <div id="analytics-data" className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Usage Analytics
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We collect limited analytics data to understand how ReplyFan is performing and to improve the experience.  
            This may include: 
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mt-2">
              <li>Message delivery and response success rates</li>
              <li>Feature usage statistics (e.g., voice messages, subscription actions)</li>
              <li>General device information such as operating system and app version</li>
              <li>Aggregate engagement metrics (e.g., number of active users per creator)</li>
            </ul>
          </div>
        </section>

        <section id="how-we-use-information">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Service Provision:</strong> To provide and maintain our AI chatbot service</li>
            <li><strong>AI Persona Creation:</strong> To train personalized AI personas based on creator content</li>
            <li><strong>Conversation Context:</strong> To maintain context in ongoing conversations we store the last 20 messages in the conversation history</li>
            <li><strong>Payment Processing:</strong> To process subscriptions and manage billing</li>
            <li><strong>Content Advice:</strong> To provide AI-powered suggestions for new content based on audience interactions</li>
            <li><strong>Service Improvement:</strong> To analyze usage patterns and improve our service</li>
            <li><strong>Customer Support:</strong> To respond to inquiries and provide technical support</li>
            <li><strong>Security:</strong> To monitor for abuse and ensure service security</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
          </ul>
        </section>

        <section id="data-sharing">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Data Sharing and Disclosure
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information to third parties. 
            We may share your information only in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            <li><strong>Service Providers:</strong> With trusted third-party services that help us operate our platform</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>
        </section>

        <section id="ai-data-processing">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            AI Data Processing
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            ReplyFan uses artificial intelligence to create personalized chatbot responses. 
            This process involves several types of data processing:
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Conversation Data Flow
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When users interact with AI personas, the following occurs:
              </p>
              <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mt-2 ml-4">
                <li>User messages (text and voice) are sent to OpenAI's servers for processing</li>
                <li>OpenAI generates responses (text and voice) based on the creator's trained persona</li>
                <li>Responses are returned to ReplyFan and delivered to users</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Data Retention by OpenAI
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                OpenAI may retain conversation data according to their policies. We have 
                no control over OpenAI's data retention practices. Users should review 
                OpenAI's privacy policy for details about their data handling.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Creator Content Processing
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To create AI personas, we process podcasts, videos, newsletters, coaching calls, 
                and other creator content. This content is used solely to train the creator's 
                personalized AI persona and is not shared with other users or used for other purposes.
              </p>
            </div>
          </div>
        </section>

        <section id="third-party-services">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Third-Party Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We use the following third-party services that may have access to your information:
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                OpenAI
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use OpenAI's API to power our AI chatbot functionality. When you 
                interact with our AI personas, your conversation data is shared with 
                OpenAI for processing and response generation. OpenAI may process, store, 
                and use this conversation data according to their privacy policy and terms 
                of service. By using our service, you consent to this data sharing with OpenAI.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                <strong>Important:</strong> OpenAI may use conversation data to improve 
                their models. If you have concerns about this, please review OpenAI's 
                privacy policy before using our service.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Stripe
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use Stripe for payment processing. Stripe handles all payment 
                information according to their privacy policy and security standards.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Google Analytics
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use Google Analytics to understand website usage. Google may 
                collect information according to their privacy policy.
              </p>
            </div>
          </div>
        </section>

        <section id="data-security">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Data Security and Storage
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We implement appropriate security measures to protect your information:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Encryption of data in transit and at rest</li>
            <li>Secure database hosting</li>
            <li>Regular security audits and monitoring</li>
            <li>Access controls and authentication measures</li>
            <li>Regular backups and disaster recovery procedures</li>
          </ul>
        </section>

        <section id="data-retention">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Data Retention
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We retain your information for the following periods:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Account Data:</strong> Until you delete your account or request deletion</li>
            <li><strong>YouTube Transcripts:</strong> Until the creator cancels their service agreement</li>
            <li><strong>Conversation History:</strong> Until account deletion for context maintenance</li>
            <li><strong>Usage Analytics:</strong> Aggregated data may be retained for service improvement</li>
            <li><strong>Payment Records:</strong> As required by law and accounting standards</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            When you cancel your account, we will delete all your personal data within 
            30 days, except where retention is required by law.
          </p>
        </section>

        <section id="your-rights">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Your Rights
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Access:</strong> Request a copy of your personal information</li>
            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request transfer of your data to another service</li>
            <li><strong>Restriction:</strong> Request limitation of processing your information</li>
            <li><strong>Objection:</strong> Object to certain types of data processing</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            To exercise these rights, please contact us at{" "}
            <a 
              href="mailto:replyfanapp@gmail.com" 
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              replyfanapp@gmail.com
            </a>
          </p>
        </section>

        <section id="international-users">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            International Users
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            ReplyFan is a worldwide service. If you are located outside Canada, please note that:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Your information may be transferred to and processed in Canada</li>
            <li>We comply with applicable international privacy laws</li>
            <li>European users have additional rights under GDPR</li>
            <li>California users have additional rights under CCPA</li>
          </ul>
        </section>

        <section id="children-privacy">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Children's Privacy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            ReplyFan is not intended for individuals under 18 years of age. We do not 
            knowingly collect personal information from anyone under the age of 18. 
            If you are a parent or guardian and believe your child has used our service, please contact us immediately.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              For Parents and Guardians
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              If you are a parent or guardian and believe your child has provided us with 
              personal information or is using our service, please contact us immediately:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Email: <a href="mailto:replyfanapp@gmail.com" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">replyfanapp@gmail.com</a></li>
              <li>Subject: &quot;Guardian Request - Child Account&quot;</li>
              <li>Include: Child's account information and your relationship</li>
            </ul>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We will promptly investigate and, if confirmed, immediately delete all 
            personal information associated with the child's account and terminate 
            the account.
          </p>
        </section>

        <section id="changes">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you 
            of any changes by posting the new Privacy Policy on this page and updating 
            the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy 
            periodically for any changes.
          </p>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or our privacy practices, 
            please contact us:
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
