'use client';

import { useState } from 'react';

type ComplianceStandard = 'PCI-DSS' | 'SOC 2' | 'HIPAA' | 'Montana DPIA';

type CalculatorInputs = {
  standard: ComplianceStandard;
  employeeCount: number;
  hasEcommerce: boolean;
  handlesMedicalData: boolean;
  needsAuditLogs: boolean;
};

export default function ComplianceCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    standard: 'PCI-DSS',
    employeeCount: 10,
    hasEcommerce: false,
    handlesMedicalData: false,
    needsAuditLogs: false
  });

  const calculateCost = () => {
    let baseCost = 0;
    let additionalCost = 0;

    // Base costs by standard
    switch (inputs.standard) {
      case 'PCI-DSS':
        baseCost = 1500;
        additionalCost = inputs.hasEcommerce ? 2000 : 0;
        break;
      case 'SOC 2':
        baseCost = 2500;
        additionalCost = inputs.needsAuditLogs ? 1500 : 0;
        break;
      case 'HIPAA':
        baseCost = 3000;
        additionalCost = inputs.handlesMedicalData ? 2500 : 0;
        break;
      case 'Montana DPIA':
        baseCost = 999;
        break;
    }

    // Employee count scaling
    const employeeMultiplier = Math.ceil(inputs.employeeCount / 10);
    return (baseCost + additionalCost) * employeeMultiplier;
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-slate-900">Compliance Cost Calculator</h2>
      
      <div className="space-y-6">
        {/* Standard Selection */}
        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700">
            Compliance Standard
          </label>
          <select
            value={inputs.standard}
            onChange={(e) => setInputs(prev => ({ ...prev, standard: e.target.value as ComplianceStandard }))}
            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-slate-900"
          >
            <option value="PCI-DSS">PCI-DSS</option>
            <option value="SOC 2">SOC 2</option>
            <option value="HIPAA">HIPAA</option>
            <option value="Montana DPIA">Montana DPIA</option>
          </select>
        </div>

        {/* Employee Count */}
        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700">
            Number of Employees
          </label>
          <input
            type="number"
            min="1"
            value={inputs.employeeCount}
            onChange={(e) => setInputs(prev => ({ ...prev, employeeCount: parseInt(e.target.value) }))}
            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-slate-900"
          />
        </div>

        {/* Additional Options */}
        <div className="space-y-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={inputs.hasEcommerce}
              onChange={(e) => setInputs(prev => ({ ...prev, hasEcommerce: e.target.checked }))}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
            />
            <span className="text-slate-700">E-commerce Integration</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={inputs.handlesMedicalData}
              onChange={(e) => setInputs(prev => ({ ...prev, handlesMedicalData: e.target.checked }))}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
            />
            <span className="text-slate-700">Handles Medical Data</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={inputs.needsAuditLogs}
              onChange={(e) => setInputs(prev => ({ ...prev, needsAuditLogs: e.target.checked }))}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
            />
            <span className="text-slate-700">Advanced Audit Logging</span>
          </label>
        </div>

        {/* Cost Estimate */}
        <div className="mt-8 p-6 bg-slate-50 rounded-xl">
          <div className="text-center">
            <div className="text-sm text-slate-500 mb-1">Estimated Cost</div>
            <div className="text-4xl font-bold text-emerald-600">
              ${calculateCost().toLocaleString()}
            </div>
            <div className="text-sm text-slate-500 mt-2">
              One-time implementation cost
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 