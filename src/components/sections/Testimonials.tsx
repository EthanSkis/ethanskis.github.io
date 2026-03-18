import { Star, Quote } from 'lucide-react';
import { Container } from '../layout/Container';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Sarah K.',
    role: 'Business Coach',
    avatar: 'SK',
    avatarBg: 'from-teal-400 to-teal-600',
    quote:
      "I was spending 20 hours a week on admin. Now it's 3. I used that time to launch a group program that added $8K/month to my revenue.",
    metric: '17 hours saved/week',
    metricLabel: 'time saved',
    stars: 5,
  },
  {
    name: 'Mike T.',
    role: 'Marketing Consultant',
    avatar: 'MT',
    avatarBg: 'from-blue-400 to-blue-600',
    quote:
      'My lead response time went from 24 hours to instant. My booking rate increased 40% in the first month. ROI was immediate.',
    metric: '+40% booking rate',
    metricLabel: 'improvement',
    stars: 5,
  },
  {
    name: 'Jennifer R.',
    role: 'Course Creator',
    avatar: 'JR',
    avatarBg: 'from-purple-400 to-purple-600',
    quote:
      "Client onboarding used to take me half a day. Now it's fully automated. My clients actually comment on how professional and smooth the experience is.",
    metric: '4 new clients/month',
    metricLabel: 'capacity increase',
    stars: 5,
  },
];

export function Testimonials() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-[#f8fafc]"
      ref={sectionRef as React.RefObject<HTMLElement>}
      aria-label="Client testimonials"
    >
      <Container>
        <div className="text-center mb-12 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-[#f59e0b] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Social Proof
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            Results Our Clients{' '}
            <span className="text-[#0d9488]">Are Seeing</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Real coaches and consultants who reclaimed their time and scaled their revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`fade-in-up delay-${(index + 1) * 100} bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${testimonial.stars} out of 5 stars`}>
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" aria-hidden="true" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#0d9488]/20 mb-3" aria-hidden="true" />

              {/* Quote */}
              <p className="text-[#1e293b] leading-relaxed flex-1 mb-4 italic">
                "{testimonial.quote}"
              </p>

              {/* Metric */}
              <div className="bg-[#0d9488]/5 rounded-xl p-3 mb-4">
                <div className="text-2xl font-bold text-[#0d9488]">{testimonial.metric}</div>
                <div className="text-xs text-[#64748b] capitalize">{testimonial.metricLabel}</div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarBg} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                  aria-hidden="true"
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-[#1e293b] text-sm">{testimonial.name}</div>
                  <div className="text-xs text-[#64748b]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="fade-in-up delay-400 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: '50+', label: 'Clients Automated' },
            { number: '10,000+', label: 'Hours Saved' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '30 days', label: 'Average ROI' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm">
              <div className="text-2xl font-bold text-[#1e3a5f]">{stat.number}</div>
              <div className="text-sm text-[#64748b] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
