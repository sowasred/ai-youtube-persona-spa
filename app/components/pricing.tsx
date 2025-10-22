import React from 'react';
import { CheckIcon } from 'lucide-react';
import Link from 'next/link'; // Import Link for the CTA button

interface PricingFeatureProps {
  text: string;
  available: boolean;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ text, available }) => (
  <li className={`flex items-center ${available ? 'text-gray-800' : 'text-gray-400 line-through'}`}>
    <CheckIcon className={`w-5 h-5 mr-2 ${available ? 'text-green-500' : 'text-gray-400'}`} />
    {text}
  </li>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">For Creators: Choose Your Fan Engagement Level</h2>
        <p className="text-gray-600 text-center mb-12">Empower your fans to connect with your AI persona.</p>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col">
            <h3 className="text-2xl font-bold text-center mb-4">Free Fan Engagement</h3>
            <p className="text-gray-600 text-center mb-6">Start connecting with your fans instantly!</p>
            <div className="text-center mb-8">
              <span className="text-5xl font-bold">Free</span>
              <span className="text-gray-600"> / daily messages</span>
            </div>
            <ul className="space-y-4 flex-grow mb-8">
              <PricingFeature text="Automatic bot launch with messaging to your persona" available={true} />
              <PricingFeature text="Limited daily messages for fans" available={true} />
              <PricingFeature text="Fans can message your AI persona daily" available={true} />
              <PricingFeature text="Fans can send text messages" available={true} />
              <PricingFeature text="Fans can send voice messages" available={true} />
              <PricingFeature text="Fans receive text messages back from your AI" available={true} />
              <PricingFeature text="AI voice messages with your tone and voice" available={false} />
              <PricingFeature text="Longer, in-depth conversations for fans" available={false} />
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col border-2 border-blue-600">
            <h3 className="text-2xl font-bold text-center mb-4">Premium Fan Experience</h3>
            <p className="text-gray-600 text-center mb-6">Unlock deeper, more personal fan interactions.</p>
            <div className="text-center mb-8">
              <span className="text-5xl font-bold">$X</span> {/* Placeholder for price */}
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-4 flex-grow mb-8">
              <PricingFeature text="Automatic bot launch with messaging to your persona" available={true} />
              <PricingFeature text="Unlimited daily messages for fans" available={true} />
              <PricingFeature text="Fans can message your AI persona daily" available={true} />
              <PricingFeature text="Fans can send text messages" available={true} />
              <PricingFeature text="Fans can send voice messages" available={true} />
              <PricingFeature text="Fans receive text messages back from your AI" available={true} />
              <PricingFeature text="AI voice messages with your tone and voice" available={true} />
              <PricingFeature text="Longer, in-depth conversations for fans" available={true} />
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            href="https://calendly.com/replyfanapp/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white py-4 px-8 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Book a calendar meeting to launch your bot free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
