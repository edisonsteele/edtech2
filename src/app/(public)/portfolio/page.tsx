import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import CaseStudyModal from '@/components/portfolio/CaseStudyModal';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block">Technical Portfolio</span>
              <span className="text-indigo-100">Performance-Driven Solutions</span>
            </h1>
            <p className="text-xl text-white/90">
              High-performance websites with compliance built-in, optimized for Montana businesses
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-4 py-16">
        <PortfolioGrid />
      </div>
      
      {/* Tech Stack Showcase */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: 'Next.js', 
                description: 'React framework for production',
                gradient: 'from-indigo-500 to-blue-600'
              },
              { 
                name: 'Vercel', 
                description: 'Edge hosting platform',
                gradient: 'from-emerald-500 to-teal-600'
              },
              { 
                name: 'Tailwind CSS', 
                description: 'Utility-first styling',
                gradient: 'from-amber-500 to-orange-600'
              },
              { 
                name: 'TypeScript', 
                description: 'Statically typed JavaScript',
                gradient: 'from-purple-500 to-pink-600'
              }
            ].map((tech, i) => (
              <div 
                key={i} 
                className={`bg-gradient-to-br ${tech.gradient} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="bg-white/10 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">{tech.name[0]}</span>
                </div>
                <h3 className="font-bold text-lg text-center">{tech.name}</h3>
                <p className="text-white/80 mt-2 text-center">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 