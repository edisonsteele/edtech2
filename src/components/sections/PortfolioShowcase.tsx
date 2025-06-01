export default function PortfolioShowcase() {
  const projects = [
    {
      title: "Flathead E-commerce",
      description: "PCI-DSS compliant store with 0.3s LCP",
      tags: ["Next.js", "Stripe", "Tailwind"],
      performance: { lcp: 0.3, score: 98 }
    },
    {
      title: "Healthcare Portal",
      description: "HIPAA-compliant patient management",
      tags: ["React", "Auth0", "SOC2"],
      performance: { lcp: 0.7, score: 92 }
    },
    {
      title: "Montana Tourism Hub",
      description: "Accessible platform with 99 Lighthouse",
      tags: ["Gatsby", "GraphQL", "a11y"],
      performance: { lcp: 0.5, score: 99 }
    }
  ];

  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Technical Portfolio</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Performance-focused solutions with compliance baked in
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 h-48 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-indigo-600">{project.performance.lcp}s</div>
                  <div className="text-sm text-slate-600">LCP (Core Web Vital)</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-indigo-600 hover:text-indigo-800 font-medium text-sm inline-flex items-center"
                >
                  View Case Study
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 