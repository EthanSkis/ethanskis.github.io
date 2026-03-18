import { useState } from 'react';
import { Play, Check } from 'lucide-react';
import { Container } from '../layout/Container';

const highlights = [
  'Watch a lead go from email to booked call in under 3 minutes—automatically',
  'See how a new client gets onboarded without a single manual step',
  'Discover how admin tasks disappear from your calendar entirely',
];

export function Demo() {
  const [isPlaying, setIsPlaying] = useState(false);

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
              className="relative bg-[#1d1d1f] rounded-2xl overflow-hidden cursor-pointer group border border-[#3a3a3c]"
              style={{ aspectRatio: '16/9' }}
              onClick={() => setIsPlaying(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setIsPlaying(true)}
              aria-label="Play demo video"
            >
              {!isPlaying ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                  {/* Fake workflow preview */}
                  <div className="flex flex-col items-center gap-2 opacity-40">
                    {['Lead received', 'AI responds (8s)', 'Meeting booked', 'CRM updated'].map((s, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="text-[12px] text-white bg-white/10 px-3 py-1.5 rounded-lg">{s}</div>
                        {i < 3 && <div className="w-px h-3 bg-white/20" aria-hidden="true" />}
                      </div>
                    ))}
                  </div>
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                    <Play className="w-6 h-6 text-white ml-1" aria-hidden="true" />
                  </div>
                  <p className="text-[13px] text-white/40">3-minute walkthrough</p>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white/60 text-[14px] text-center px-8">
                    Replace with your Loom or YouTube embed
                  </p>
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
