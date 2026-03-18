import { Container } from '../layout/Container';
import { Accordion } from '../ui/Accordion';

const faqs = [
  {
    question: 'How long does setup take?',
    answer:
      'Most automations are built and live within 48–72 hours. We start with a 15-minute discovery call, then our team builds and tests everything before deployment.',
  },
  {
    question: 'Do I need any technical skills?',
    answer:
      'None at all. We handle the entire build, integration, and deployment. You just use the finished system. If anything ever needs tweaking, we handle that too.',
  },
  {
    question: 'What tools do you integrate with?',
    answer:
      'We connect with 500+ apps—Gmail, Outlook, Calendly, HubSpot, Salesforce, Stripe, Slack, Notion, Airtable, and many more. If you use it, we can likely automate it.',
  },
  {
    question: 'What if I need changes after launch?',
    answer:
      'Every monthly plan includes adjustments and optimization at no extra charge. We do monthly check-ins to review performance and expand your automations as your business grows.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. We use encrypted connections and enterprise-grade security throughout. We never store your data longer than required, and we comply fully with GDPR and CCPA.',
  },
  {
    question: "What's the typical ROI?",
    answer:
      'Most clients break even within 30 days. At a conservative $150/hr, saving just 10 hours per week equals $6,000/month in reclaimed time—on top of the additional revenue from serving more clients.',
  },
  {
    question: "What if it doesn't work for my business?",
    answer:
      "We offer a 30-day money-back guarantee. If we don't save you at least 5 hours per week in the first month, you receive a full refund of your setup fee. No questions, no hassle.",
  },
];

export function FAQ() {

  return (
    <section
      id="faq"
      className="py-24 lg:py-32 bg-[#f5f5f7]"
      aria-label="Frequently asked questions"
    >
      <Container size="md">
        <div className="text-center mb-14 fade-in-up">
          <p className="text-[15px] font-medium text-[#6e6e73] mb-4">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f]">
            Common questions.
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-[#d2d2d7] px-7 fade-in-up delay-100">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
