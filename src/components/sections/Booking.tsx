import { Container } from '../layout/Container';
import { CalendlyEmbed } from '../ui/CalendlyEmbed';

export function Booking() {

  return (
    <section
      id="booking"
      className="py-24 lg:py-32 bg-[#f5f5f7]"
      aria-label="Book a free audit"
    >
      <Container size="md">
        <div className="text-center mb-12 fade-in-up">
          <p className="text-[15px] font-medium text-[#6e6e73] mb-4">Book your free audit</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-5">
            Pick a time.
            <br />
            <span className="text-[#6e6e73]">We'll handle the rest.</span>
          </h2>
          <p className="text-[17px] text-[#6e6e73] max-w-md mx-auto">
            A focused 15-minute call to map your workflow and show you exactly what can be automated.
          </p>

          {/* Scarcity */}
          <div className="mt-5 inline-flex items-center gap-2 text-[13px] text-[#6e6e73]">
            <span className="w-1.5 h-1.5 bg-[#ff3b30] rounded-full" aria-hidden="true" />
            Only 5 spots available this month — 3 already taken
          </div>
        </div>

        {/* Trust signals */}
        <div className="grid grid-cols-3 gap-3 mb-8 fade-in-up delay-100">
          {[
            { label: '15 minutes', sub: 'No wasted time' },
            { label: 'Free', sub: 'No credit card' },
            { label: 'Custom plan', sub: 'For your workflow' },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl p-4 text-center border border-[#d2d2d7]">
              <div className="text-[15px] font-semibold text-[#1d1d1f]">{item.label}</div>
              <div className="text-[12px] text-[#86868b] mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Calendly embed */}
        <div className="fade-in-up delay-200">
          <CalendlyEmbed />
        </div>

        <p className="text-center text-[13px] text-[#86868b] mt-6 fade-in-up delay-300">
          Can't find a time that works?{' '}
          <button
            className="text-[#1d1d1f] underline underline-offset-2 hover:opacity-60 transition-opacity"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Send us a message instead.
          </button>
        </p>
      </Container>
    </section>
  );
}
