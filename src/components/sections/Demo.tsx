import { Check } from 'lucide-react';
import { Container } from '../layout/Container';

const VIDEO_URL = ''; // Paste your Loom or YouTube embed URL here

const highlights = [
  'Watch a lead go from email to booked call in under 3 minutes—automatically',
  'See how a new client gets onboarded without a single manual step',
  'Discover how admin tasks disappear from your calendar entirely',
];

export function Demo() {
  return (
    <section
      id="demo"
      className="py-24 lg:py-32 bg-white"
      aria-label="Demo"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-14 fade-in-up">
          <p className="text-[15px] font-medium text-[#6e6e73] mb-4">See it live</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f]">
            Watch three minutes
            <br />
            <span className="text-[#6e6e73]">that change how you work.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center fade-in-up">
          {/* Video */}
          <div className="lg:col-span-3">
            <div
              className="relative bg-[#1d1d1f] rounded-2xl overflow-hidden border border-[#3a3a3c]"
              style={{ aspectRatio: '16/9' }}
            >
              {VIDEO_URL ? (
                <iframe
                  src={VIDEO_URL}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Demo video"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                  <div className="flex flex-col items-center gap-2 opacity-40">
                    {['Lead received', 'AI responds (8s)', 'Meeting booked', 'CRM updated'].map((s, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="text-[12px] text-white bg-white/10 px-3 py-1.5 rounded-lg">{s}</div>
                        {i < 3 && <div className="w-px h-3 bg-white/20" aria-hidden="true" />}
                      </div>
                    ))}
                  </div>
                  <p className="text-[13px] text-white/40">3-minute walkthrough — coming soon</p>
                </div>
              )}
            </div>
          </div>

          {/* Highlights */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-[15px] font-semibold text-[#1d1d1f] mb-5">In this demo:</p>
            {highlights.map((h, i) => (
              <div
                key={i}
                className={`fade-in-up delay-${(i + 1) * 100} flex items-start gap-3`}
              >
                <span className="w-5 h-5 rounded-full bg-[#1d1d1f] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" aria-hidden="true" />
                </span>
                <p className="text-[15px] text-[#1d1d1f] leading-snug">{h}</p>
              </div>
            ))}

            <div className="pt-4 mt-4 border-t border-[#f5f5f7]">
              <p className="text-[13px] text-[#86868b]">
                Most clients go from first call to live automations in under 72 hours.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
