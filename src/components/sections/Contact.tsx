import { useState } from 'react';
import { Check } from 'lucide-react';
import Button from '../ui/Button';
import { Input, Textarea, Select } from '../ui/Input';
import { Container } from '../layout/Container';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FormData {
  name: string;
  email: string;
  businessType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  businessType?: string;
  message?: string;
}

const businessTypes = [
  { value: 'business-coach', label: 'Business Coach' },
  { value: 'life-coach', label: 'Life Coach' },
  { value: 'marketing-consultant', label: 'Marketing Consultant' },
  { value: 'sales-consultant', label: 'Sales Consultant' },
  { value: 'course-creator', label: 'Course Creator' },
  { value: 'other', label: 'Other' },
];

export function Contact() {
  const sectionRef = useScrollAnimation();
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', businessType: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.businessType) newErrors.businessType = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-white"
      ref={sectionRef as React.RefObject<HTMLElement>}
      aria-label="Contact"
    >
      <Container size="md">
        <div className="text-center mb-12 fade-in-up">
          <p className="text-[15px] font-medium text-[#6e6e73] mb-4">Get in touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            Not ready to book?
            <br />
            <span className="text-[#6e6e73]">Drop us a message.</span>
          </h2>
          <p className="text-[17px] text-[#6e6e73]">
            We respond within one business day.
          </p>
        </div>

        <div className="bg-[#f5f5f7] rounded-2xl border border-[#d2d2d7] p-7 lg:p-10 fade-in-up delay-100">
          {isSuccess ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 bg-[#1d1d1f] rounded-full flex items-center justify-center mx-auto mb-5">
                <Check className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f] mb-2">Message received.</h3>
              <p className="text-[#6e6e73] text-[15px]">
                We'll reach out within one business day. In the meantime, feel free to{' '}
                <button
                  className="text-[#1d1d1f] underline underline-offset-2"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  book your free audit
                </button>{' '}
                directly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <Input
                  id="name"
                  label="Name"
                  placeholder="Sarah Kim"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  error={errors.name}
                  autoComplete="name"
                />
                <Input
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="sarah@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  error={errors.email}
                  autoComplete="email"
                />
              </div>
              <div className="mb-4">
                <Select
                  id="businessType"
                  label="Business type"
                  value={formData.businessType}
                  onChange={(e) => handleChange('businessType', e.target.value)}
                  error={errors.businessType}
                  options={businessTypes}
                />
              </div>
              <div className="mb-6">
                <Textarea
                  id="message"
                  label="What's your biggest time challenge? (optional)"
                  placeholder="I spend most of my time on..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  'Send message'
                )}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
