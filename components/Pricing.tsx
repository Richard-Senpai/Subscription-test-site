import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

const tiers = [
  {
    name: 'Starter',
    price: 0,
    description: 'Get a taste of what Nexus Learning offers.',
    features: ['Access to Module 1', 'Community Forum Read-Only', '1 AI Query / Day'],
    cta: 'Start Free',
    variant: 'outline' as const,
  },
  {
    name: 'Pro Member',
    price: 49,
    description: 'The complete toolkit for serious learners.',
    features: ['Full Course Access (100+ Hours)', 'Unlimited AI Mentor Chat', 'Weekly Live Group Calls', 'Private Discord Community', 'Certificate of Completion'],
    cta: 'Subscribe Now',
    variant: 'secondary' as const,
    popular: true,
  },
  {
    name: 'Lifetime',
    price: 499,
    description: 'One-time payment for lifetime access.',
    features: ['Everything in Pro', 'Lifetime Updates', '1-on-1 Career Session', 'Exclusive Mastermind Group'],
    cta: 'Buy Once',
    variant: 'primary' as const,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Invest in your future with a plan that fits your pace. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`relative p-8 rounded-3xl border ${tier.popular ? 'border-emerald-500/50 bg-emerald-950/10' : 'border-white/10 bg-neutral-900/40'} backdrop-blur-sm flex flex-col`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-black text-xs font-bold rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">${tier.price}</span>
                  {tier.price > 0 && <span className="text-neutral-500">/mo</span>}
                </div>
                <p className="text-sm text-neutral-400 mt-4 h-10">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant={tier.variant} className="w-full">
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};