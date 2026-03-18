import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';
import { Container } from './Container';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Case Studies', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.slice(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_3px_rgba(0,0,0,0.1)]'
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 font-bold text-xl text-[#1e3a5f] hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-8 h-8 bg-[#0d9488] rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span>FlowState</span>
            <span className="text-[#0d9488]">AI</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 hover:text-[#0d9488]',
                  activeSection === link.href.slice(1)
                    ? 'text-[#0d9488]'
                    : isScrolled
                    ? 'text-[#1e293b]'
                    : 'text-[#1e293b]'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>
              <Button variant="outline" size="sm">Contact</Button>
            </a>
            <a href="#cta" onClick={(e) => { e.preventDefault(); scrollToSection('#cta'); }}>
              <Button size="sm">Book Free Audit</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0d9488] min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1e293b]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1e293b]" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300',
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        )}
      >
        <Container>
          <nav className="py-4 flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={cn(
                  'px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-gray-50 hover:text-[#0d9488] min-h-[44px] flex items-center',
                  activeSection === link.href.slice(1)
                    ? 'text-[#0d9488] bg-teal-50'
                    : 'text-[#1e293b]'
                )}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
              <Button variant="outline" className="w-full" onClick={() => scrollToSection('#contact')}>
                Contact Us
              </Button>
              <Button className="w-full" onClick={() => scrollToSection('#cta')}>
                Book Free Audit
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
