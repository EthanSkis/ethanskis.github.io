import { ArrowRight, Check } from 'lucide-react';
import Button from '../ui/Button';
import { Container } from '../layout/Container';

const plans = [
  {
    name: 'Starter',
    setupPrice: '$1,497',
    monthlyPrice: '$497',
    roiNote: 'Saves ~6 hrs/week. At $150/hr, that\'s $3,900/mo in reclaimed time.',
    description: 'Two core automations to eliminate your biggest time drains immediately.',
    features: [
      '2 custom automations',
      'Email & calendar integration',
      'Lead follow-up sequence',
      '30-day support',
      'Setup in 48 hours',
    ],
    cta: 'Book a call',
    highlight: false,
  },
  {
    name: 'Growth',
    setupPrice: '$2,997',
    monthlyPrice: '$997',
    roiNote: 'Saves ~12 hrs/week. At $200/hr, that\'s $9,600/mo in reclaimed time.',
    description: 'Five automations covering your full client pipeline, from lead to renewal.',
    features: [
      '5 custom automations',
      'CRM & tool integration',
      'AI-powered responses',
      'Priority support',
      'Monthly optimization call',
      'Analytics dashboard',
    ],
    cta: 'Book a call',
    highlight: true,
    badge: 'Most popular',
  },
  {
    name: 'Scale',
    setupPrice: 'Custom',
    monthlyPrice: null,
    roiNote: 'Full-stack automation. Priced for high-volume businesses.',
    description: 'Unlimited automations with a dedicated account manager and custom integrations.',
    features: [
      'Unlimited automations',
      'Advanced AI implementation',
      'Dedicated account manager',
      'Custom integrations',
      'White-glove onboarding',
      'SLA guarantee',
    ],
    cta: 'Contact us',
    highlight: false,
  },
];

export function Pricing() {

  return (
    <section
      id="pricing"
      className="py-24 lg:py-32 bg-white"
      aria-label="Pricing"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16 fade-in-up">
          <p className="text-[15px] font-medium text-[#6e6e73] mb-4">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-5">
            Pays for itself
            <br />
            <span className="text-[#6e6e73]">in the first month.</span>
          </h2>
          <p className="text-xl text-[#6e6e73] leading-relaxed">
            Every plan includes a 30-day money-back guarantee if we don't save you at least 5 hours per week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`fade-in-up delay-${(index + 1) * 100} relative rounded-2xl flex flex-col overflow-hidden ${
                plan.highlight
                  ? 'bg-[#1d1d1f] text-white ring-1 ring-[#1d1d1f]'
                  : 'bg-[#f5f5f7] border border-[#d2d2d7]'
              }`}
            >
              {plan.badge && (
                <div className="px-7 pt-5 pb-0">
                  <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                <h3 className={`text-[22px] font-bold tracking-tight mb-1 ${plan.highlight ? 'text-white' : 'text-[#1d1d1f]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-[14px] mb-6 leading-relaxed ${plan.highlight ? 'text-white/60' : 'text-[#6e6e73]'}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-2">
                  <span className={`text-4xl font-bold tracking-tight ${plan.highlight ? 'text-white' : 'text-[#1d1d1f]'}`}>
                    {plan.setupPrice}
                  </span>
                  {plan.monthlyPrice && (
                    <span className={`text-[14px] ml-1 ${plan.highlight ? 'text-white/50' : 'text-[#86868b]'}`}>
                      setup
                    </span>
                  )}
                </div>
                {plan.monthlyPrice && (
                  <p className={`text-[14px] mb-2 ${plan.highlight ? 'text-white/60' : 'text-[#6e6e73]'}`}>
                    then {plan.monthlyPrice}/month
                  </p>
                )}
                {/* ROI note */}
                <p className={`text-[12px] mb-6 italic ${plan.highlight ? 'text-white/50' : 'text-[#86868b]'}`}>
                  {plan.roiNote}
                </p>

                <ul className="space-y-3 flex-1 mb-7">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <Check
                        className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-white/70' : 'text-[#1d1d1f]'}`}
                      />
                      <span className={`text-[14px] ${plan.highlight ? 'text-white/80' : 'text-[#1d1d1f]'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlight ? 'secondary' : 'primary'}
                  className={`w-full group ${plan.highlight ? 'bg-white text-[#1d1d1f] hover:bg-white/90' : ''}`}
                  onClick={() =>
                    document
                      .getElementById(plan.cta === 'Contact us' ? 'contact' : 'booking')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="fade-in-up delay-400 text-center">
          <p className="text-[14px] text-[#86868b]">
            30-day money-back guarantee — no questions asked if you don't save at least 5 hours/week.
          </p>
        </div>
      </Container>
    </section>
  );
}
