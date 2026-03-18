import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const painPoints = [
  {
    stat: '20 hrs',
    context: 'per week',
    description: 'The average coach spends 20 hours on admin, email, and follow-up instead of billable client work.',
  },
  {
    stat: '48 hrs',
    context: 'average delay',
    description: 'Most leads hear back within 24–48 hours. By then, they\'ve already booked with a competitor who responded first.',
  },
  {
    stat: '$120K',
    context: 'left on the table',
    description: "At $300/hr, those 20 weekly admin hours represent $120K+ in potential annual revenue you're not capturing.",
  },
];

export function Problem() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="problem"
      className="py-24 lg:py-32 bg-[#f5f5f7]"
      ref={sectionRef as React.RefObject<HTMLElement>}
      aria-label="Problem"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-5">
            You're spending your best hours
            <br />
            on your worst work.
          </h2>
          <p className="text-xl text-[#6e6e73] leading-relaxed">
            Coaches and consultants didn't start their business to send follow-up emails and chase invoices. But that's where the time goes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className={`fade-in-up delay-${(index + 1) * 100} bg-white rounded-2xl p-7 border border-[#d2d2d7]`}
            >
              <div className="mb-4">
                <span className="text-5xl font-bold tracking-tight text-[#1d1d1f]">{point.stat}</span>
                <span className="ml-2 text-[15px] text-[#6e6e73]">{point.context}</span>
              </div>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Micro-CTA */}
        <div className="fade-in-up delay-400 text-center">
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#1d1d1f] hover:opacity-60 transition-opacity group"
          >
            See how we fix this
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </Container>
    </section>
  );
}
