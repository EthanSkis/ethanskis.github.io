import { useEffect } from 'react';

interface CalendlyEmbedProps {
  url?: string;
}

// Replace the url prop with your actual Calendly scheduling link,
// e.g. "https://calendly.com/your-name/workflow-audit"
export function CalendlyEmbed({ url = 'https://calendly.com/flowstateai/workflow-audit' }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly widget script once
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
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}
