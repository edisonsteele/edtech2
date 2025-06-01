'use client';

import { useState } from 'react';
import Image from 'next/image';
import CaseStudyModal from './CaseStudyModal';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  results: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Montana Outdoor Gear",
    category: "E-commerce",
    image: "/portfolio/montana-outdoor.jpg",
    description: "A high-performance e-commerce platform for outdoor gear, built with Next.js and Shopify.",
    technologies: ["Next.js", "Shopify", "Tailwind CSS", "TypeScript"],
    results: ["40% increase in conversion rate", "60% reduction in page load time", "25% growth in mobile sales"]
  },
  {
    id: 2,
    title: "Healthcare Portal",
    category: "Healthcare",
    image: "/portfolio/healthcare-portal.jpg",
    description: "HIPAA-compliant patient portal with real-time appointment scheduling and secure messaging.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    results: ["99.9% uptime", "50% reduction in appointment no-shows", "HIPAA compliance achieved"]
  },
  {
    id: 3,
    title: "Financial Dashboard",
    category: "Finance",
    image: "/portfolio/financial-dashboard.jpg",
    description: "Real-time financial analytics dashboard with automated reporting and compliance monitoring.",
    technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
    results: ["30% faster reporting", "100% audit compliance", "75% reduction in manual work"]
  }
];

export default function PortfolioGrid() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-all duration-200"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative h-48 bg-gradient-to-br from-indigo-50 to-blue-50">
              <div className="absolute inset-0 flex items-center justify-center text-indigo-400">
                [Project Image]
              </div>
            </div>
            <div className="p-6">
              <span className="text-sm font-medium text-indigo-600">{item.category}</span>
              <h3 className="text-xl font-bold mt-2 text-slate-800">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <CaseStudyModal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
      />
    </>
  );
} 