import Hero from '@/components/Hero';
import Collections from '@/components/Collections';
import ProductShowcase from '@/components/ProductShowcase';
import BrandStory from '@/components/BrandStory';

export default function Home() {
  return (
    <main className="min-h-screen bg-azhak-beige text-charcoal">
      <Hero />
      <Collections />
      <ProductShowcase />
      <BrandStory />
    </main>
  );
}