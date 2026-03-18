import { useEffect } from 'react';

interface CalendlyEmbedProps {
  // Custom colors — all hex without the leading #
  bgColor?: string;
  textColor?: string;
  primaryColor?: string;
}

export function CalendlyEmbed({
  bgColor = 'ffffff',
  textColor = '1d1d1f',
  primaryColor = '1d1d1f',
}: CalendlyEmbedProps) {
  const url = `https://calendly.com/ethangardner298/30min?background_color=${bgColor}&text_color=${textColor}&primary_color=${primaryColor}&hide_gdpr_banner=1`;

  useEffect(() => {
    if (document.querySelector('script[src*="calendly"]')) return;
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden border border-[#d2d2d7]"
      data-url={url}
      style={{ minWidth: '320px', height: '900px' }}
    />
  );
}
