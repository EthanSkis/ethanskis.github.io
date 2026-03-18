import { Play, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Container } from '../layout/Container';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const highlights = [
  'Watch leads get followed up automatically',
  'See how new clients are onboarded hands-free',
  'Discover how admin tasks disappear',
];

export function Demo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="demo"
      className="py-20 lg:py-28 bg-white"
      ref={sectionRef as React.RefObject<HTMLElement>}
      aria-label="Demo"
    >
      <Container>
        <div className="text-center mb-12 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-[#0d9488] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            See It Live
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            See It{' '}
            <span className="text-[#0d9488]">In Action</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            A quick walkthrough of how we automate the most time-consuming parts of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center fade-in-up">
          {/* Video placeholder */}
          <div className="lg:col-span-3">
            <div
              className="relative bg-gradient-to-br from-[#1e3a5f] to-[#0d9488] rounded-2xl overflow-hidden cursor-pointer group"
              style={{ aspectRatio: '16/9' }}
              onClick={() => setIsPlaying(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setIsPlaying(true)}
              aria-label="Play demo video"
            >
              {!isPlaying ? (
                <>
                  {/* Thumbnail content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      {/* Animated workflow graphic */}
                      <div className="flex flex-col items-center gap-3 mb-6 opacity-50">
                        {['📧 Lead arrives', '🤖 AI responds', '📅 Meeting booked', '✅ Client onboarded'].map(
                          (step, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="bg-white/20 text-white text-sm px-4 py-2 rounded-lg">
                                {step}
                              </div>
                              {i < 3 && (
                                <div className="w-0.5 h-3 bg-white/20 absolute translate-y-8" aria-hidden="true" />
                              )}
                            </div>
                          )
                        )}
                      </div>
                      {/* Play button */}
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm border border-white/30">
                        <Play className="w-7 h-7 text-white ml-1" aria-hidden="true" />
                      </div>
                      <p className="text-white/70 text-sm mt-3">Watch 3-minute demo</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <p className="text-white text-center p-8">
                    <span className="block text-lg font-semibold mb-2">Video Demo</span>
                    <span className="text-white/60 text-sm">
                      Replace this with your Loom embed or YouTube video
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Highlights */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-bold text-[#1e293b] mb-6">In this demo, you'll see:</h3>
            {highlights.map((highlight, i) => (
              <div
                key={i}
                className={`fade-in-up delay-${(i + 1) * 100} flex items-start gap-3 bg-[#f8fafc] rounded-xl p-4 border border-gray-100`}
              >
                <CheckCircle className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[#1e293b] font-medium">{highlight}</p>
              </div>
            ))}

            <div className="mt-6 bg-gradient-to-br from-[#0d9488]/10 to-teal-50 rounded-xl p-5 border border-teal-100">
              <p className="text-[#1e293b] font-semibold mb-1">Average time to see results?</p>
              <p className="text-[#0d9488] text-2xl font-bold">Less than 48 hours</p>
              <p className="text-[#64748b] text-sm mt-1">From first call to live automation</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
