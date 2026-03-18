import { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { HowItWorks } from './components/sections/HowItWorks';
import { Pricing } from './components/sections/Pricing';
import { Testimonials } from './components/sections/Testimonials';
import { Demo } from './components/sections/Demo';
import { FAQ } from './components/sections/FAQ';
import { CTA } from './components/sections/CTA';
import { Booking } from './components/sections/Booking';
import { Contact } from './components/sections/Contact';

function App() {
  // Animate hero elements on mount
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in-up');
    // Small delay so initial paint completes first
    const timer = setTimeout(() => {
      els.forEach((el) => {
        const htmlEl = el as HTMLElement;
        // Only auto-animate elements in the viewport on load
        const rect = htmlEl.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          htmlEl.classList.add('visible');
        }
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Demo />
        <FAQ />
        <Booking />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
