'use client';

import PerformanceComparison from '@/components/tools/PerformanceComparison';
import ComplianceCalculator from '@/components/tools/ComplianceCalculator';
import { useState } from 'react';

export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState('performance');
  
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-slate-900">Technical Tools</h1>
          <p className="text-xl text-slate-600 mb-12">
            Interactive demonstrations of our technical capabilities
          </p>
        </div>
        
        {/* Tool Selector */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center border-b mb-8">
            <button
              className={`pb-3 px-6 font-medium ${
                activeTool === 'performance'
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
              onClick={() => setActiveTool('performance')}
            >
              Performance Comparison
            </button>
            <button
              className={`pb-3 px-6 font-medium ${
                activeTool === 'compliance'
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
              onClick={() => setActiveTool('compliance')}
            >
              Compliance Calculator
            </button>
            <button
              className={`pb-3 px-6 font-medium ${
                activeTool === 'seo'
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
              onClick={() => setActiveTool('seo')}
            >
              SEO Analyzer
            </button>
          </div>
          
          {/* Tool Content */}
          <div className="bg-white rounded-xl shadow-lg p-6 min-h-[500px]">
            {activeTool === 'performance' && <PerformanceComparison />}
            {activeTool === 'compliance' && <ComplianceCalculator />}
            {activeTool === 'seo' && (
              <div className="text-center">
                <h2 className="text-xl font-bold mb-6 text-slate-900">SEO Health Check</h2>
                <div className="bg-slate-100 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-slate-500">
                  SEO Analysis Tool Placeholder
                </div>
              </div>
            )}
          </div>
          
          {/* Code Quality Demo */}
          <div className="mt-16 bg-slate-900 text-slate-100 rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Code Quality Example</h2>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                <span>ESLint Passed</span>
              </div>
            </div>
            <pre className="overflow-x-auto p-4 bg-slate-800 rounded-lg">
              {`// Compliance-ready API endpoint
export async function POST(request: Request) {
  const data = await request.json();
  
  // PCI-DSS compliant validation
  if (!validatePayment(data)) {
    return new Response('Invalid payment data', { 
      status: 400,
      headers: securityHeaders 
    });
  }
  
  // Secure processing
  const result = await processPayment(data);
  
  return Response.json(result, { headers: securityHeaders });
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
} 