import { Metadata } from 'next';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';

export const metadata: Metadata = {
  title: 'Portfolio - Edison Tech',
  description: 'Explore our portfolio of high-performance web development projects for Montana businesses.',
};

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
  // ... existing items ...
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-12">Our Portfolio</h1>
        <PortfolioGrid items={portfolioItems} />
      </div>
    </main>
  );
} 