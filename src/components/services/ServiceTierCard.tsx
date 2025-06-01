import { CheckIcon } from 'lucide-react';

type Tier = {
  name: string;
  price: string;
  features: string[];
  compliance: string;
};

type Props = {
  tier: Tier;
};

export default function ServiceTierCard({ tier }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
        <div className="text-3xl font-bold text-slate-900 mb-1">{tier.price}</div>
        <p className="text-slate-600 text-sm">{tier.compliance}</p>
      </div>

      <ul className="space-y-3 mb-6">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-center text-slate-700">
            <CheckIcon className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
        Get Started
      </button>
    </div>
  );
} 