import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import About from '@/components/landing/About';
import TelthRootCloud from '@/components/landing/TelthRootCloud';
import WhoItsFor from '@/components/landing/WhoItsFor';
import Specializations from '@/components/landing/Specializations';
import FounderMessage from '@/components/landing/FounderMessage';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <TelthRootCloud />
      <WhoItsFor />
      <Specializations />
      <FounderMessage />
      <Contact />
      <Footer />
    </main>
  );
}
