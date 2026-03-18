import { Clock, UserX, TrendingDown } from 'lucide-react';
import { Container } from '../layout/Container';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const painPoints = [
  {
    icon: Clock,
    title: 'Drowning in Admin Work',
    description: 'Spending 15+ hours/week on admin instead of clients',
  },
  {
    icon: UserX,
    title: 'Leads Going Cold',
    description: 'Losing leads because follow-up takes too long',
  },
  {
    icon: TrendingDown,
    title: 'Stuck at a Revenue Ceiling',
    description: "Can't scale because you're maxed out on time",
  },
];

export function Problem() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="problem"
      className="py-20 lg:py-28 bg-[#f8fafc]"
      ref={sectionRef as React.RefObject<HTMLElement>}
      aria-label="Problem statement"
    >
      <Container>
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            Are You the Bottleneck in{' '}
            <span className="text-[#0d9488]">Your Own Business?</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Most coaches and consultants reach a point where growth means hiring a team—or
            burning out. There's a better way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className={`fade-in-up delay-${(index + 1) * 100} bg-white rounded-2xl p-6 border border-red-100 shadow-sm`}
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-red-500" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-[#1e293b] text-lg mb-2">{point.title}</h3>
                <p className="text-[#64748b]">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stat callout */}
        <div className="fade-in-up delay-400 bg-gradient-to-r from-[#1e3a5f] to-[#0d9488] rounded-2xl p-8 text-center text-white">
          <p className="text-2xl sm:text-3xl font-bold mb-2">
            The average coach wastes{' '}
            <span className="text-[#f59e0b]">20 hours/week</span> on tasks
            that could be automated
          </p>
          <p className="text-white/70 text-lg">
            That's 1,040 hours per year—or 43 full days—lost to repetitive work.
          </p>
        </div>
      </Container>
    </section>
  );
}
