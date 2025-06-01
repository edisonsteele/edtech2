'use client';

import { useState } from 'react';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    results: string[];
  };
}

export default function CaseStudyModal({ isOpen, onClose, caseStudy }: CaseStudyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-slate-900">{caseStudy.title}</h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700"
          >
            Close
          </button>
        </div>
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-48 object-cover rounded-lg mb-6"
        />
        <p className="text-slate-600 mb-6">{caseStudy.description}</p>
        <div className="mb-6">
          <h3 className="font-semibold text-slate-900 mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {caseStudy.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-2">Results</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            {caseStudy.results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 