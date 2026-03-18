import { Container } from './Container';

const links = {
  Product: [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Results', href: '#testimonials' },
  ],
  Company: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

export function Footer() {
  const scrollTo = (href: string) => {
    if (href === '#') return;
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <p className="font-semibold text-[17px] tracking-tight text-[#1d1d1f] mb-3">
              FlowState
            </p>
            <p className="text-[13px] text-[#6e6e73] leading-relaxed max-w-xs">
              AI automation for coaches and consultants. Reclaim your time, serve more clients, and grow without burning out.
            </p>
            <p className="mt-4 text-[13px] text-[#6e6e73]">
              <a href="mailto:hello@flowstateai.com" className="hover:text-[#1d1d1f] transition-colors">
                hello@flowstateai.com
              </a>
            </p>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">
                {group}
              </p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                      className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-[#d2d2d7] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-[#86868b]">
            Copyright © {new Date().getFullYear()} FlowState AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
              X (Twitter)
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
