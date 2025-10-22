import React from 'react';
import { CheckIcon, InfoIcon } from 'lucide-react';
import Link from 'next/link'; // Import Link for the CTA button

interface PricingFeatureProps {
  text: string;
  available: boolean;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ text, available }) => (
  <li className="flex items-center text-gray-800 text-lg">
    <CheckIcon className="w-5 h-5 mr-3 text-green-500" />
    {text}
  </li>
);

const PremiumFeature: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-center text-blue-600 font-medium text-lg">
    <CheckIcon className="w-5 h-5 mr-3 text-blue-600" />
    {text}
  </li>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Available plans for your fans</h2>
          <p className="text-lg text-neutral-600">Give supporters the experience you want them to have with your AI persona.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col">
            <h3 className="text-3xl font-bold text-left mb-4">Free</h3>
            <p className="text-gray-600 text-left mb-6">Start conversations. No commitments.</p>
            <div className="text-left mb-8">
              <span className="text-5xl font-bold">0</span>
              <span className="text-gray-600"> / month</span>
              <div className="mt-2 h-6"></div>
            </div>
            <ul className="space-y-4 flex-grow mb-8 text-left">
              <PricingFeature text="24/7 AI bot access" available={true} />
              <PricingFeature text="Limited daily messages" available={true} />
              <PricingFeature text="Fans can send text and voice messages" available={true} />
              <PricingFeature text="AI text responses" available={true} />
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col border-2 border-blue-600">
            <h3 className="text-3xl font-bold text-left mb-4">Premium</h3>
            <p className="text-gray-600 text-left mb-6">Monetize deeper fan experiences.</p>
            <div className="text-left mb-8">
              <span className="text-5xl font-bold">$X</span> {/* Placeholder for price */}
              <span className="text-gray-600">/month</span>
              <div className="flex items-center mt-2">
                <InfoIcon className="w-4 h-4 text-gray-400 mr-2" />
                <p className="text-sm text-gray-500 font-medium">You set your own pricing and keep full control</p>
              </div>
            </div>
            <ul className="space-y-4 flex-grow mb-8 text-left">
              <PricingFeature text="24/7 AI bot access" available={true} />
              <PricingFeature text="Unlimited daily messages" available={true} />
              <PricingFeature text="Fans can send text and voice messages" available={true} />
              <PricingFeature text="AI text responses" available={true} />
              <PremiumFeature text="AI voice responses" />
              <PremiumFeature text="Unlimited conversations" />
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
            Schedule free call to launch your AI bot
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
