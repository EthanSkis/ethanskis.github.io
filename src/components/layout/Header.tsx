import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';
import { Container } from './Container';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Results', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
        isScrolled
          ? 'bg-white/80 backdrop-blur-2xl border-b border-[#d2d2d7]/60'
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <a
            href="#"
            className="font-semibold text-[17px] tracking-tight text-[#1d1d1f]"
            onClick={(e) => { e.preventDefault(); scrollTo('#'); }}
          >
            FlowState
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="px-3 py-1.5 text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200 rounded-full hover:bg-[#f5f5f7]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => scrollTo('#contact')}
              className="text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors px-3 py-1.5"
            >
              Contact
            </button>
            <Button size="sm" onClick={() => scrollTo('#booking')}>
              Book free audit
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-[#f5f5f7] transition-colors focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen
              ? <X className="w-5 h-5 text-[#1d1d1f]" />
              : <Menu className="w-5 h-5 text-[#1d1d1f]" />
            }
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden bg-white/95 backdrop-blur-2xl border-t border-[#d2d2d7]/60 overflow-hidden transition-all duration-300',
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        )}
      >
        <Container>
          <nav className="py-4 flex flex-col" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="py-3 text-[17px] font-medium text-[#1d1d1f] border-b border-[#f5f5f7] last:border-0 hover:text-[#6e6e73] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Button variant="secondary" className="w-full" onClick={() => scrollTo('#contact')}>
                Contact us
              </Button>
              <Button className="w-full" onClick={() => scrollTo('#booking')}>
                Book free audit
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
