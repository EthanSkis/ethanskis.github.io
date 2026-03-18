import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { Container } from '../layout/Container';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Hero() {
  const sectionRef = useScrollAnimation();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="pt-32 pb-24 lg:pt-40 lg:pb-32 text-center bg-white"
      aria-label="Hero"
    >
      <Container size="md">
        {/* Eyebrow */}
        <p className="text-[15px] font-medium text-[#6e6e73] mb-6 fade-in-up">
          AI Automation for Coaches &amp; Consultants
        </p>

        {/* Headline */}
        <h1 className="fade-in-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05] mb-6">
          Reclaim 10+ hours
          <br />
          <span className="text-[#6e6e73]">every single week.</span>
        </h1>

        {/* Subheadline */}
        <p className="fade-in-up delay-200 text-xl text-[#6e6e73] leading-relaxed max-w-xl mx-auto mb-10">
          We build custom AI automations for coaches and consultants—so lead follow-up,
          client onboarding, and admin work happen without you.
        </p>

        {/* CTAs */}
        <div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Button size="lg" onClick={() => scrollTo('booking')} className="group min-w-[200px]">
            Book your free audit
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button variant="secondary" size="lg" onClick={() => scrollTo('demo')} className="min-w-[200px]">
            See how it works
          </Button>
        </div>

        {/* Trust row */}
        <div className="fade-in-up delay-400 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[13px] text-[#86868b]">
          <span>Setup in 48 hours</span>
          <span className="hidden sm:inline text-[#d2d2d7]">|</span>
          <span>ROI in 30 days</span>
          <span className="hidden sm:inline text-[#d2d2d7]">|</span>
          <span>No coding required</span>
          <span className="hidden sm:inline text-[#d2d2d7]">|</span>
          <span>30-day money-back guarantee</span>
        </div>
      </Container>

      {/* Dashboard visual */}
      <div className="mt-16 fade-in-up delay-400">
        <Container size="lg">
          <div className="relative bg-[#f5f5f7] rounded-3xl p-8 border border-[#d2d2d7] overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-[#d2d2d7]" />
              <span className="w-3 h-3 rounded-full bg-[#d2d2d7]" />
              <span className="w-3 h-3 rounded-full bg-[#d2d2d7]" />
              <span className="ml-4 text-[13px] text-[#86868b] font-medium">Automation Dashboard — Live</span>
              <span className="ml-auto flex items-center gap-1.5 text-[12px] text-[#34c759] font-medium">
                <span className="w-1.5 h-1.5 bg-[#34c759] rounded-full animate-pulse" />
                Running
              </span>
            </div>

            {/* Workflow steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {[
                { step: '01', label: 'Lead email received', sub: 'Gmail → triggered', done: true },
                { step: '02', label: 'AI drafts response', sub: 'GPT-4 → 8 seconds', done: true },
                { step: '03', label: 'Reply sent instantly', sub: 'Sent → 2:14 PM', done: true },
                { step: '04', label: 'Booking link opened', sub: 'Calendly → click', done: true },
                { step: '05', label: 'CRM updated', sub: 'HubSpot → synced', done: false, active: true },
              ].map((item) => (
                <div
                  key={item.step}
                  className={`rounded-xl p-4 border ${
                    item.active
                      ? 'bg-white border-[#1d1d1f] shadow-sm'
                      : item.done
                      ? 'bg-white border-[#d2d2d7]'
                      : 'bg-[#f5f5f7] border-[#d2d2d7] opacity-50'
                  }`}
                >
                  <div className={`text-[11px] font-semibold mb-1 ${item.active ? 'text-[#1d1d1f]' : 'text-[#86868b]'}`}>
                    Step {item.step}
                  </div>
                  <div className="text-[13px] font-medium text-[#1d1d1f] mb-1">{item.label}</div>
                  <div className="text-[11px] text-[#86868b]">{item.sub}</div>
                  {item.done && !item.active && (
                    <div className="mt-2 text-[11px] font-medium text-[#34c759]">Complete</div>
                  )}
                  {item.active && (
                    <div className="mt-2 text-[11px] font-medium text-[#1d1d1f] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-[#1d1d1f] rounded-full animate-pulse" />
                      In progress
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { label: 'Time saved today', value: '3.5 hrs' },
                { label: 'Leads responded to', value: '12' },
                { label: 'Automations running', value: '5 active' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-3 border border-[#d2d2d7] text-center">
                  <div className="text-[17px] font-semibold text-[#1d1d1f]">{stat.value}</div>
                  <div className="text-[11px] text-[#86868b] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
