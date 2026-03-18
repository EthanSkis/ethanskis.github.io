import { ArrowRight, Clock, Target, Star } from 'lucide-react';
import Button from '../ui/Button';
import { Container } from '../layout/Container';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function CTA() {
  const sectionRef = useScrollAnimation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="cta"
      className="py-20 lg:py-28 bg-gradient-to-br from-[#1e3a5f] via-[#1e3a5f] to-[#0d9488] relative overflow-hidden"
      ref={sectionRef as React.RefObject<HTMLElement>}
      aria-label="Call to action"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

      <Container size="md">
        <div className="relative text-center fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <Star className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
            Free, No-Obligation Audit
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Ready to Get Your{' '}
            <span className="text-[#f59e0b]">Time Back?</span>
          </h2>

          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
            Book your free 15-minute workflow audit. We'll identify exactly what you can automate
            and how much time you'll save—with no obligation to buy anything.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { icon: Clock, text: '15 minutes' },
              { icon: Target, text: 'Custom recommendations' },
              { icon: Star, text: 'Completely free' },
            ].map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
                >
                  <Icon className="w-4 h-4 text-[#f59e0b]" aria-hidden="true" />
                  {badge.text}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white group min-w-[220px]"
            >
              Book Your Free Audit
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <p className="text-white/50 text-sm mt-4">
            No obligation. No sales pressure. Just actionable insights.
          </p>
        </div>
      </Container>
    </section>
  );
}
