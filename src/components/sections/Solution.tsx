import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { Container } from '../layout/Container';

const services = [
  {
    number: '01',
    title: 'Lead Nurture Automation',
    description:
      'Every lead gets a personalized reply within minutes—not hours. Automated sequences handle follow-up, qualification, and booking so no opportunity goes cold.',
    features: ['Instant AI-powered response', 'Multi-touch follow-up sequences', 'Automatic Calendly booking'],
  },
  {
    number: '02',
    title: 'Client Onboarding System',
    description:
      'New clients receive a seamless, professional onboarding experience without you lifting a finger. Welcome emails, document collection, and project setup run on autopilot.',
    features: ['Welcome email sequence', 'Automated document collection', 'CRM + project tool sync'],
  },
  {
    number: '03',
    title: 'Admin Task Automation',
    description:
      'Calendar scheduling, email triage, invoice follow-up, content distribution—the repetitive work that steals your mornings, eliminated.',
    features: ['Smart email routing', 'Invoice & payment tracking', 'Social content distribution'],
  },
];

export function Solution() {

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-white"
      aria-label="Services"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16 fade-in-up">
          <p className="text-[15px] font-medium text-[#6e6e73] mb-4">What we build</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-5">
            Your business, running itself.
          </h2>
          <p className="text-xl text-[#6e6e73] leading-relaxed">
            Three core systems that eliminate the work between you and your clients.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`fade-in-up delay-${(index + 1) * 100} bg-[#f5f5f7] rounded-2xl p-7 border border-[#d2d2d7] grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start hover:border-[#86868b] transition-colors duration-300`}
            >
              <div className="lg:col-span-2">
                <span className="text-[13px] font-semibold text-[#86868b] mb-2 block">{service.number}</span>
                <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f] mb-3">{service.title}</h3>
                <p className="text-[15px] text-[#6e6e73] leading-relaxed">{service.description}</p>
              </div>
              <div className="lg:col-span-3">
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-[15px] text-[#1d1d1f]">
                      <span className="w-5 h-5 rounded-full bg-[#1d1d1f] flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="fade-in-up delay-400 text-center">
          <Button
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="group"
          >
            See how we build it
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
