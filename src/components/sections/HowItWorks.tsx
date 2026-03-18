import { PhoneCall, Wrench, Rocket, BarChart3 } from 'lucide-react';
import { Container } from '../layout/Container';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Discovery Call',
    duration: '15 min',
    description:
      'We map your current workflow and identify automation opportunities with the highest impact.',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Build & Test',
    duration: '48–72 hours',
    description:
      'We build your custom automation using Make.com, Zapier, and AI tools. Rigorously tested before launch.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Deploy & Train',
    duration: '1 hour',
    description:
      'We integrate with your existing tools and walk you through how everything works. Simple and seamless.',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Optimize & Support',
    duration: 'Ongoing',
    description:
      'Monthly check-ins to improve and expand your automations as your business grows.',
  },
];

export function HowItWorks() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 bg-[#f8fafc]"
      ref={sectionRef as React.RefObject<HTMLElement>}
      aria-label="How it works"
    >
      <Container>
        <div className="text-center mb-12 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-[#1e3a5f]/10 text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            From Chaos to Automated in{' '}
            <span className="text-[#0d9488]">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            No long contracts. No complicated setup. Just results.
          </p>
        </div>

        <div className="relative">
          {/* Connector line for desktop */}
          <div
            className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#0d9488]/20 via-[#0d9488] to-[#0d9488]/20"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`fade-in-up delay-${(index + 1) * 100} relative flex flex-col items-center text-center`}
                >
                  {/* Number + icon circle */}
                  <div className="relative mb-5">
                    <div className="w-16 h-16 bg-[#0d9488] rounded-2xl flex items-center justify-center shadow-lg shadow-teal-200 z-10 relative">
                      <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#f59e0b] rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1 bg-white border border-gray-200 text-[#64748b] text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {step.duration}
                  </div>

                  <h3 className="text-lg font-bold text-[#1e293b] mb-2">{step.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
