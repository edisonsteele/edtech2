'use client';

import { useState } from 'react';

type MetricKey = 'lcp' | 'tti' | 'cls';

interface MetricData {
  label: string;
  standard: string;
  ours: string;
}

type Metrics = Record<MetricKey, MetricData>;

export default function PerformanceComparison() {
  const [metric, setMetric] = useState<MetricKey>('lcp');
  
  const metrics: Metrics = {
    lcp: { 
      label: "Largest Contentful Paint", 
      standard: "2.5s", 
      ours: "0.42s" 
    },
    tti: { 
      label: "Time to Interactive", 
      standard: "3.8s", 
      ours: "1.2s" 
    },
    cls: { 
      label: "Cumulative Layout Shift", 
      standard: "0.25", 
      ours: "0.02" 
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-xl font-bold mb-6 text-slate-900">Performance Comparison</h2>
      
      <div className="flex gap-4 mb-6">
        {(Object.keys(metrics) as MetricKey[]).map(key => (
          <button
            key={key}
            className={`px-4 py-2 rounded-lg transition-colors ${
              metric === key 
                ? 'bg-indigo-600 text-white' 
                : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
            }`}
            onClick={() => setMetric(key)}
          >
            {metrics[key].label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="font-medium mb-4 text-slate-700">Industry Average</h3>
          <div className="h-4 bg-slate-200 rounded-full mb-2">
            <div 
              className="h-full bg-amber-500 rounded-full" 
              style={{ width: '100%' }}
            ></div>
          </div>
          <div className="text-2xl font-bold text-amber-600">
            {metrics[metric].standard}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-4 text-slate-700">Our Implementation</h3>
          <div className="h-4 bg-slate-200 rounded-full mb-2">
            <div 
              className="h-full bg-emerald-500 rounded-full" 
              style={{ width: '30%' }}
            ></div>
          </div>
          <div className="text-2xl font-bold text-emerald-600">
            {metrics[metric].ours}
          </div>
        </div>
      </div>
    </div>
  );
} 