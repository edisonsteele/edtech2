'use client';

import { useState } from 'react';

type ComplianceStandard = 'PCI-DSS' | 'SOC 2' | 'HIPAA';

type Comparison = {
  standard: ComplianceStandard;
  traditional: {
    time: string;
    cost: string;
    risk: string;
  };
  ourApproach: {
    time: string;
    cost: string;
    risk: string;
  };
};

const comparisons: Comparison[] = [
  {
    standard: 'PCI-DSS',
    traditional: {
      time: '3-6 months',
      cost: '$50,000+',
      risk: 'High'
    },
    ourApproach: {
      time: '1-2 months',
      cost: '$15,000+',
      risk: 'Low'
    }
  },
  {
    standard: 'SOC 2',
    traditional: {
      time: '6-12 months',
      cost: '$100,000+',
      risk: 'High'
    },
    ourApproach: {
      time: '2-3 months',
      cost: '$25,000+',
      risk: 'Low'
    }
  },
  {
    standard: 'HIPAA',
    traditional: {
      time: '4-8 months',
      cost: '$75,000+',
      risk: 'High'
    },
    ourApproach: {
      time: '1-3 months',
      cost: '$20,000+',
      risk: 'Low'
    }
  }
];

export default function ComplianceComparison() {
  const [selectedStandard, setSelectedStandard] = useState<ComplianceStandard>('PCI-DSS');

  const currentComparison = comparisons.find(c => c.standard === selectedStandard);

  return (
    <div className="bg-white rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-slate-900">Compliance Comparison</h2>
      
      {/* Standard Selector */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-slate-100 p-1 rounded-lg">
          {comparisons.map((comp) => (
            <button
              key={comp.standard}
              className={`px-4 py-2 rounded-md ${
                comp.standard === selectedStandard
                  ? 'bg-white shadow-sm text-slate-900'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
              onClick={() => setSelectedStandard(comp.standard)}
            >
              {comp.standard}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-slate-900">Traditional Approach</h3>
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="text-sm text-slate-500 mb-1">Implementation Time</div>
              <div className="text-2xl font-bold text-amber-600">{currentComparison?.traditional.time}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="text-sm text-slate-500 mb-1">Estimated Cost</div>
              <div className="text-2xl font-bold text-amber-600">{currentComparison?.traditional.cost}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="text-sm text-slate-500 mb-1">Risk Level</div>
              <div className="text-2xl font-bold text-amber-600">{currentComparison?.traditional.risk}</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-slate-900">Our Approach</h3>
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="text-sm text-slate-500 mb-1">Implementation Time</div>
              <div className="text-2xl font-bold text-emerald-600">{currentComparison?.ourApproach.time}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="text-sm text-slate-500 mb-1">Estimated Cost</div>
              <div className="text-2xl font-bold text-emerald-600">{currentComparison?.ourApproach.cost}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="text-sm text-slate-500 mb-1">Risk Level</div>
              <div className="text-2xl font-bold text-emerald-600">{currentComparison?.ourApproach.risk}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 