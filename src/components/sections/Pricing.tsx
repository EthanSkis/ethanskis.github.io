import { CheckCircle, ArrowRight, Shield } from 'lucide-react';
import Button from '../ui/Button';
import { Container } from '../layout/Container';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const plans = [
  {
    name: 'Starter',
    setupPrice: '$1,497',
    monthlyPrice: '$497',
    description: 'Perfect for solo coaches just getting started with automation.',
    features: [
      '2 core automations',
      'Email & calendar integration',
      'Lead follow-up sequence',
      '30-day support',
      'Setup in 48 hours',
    ],
    cta: 'Book a Call',
    highlight: false,
  },
  {
    name: 'Growth',
    setupPrice: '$2,997',
    monthlyPrice: '$997',
    description: 'Our most popular plan for established coaches ready to scale.',
    features: [
      '5 core automations',
      'CRM integration',
      'AI-powered features',
      'Priority support',
      'Monthly optimization',
      'Custom intake forms',
      'Analytics dashboard',
    ],
    cta: 'Book a Call',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Scale',
    setupPrice: 'Custom',
    monthlyPrice: 'Custom',
    description: 'Enterprise-grade automation for high-volume businesses.',
    features: [
      'Unlimited automations',
      'Advanced AI implementation',
      'Dedicated account manager',
      'Custom integrations',
      'White-glove onboarding',
      'SLA guarantee',
    ],
    cta: 'Contact Us',
    highlight: false,
  },
];

export function Pricing() {
  const sectionRef = useScrollAnimation();

  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="pricing"
      className="py-20 lg:py-28 bg-white"
      ref={sectionRef as React.RefObject<HTMLElement>}
      aria-label="Pricing"
    >
      <Container>
        <div className="text-center mb-12 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-[#f59e0b] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            Investment That{' '}
            <span className="text-[#0d9488]">Pays for Itself</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Most clients recoup their investment within 30 days through time savings alone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`fade-in-up delay-${(index + 1) * 100} relative rounded-2xl flex flex-col ${
                plan.highlight
                  ? 'bg-[#1e3a5f] text-white shadow-2xl ring-2 ring-[#0d9488] scale-105'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#0d9488] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <h3
                  className={`text-xl font-bold mb-1 ${
                    plan.highlight ? 'text-white' : 'text-[#1e293b]'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.highlight ? 'text-white/70' : 'text-[#64748b]'
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-bold ${
                        plan.highlight ? 'text-white' : 'text-[#1e293b]'
                      }`}
                    >
                      {plan.setupPrice}
                    </span>
                    {plan.setupPrice !== 'Custom' && (
                      <span
                        className={`text-sm ${plan.highlight ? 'text-white/60' : 'text-[#64748b]'}`}
                      >
                        setup
                      </span>
                    )}
                  </div>
                  {plan.monthlyPrice !== 'Custom' && (
                    <div
                      className={`text-sm mt-1 ${
                        plan.highlight ? 'text-white/70' : 'text-[#64748b]'
                      }`}
                    >
                      then {plan.monthlyPrice}/month
                    </div>
                  )}
                  {plan.monthlyPrice === 'Custom' && (
                    <div
                      className={`text-sm mt-1 ${
                        plan.highlight ? 'text-white/70' : 'text-[#64748b]'
                      }`}
                    >
                      Tailored to your needs
                    </div>
                  )}
                </div>

                <ul className="space-y-3 flex-1 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <CheckCircle
                        className={`w-4 h-4 flex-shrink-0 ${
                          plan.highlight ? 'text-[#0d9488]' : 'text-[#0d9488]'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.highlight ? 'text-white/90' : 'text-[#64748b]'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlight ? 'primary' : 'outline'}
                  className="w-full group"
                  onClick={plan.cta === 'Contact Us' ? scrollToContact : scrollToCTA}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="fade-in-up delay-400 flex items-center justify-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4 max-w-2xl mx-auto">
          <Shield className="w-6 h-6 text-green-600 flex-shrink-0" aria-hidden="true" />
          <p className="text-sm text-green-800 font-medium">
            <span className="font-bold">30-Day Money-Back Guarantee</span> — if we don't save you
            at least 5 hours/week, you get a full refund.
          </p>
        </div>
      </Container>
    </section>
  );
}
