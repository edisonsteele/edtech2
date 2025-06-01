import { Code, Shield, Zap, MapPin, Users, BarChart } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites built with Next.js and modern web technologies",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance Integration",
      description: "Built-in compliance for HIPAA, PCI-DSS, and SOC 2",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Lightning-fast load times and optimal user experience",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Montana Localization",
      description: "Region-specific optimizations for Montana businesses",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Training",
      description: "Knowledge transfer and technical documentation",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics & Monitoring",
      description: "Real-time performance monitoring and analytics",
      gradient: "from-rose-500 to-pink-600"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block">Our Services</span>
              <span className="text-indigo-100">Tailored for Montana Businesses</span>
            </h1>
            <p className="text-xl text-white/90">
              Comprehensive web development services with a focus on performance, compliance, and local expertise
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${service.gradient} rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let&apos;s discuss how we can help your business achieve its digital goals
            </p>
            <a
              href="/contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 