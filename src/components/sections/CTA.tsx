import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { Container } from '../layout/Container';

export function CTA() {

  return (
    <section
      id="cta"
      className="py-24 lg:py-32 bg-[#1d1d1f]"
      aria-label="Call to action"
    >
      <Container size="md">
        <div className="text-center fade-in-up">
          {/* Scarcity signal */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-[13px] font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-[#34c759] rounded-full" aria-hidden="true" />
            Only 5 new client audits available this month
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.05]">
            Ready to get your
            <br />
            time back?
          </h2>

          <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg mx-auto">
            Book a free 15-minute workflow audit. We'll map exactly what you can automate and show you how much time you'll save.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Button
              size="lg"
              className="bg-white text-[#1d1d1f] hover:bg-white/90 group min-w-[220px]"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book your free audit
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white/70 hover:text-white hover:bg-white/10 min-w-[180px]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Send us a message
            </Button>
          </div>

          <p className="text-[13px] text-white/40">
            No obligation. No sales pitch. Just a focused look at your workflow.
          </p>
        </div>
      </Container>
    </section>
  );
}
