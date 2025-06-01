import { Globe, Shield, Smartphone, Code } from 'lucide-react';

export default function TechCapabilities() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Technical Capabilities</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Why choose a developer who understands both code and compliance?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: <Globe className="w-8 h-8" />, 
              title: "Performance Optimization", 
              description: "Next.js, Vercel edge network, image optimization"
            },
            { 
              icon: <Shield className="w-8 h-8" />, 
              title: "Compliance Integration", 
              description: "SOC2, PCI-DSS, HIPAA built into architecture"
            },
            { 
              icon: <Smartphone className="w-8 h-8" />, 
              title: "Montana Responsive", 
              description: "Perfect display from Glacier Park to Billings"
            },
            { 
              icon: <Code className="w-8 h-8" />, 
              title: "Modern Tech Stack", 
              description: "React, TypeScript, Tailwind, GraphQL"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-indigo-600 mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 