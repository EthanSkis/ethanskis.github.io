import { Container } from '../layout/Container';
import { Accordion } from '../ui/Accordion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const faqs = [
  {
    question: 'How long does setup take?',
    answer:
      'Most automations are built and deployed within 48-72 hours. We start with a discovery call to map your workflow, then our team gets to work immediately.',
  },
  {
    question: 'Do I need technical skills?',
    answer:
      "Not at all. We handle everything from setup to testing to deployment. You just use the system. If anything ever needs adjusting, we're one message away.",
  },
  {
    question: 'What tools do you work with?',
    answer:
      'We integrate with 500+ apps including Gmail, Outlook, Calendly, HubSpot, Salesforce, Shopify, Stripe, Slack, Notion, and many more. If you use a tool, we can likely connect it.',
  },
  {
    question: 'What if I need changes later?',
    answer:
      'Monthly plans include optimization and adjustments at no extra charge. Your business evolves, and your automations should too. We do monthly check-ins to review and improve everything.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. We use enterprise-grade security protocols, encrypted connections, and never store your data longer than necessary. We follow industry best practices and comply with GDPR and CCPA.',
  },
  {
    question: "What's the ROI?",
    answer:
      'Most clients see ROI within 30 days through time savings and increased client capacity. If you save 10 hours/week at your effective hourly rate, the math speaks for itself—plus the revenue from serving more clients.',
  },
  {
    question: "What if it doesn't work for my business?",
    answer:
      "We offer a 30-day money-back guarantee. If we don't save you at least 5 hours per week within the first 30 days, we'll refund your setup fee in full. No questions asked.",
  },
];

export function FAQ() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-[#f8fafc]"
      ref={sectionRef as React.RefObject<HTMLElement>}
      aria-label="Frequently asked questions"
    >
      <Container size="md">
        <div className="text-center mb-12 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-[#1e3a5f]/10 text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            Common{' '}
            <span className="text-[#0d9488]">Questions</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="fade-in-up delay-100">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
