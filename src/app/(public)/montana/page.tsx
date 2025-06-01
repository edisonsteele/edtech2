import LocalTestimonials from '@/components/montana/LocalTestimonials';
import { CheckIcon } from 'lucide-react';

export default function MontanaPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Montana Advantage</h1>
        <p className="text-xl text-slate-600">
          High-performance websites optimized for Montana businesses
        </p>
      </div>

      {/* Bandwidth Optimization */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <div className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full inline-block mb-4">
            Technical Advantage
          </div>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Rural Performance Optimization</h2>
          <p className="text-slate-600 mb-4">
            We build websites that perform exceptionally well even with Montana's 
            variable internet speeds through:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-slate-700">
              <CheckIcon className="h-5 w-5 text-emerald-500 mr-2" />
              Advanced resource preloading
            </li>
            <li className="flex items-center text-slate-700">
              <CheckIcon className="h-5 w-5 text-emerald-500 mr-2" />
              Aggressive caching strategies
            </li>
            <li className="flex items-center text-slate-700">
              <CheckIcon className="h-5 w-5 text-emerald-500 mr-2" />
              Adaptive image loading
            </li>
            <li className="flex items-center text-slate-700">
              <CheckIcon className="h-5 w-5 text-emerald-500 mr-2" />
              Montana-specific CDN configuration
            </li>
          </ul>
        </div>
        <div className="bg-slate-200 border-2 border-dashed rounded-xl w-full h-80" />
      </div>

      <LocalTestimonials />
      
      {/* Montana Hosting Advantage */}
      <div className="mt-24 bg-indigo-50 rounded-2xl p-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full inline-block mb-4">
            Hosting Advantage
          </div>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Local Hosting Benefits</h2>
          <p className="text-slate-600 mb-8 text-lg">
            Our Montana-based hosting provides 300ms faster load times for local
            visitors and ensures compliance with state data residency requirements.
          </p>
          <div className="bg-white rounded-xl p-6 inline-block">
            <div className="flex items-baseline justify-center">
              <div className="text-4xl font-bold text-emerald-600">300ms</div>
              <div className="text-slate-600 ml-2">
                faster load times for Montana visitors
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 