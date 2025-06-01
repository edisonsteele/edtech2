'use client';

import { useState } from 'react';

type ComplianceType = 'None' | 'PCI-DSS' | 'SOC 2' | 'HIPAA' | 'Other';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    businessName: '',
    websiteUrl: '',
    complianceNeeds: 'None' as ComplianceType
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="border border-indigo-200 rounded-xl p-8 bg-indigo-50">
      <h3 className="text-xl font-bold mb-4 text-slate-900">Get Technical Consultation</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-900">Business Name</label>
          <input 
            type="text" 
            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-slate-900 placeholder-slate-500"
            value={formData.businessName}
            onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
            required
            placeholder="Enter your business name"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-900">Website URL</label>
            <input 
              type="url" 
              className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-slate-900 placeholder-slate-500"
              value={formData.websiteUrl}
              onChange={(e) => setFormData(prev => ({ ...prev, websiteUrl: e.target.value }))}
              required
              placeholder="https://example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-900">Compliance Needs</label>
            <select 
              className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-slate-900"
              value={formData.complianceNeeds}
              onChange={(e) => setFormData(prev => ({ ...prev, complianceNeeds: e.target.value as ComplianceType }))}
            >
              <option className="text-slate-900">None</option>
              <option className="text-slate-900">PCI-DSS</option>
              <option className="text-slate-900">SOC 2</option>
              <option className="text-slate-900">HIPAA</option>
              <option className="text-slate-900">Other</option>
            </select>
          </div>
        </div>
        <button 
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Request Audit
        </button>
      </form>
    </div>
  );
} 