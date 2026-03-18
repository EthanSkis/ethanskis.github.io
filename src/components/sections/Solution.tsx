import { Mail, Users, Calendar, ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { Card, CardContent } from '../ui/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const services = [
  {
    icon: Mail,
    title: 'Lead Nurture Automation',
    description:
      "Never let a lead go cold. Automated follow-up sequences that book appointments while you sleep.",
    features: ['Instant lead response', 'Multi-touch sequences', 'Personalized outreach'],
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Users,
    title: 'Client Onboarding System',
    description:
      'New clients get white-glove treatment automatically. Welcome sequences, document collection, and task creation—all hands-off.',
    features: ['Automated welcome flow', 'Document collection', 'Task & project setup'],
    color: 'bg-teal-50 text-[#0d9488]',
  },
  {
    icon: Calendar,
    title: 'Admin Task Automation',
    description:
      'Calendar management, email triage, content distribution. Reclaim 10+ hours every week.',
    features: ['Calendar management', 'Email triage & routing', 'Content distribution'],
    color: 'bg-amber-50 text-[#f59e0b]',
  },
];

export function Solution() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-white"
      ref={sectionRef as React.RefObject<HTMLElement>}
      aria-label="Our services"
    >
      <Container>
        <div className="text-center mb-12 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-[#0d9488] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            The Solution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            Your AI-Powered{' '}
            <span className="text-[#0d9488]">Business Operating System</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            We build custom automation workflows that run 24/7—so you don't have to
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                hover
                className={`fade-in-up delay-${(index + 1) * 100} flex flex-col`}
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-5`}>
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#1e293b] mb-3">{service.title}</h3>
                <CardContent className="flex-1 mb-4">{service.description}</CardContent>
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#64748b]">
                      <span className="w-1.5 h-1.5 bg-[#0d9488] rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="flex items-center gap-1 text-[#0d9488] font-semibold text-sm hover:gap-2 transition-all duration-200 group mt-auto w-fit"
                  onClick={() => {
                    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
