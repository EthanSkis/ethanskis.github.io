import { ArrowRight, Play, Zap, TrendingUp, Bot } from 'lucide-react';
import Button from '../ui/Button';
import { Container } from '../layout/Container';

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f9ff] via-white to-[#f0fdf4] -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0d9488]/5 to-transparent -z-10" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0d9488]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#1e3a5f]/5 rounded-full blur-3xl -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Left: Text content (60%) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#0d9488]/10 text-[#0d9488] px-4 py-2 rounded-full text-sm font-semibold">
              <Zap className="w-4 h-4" />
              AI-Powered Business Automation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e293b] leading-tight">
              Reclaim{' '}
              <span className="text-[#0d9488] relative">
                10+ Hours
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9.5C50 4 100 2 150 4.5C200 7 250 6 298 3"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              Every Week with AI-Powered Business Automation
            </h1>

            <p className="text-lg text-[#64748b] leading-relaxed max-w-xl">
              We help coaches and consultants automate lead follow-up, client onboarding, and
              repetitive admin tasks—so you can focus on what you do best.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: '⚡', text: 'Setup in 48 hours' },
                { icon: '💰', text: 'ROI in 30 days' },
                { icon: '🤖', text: 'No coding required' },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-[#1e293b] shadow-sm"
                >
                  <span>{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                onClick={() => scrollToSection('cta')}
                className="group"
              >
                Book Your Free Workflow Audit
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('demo')}
                className="group"
              >
                <Play className="mr-2 w-5 h-5 text-[#0d9488]" />
                See How It Works
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-xs font-bold"
                    aria-hidden="true"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#64748b]">
                <span className="font-semibold text-[#1e293b]">50+ coaches</span> already
                automating their business
              </p>
            </div>
          </div>

          {/* Right: Visual (40%) */}
          <div className="lg:col-span-2 relative">
            <div className="relative">
              {/* Main automation visual */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-[#1e293b]">Automation Dashboard</span>
                  <span className="flex items-center gap-1.5 text-xs text-green-600 font-medium bg-green-50 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Automation flow */}
                <div className="space-y-3">
                  {[
                    { icon: '📧', label: 'Lead Email Received', status: 'done', color: 'text-green-600 bg-green-50' },
                    { icon: '🤖', label: 'AI Response Sent (2 min)', status: 'done', color: 'text-green-600 bg-green-50' },
                    { icon: '📅', label: 'Call Booking Link Sent', status: 'done', color: 'text-green-600 bg-green-50' },
                    { icon: '✅', label: 'Client Onboarding Started', status: 'active', color: 'text-[#0d9488] bg-teal-50' },
                    { icon: '📊', label: 'CRM Updated Automatically', status: 'pending', color: 'text-[#64748b] bg-gray-50' },
                  ].map((step, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${step.color}`}>
                      <span className="text-lg">{step.icon}</span>
                      <span className="text-sm font-medium flex-1">{step.label}</span>
                      {step.status === 'active' && (
                        <span className="w-2 h-2 bg-[#0d9488] rounded-full animate-pulse" />
                      )}
                      {step.status === 'done' && (
                        <span className="text-green-600">✓</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-[#64748b]">Time saved today</span>
                  <span className="text-lg font-bold text-[#0d9488]">3.5 hours</span>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#f59e0b]" />
                <div>
                  <div className="text-xs text-[#64748b]">Booking rate</div>
                  <div className="text-sm font-bold text-[#1e293b]">+40%</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100 flex items-center gap-2">
                <Bot className="w-5 h-5 text-[#0d9488]" />
                <div>
                  <div className="text-xs text-[#64748b]">Automations running</div>
                  <div className="text-sm font-bold text-[#1e293b]">24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
