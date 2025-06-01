import DevHero from '@/components/sections/DevHero';
import PortfolioShowcase from '@/components/sections/PortfolioShowcase';
import TechCapabilities from '@/components/sections/TechCapabilities';
import PerformanceComparison from '@/components/tools/PerformanceComparison';
import ContactForm from '@/components/lead/ContactForm';

export default function Home() {
  return (
    <>
      <DevHero />
      <PortfolioShowcase />
      <TechCapabilities />
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PerformanceComparison />
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
