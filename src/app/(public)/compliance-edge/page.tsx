import { Shield, Lock, FileCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ComplianceEdgePage() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "HIPAA Compliance",
      description: "Built-in safeguards for healthcare data protection",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "PCI-DSS Ready",
      description: "Secure payment processing infrastructure",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "SOC 2 Framework",
      description: "Enterprise-grade security controls",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Real-time Monitoring",
      description: "Continuous security and compliance monitoring",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const benefits = [
    "Built-in security controls",
    "Automated compliance checks",
    "Regular security updates",
    "Compliance documentation",
    "Audit trail logging",
    "Data encryption at rest and in transit"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block">Compliance Edge</span>
              <span className="text-indigo-100">Security Built-In</span>
            </h1>
            <p className="text-xl text-white/90">
              Enterprise-grade security and compliance features built into every project
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.gradient} rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Compliance Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Ready to Discuss Compliance?</h2>
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