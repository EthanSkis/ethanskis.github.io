import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
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
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    businessType: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.businessType) newErrors.businessType = 'Please select your business type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate form submission — replace with Formspree or your endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-white"
      ref={sectionRef as React.RefObject<HTMLElement>}
      aria-label="Contact form"
    >
      <Container size="md">
        <div className="text-center mb-12 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-[#0d9488] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
            Let's Talk About{' '}
            <span className="text-[#0d9488]">Your Business</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-xl mx-auto">
            Tell us a bit about your business and we'll reach out to schedule your free workflow
            audit.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-8 fade-in-up delay-100">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-2">Message Sent!</h3>
              <p className="text-[#64748b]">
                Thanks for reaching out. We'll get back to you within 24 hours to schedule your
                free workflow audit.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <Input
                  id="name"
                  label="Full Name"
                  placeholder="Sarah Johnson"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  error={errors.name}
                  autoComplete="name"
                />
                <Input
                  id="email"
                  label="Email Address"
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
                  label="Business Type"
                  value={formData.businessType}
                  onChange={(e) => handleChange('businessType', e.target.value)}
                  error={errors.businessType}
                  options={businessTypes}
                />
              </div>

              <div className="mb-6">
                <Textarea
                  id="message"
                  label="Tell us about your biggest time challenge"
                  placeholder="I'm spending too much time on..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  error={errors.message}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
