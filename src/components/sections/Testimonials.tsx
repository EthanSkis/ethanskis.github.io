import { Container } from '../layout/Container';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Sarah Kim',
    role: 'Business Coach',
    location: 'Austin, TX',
    initials: 'SK',
    quote:
      "I was spending 20 hours a week on admin. Now it's 3. I used that time to launch a group program that added $8K/month to my revenue. The ROI was immediate.",
    metric: '17 hrs',
    metricLabel: 'saved per week',
    since: 'Client since Jan 2024',
  },
  {
    name: 'Michael Torres',
    role: 'Marketing Consultant',
    location: 'New York, NY',
    initials: 'MT',
    quote:
      'My lead response time went from 24 hours to under 5 minutes. Booking rate is up 40%. I genuinely cannot imagine going back to doing this manually.',
    metric: '+40%',
    metricLabel: 'booking rate',
    since: 'Client since Mar 2024',
  },
  {
    name: 'Jennifer Ross',
    role: 'Course Creator',
    location: 'Denver, CO',
    initials: 'JR',
    quote:
      "Client onboarding used to take me half a day per person. Now it's fully automated and my clients say it's the smoothest experience they've ever had.",
    metric: '4 hrs',
    metricLabel: 'saved per client',
    since: 'Client since Nov 2023',
  },
];

const stats = [
  { number: '50+', label: 'clients automated' },
  { number: '10K+', label: 'hours saved' },
  { number: '98%', label: 'satisfaction rate' },
  { number: '<30 days', label: 'average ROI' },
];

export function Testimonials() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-[#f5f5f7]"
      ref={sectionRef as React.RefObject<HTMLElement>}
      aria-label="Client results"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16 fade-in-up">
          <p className="text-[15px] font-medium text-[#6e6e73] mb-4">Results</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-5">
            Real numbers.
            <br />
            <span className="text-[#6e6e73]">Real clients.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`fade-in-up delay-${(index + 1) * 100} bg-white rounded-2xl p-7 border border-[#d2d2d7] flex flex-col`}
            >
              {/* Metric callout */}
              <div className="mb-5">
                <span className="text-5xl font-bold tracking-tight text-[#1d1d1f]">{t.metric}</span>
                <span className="ml-2 text-[14px] text-[#6e6e73]">{t.metricLabel}</span>
              </div>

              <p className="text-[15px] text-[#1d1d1f] leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#f5f5f7]">
                <div className="w-10 h-10 rounded-full bg-[#1d1d1f] flex items-center justify-center text-white text-[13px] font-semibold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[#1d1d1f]">{t.name}</div>
                  <div className="text-[12px] text-[#86868b]">{t.role} — {t.location}</div>
                </div>
                <span className="ml-auto text-[11px] text-[#86868b]">{t.since}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate stats */}
        <div className="fade-in-up delay-400 grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 border border-[#d2d2d7] text-center">
              <div className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-1">{stat.number}</div>
              <div className="text-[13px] text-[#6e6e73]">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
