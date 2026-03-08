import { Hero } from '../components/home/Hero';
import { SignatureDelights } from '../components/home/SignatureDelights';
import { Features } from '../components/home/Features';
import { Sanctuary } from '../components/home/Sanctuary';

export function Home() {
  return (
    <div className="home-page pt-16">
      <Hero />
      <SignatureDelights />
      <Features />
      <Sanctuary />
    </div>
  );
}