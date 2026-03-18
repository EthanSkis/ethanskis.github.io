import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { Container } from '../layout/Container';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    duration: '15 min',
    description:
      'We map your workflow end-to-end and pinpoint exactly which tasks are costing you the most time.',
  },
  {
    number: '02',
    title: 'Build & Test',
    duration: '48–72 hrs',
    description:
      'We build your custom automations using Make.com, Zapier, and AI—then test every edge case before launch.',
  },
  {
    number: '03',
    title: 'Deploy & Train',
    duration: '1 hour',
    description:
      'We go live with your tools and walk you through the system. If anything needs adjusting, we handle it.',
  },
  {
    number: '04',
    title: 'Optimize Monthly',
    duration: 'Ongoing',
    description:
      'Monthly check-ins to expand, refine, and improve—your automations grow as your business does.',
  },
];

export function HowItWorks() {

  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 bg-[#f5f5f7]"
      aria-label="How it works"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16 fade-in-up">
          <p className="text-[15px] font-medium text-[#6e6e73] mb-4">The process</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-5">
            Live in 4 steps.
            <br />
            <span className="text-[#6e6e73]">As fast as 72 hours.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`fade-in-up delay-${(index + 1) * 100} bg-white rounded-2xl p-6 border border-[#d2d2d7]`}
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-bold tracking-tight text-[#1d1d1f]">{step.number}</span>
                <span className="text-[13px] text-[#86868b] font-medium bg-[#f5f5f7] px-2.5 py-1 rounded-full">
                  {step.duration}
                </span>
              </div>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2">{step.title}</h3>
              <p className="text-[14px] text-[#6e6e73] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="fade-in-up delay-400 text-center">
          <Button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="group"
          >
            Start your discovery call
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
