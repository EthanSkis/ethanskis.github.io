import { Zap, Mail, Linkedin, Twitter } from 'lucide-react';
import { Container } from './Container';

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Case Studies', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1e3a5f] text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="flex items-center gap-2 font-bold text-xl mb-4 hover:opacity-80 transition-opacity w-fit"
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
            <p className="text-white/70 leading-relaxed max-w-sm mb-6">
              We help coaches, consultants, and course creators automate their business operations
              so they can focus on what matters most—their clients.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0d9488] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0d9488] transition-colors duration-200"
                aria-label="Twitter/X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@flowstateai.com"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0d9488] transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-[#0d9488] transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@flowstateai.com"
                  className="text-white/70 hover:text-[#0d9488] transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  hello@flowstateai.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} FlowState AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/50 hover:text-white/80 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white/80 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
