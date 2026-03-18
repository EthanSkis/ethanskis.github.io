import { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '../../lib/utils';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn('divide-y divide-[#d2d2d7]', className)}>
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="w-full flex items-center justify-between py-5 text-left hover:opacity-70 transition-opacity duration-200 focus:outline-none focus-visible:opacity-70 min-h-[56px]"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-[#1d1d1f] pr-8 text-[17px] leading-snug">
              {item.question}
            </span>
            <span
              className={cn(
                'w-6 h-6 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0 transition-transform duration-300',
                openIndex === index && 'rotate-45'
              )}
            >
              <Plus className="w-3.5 h-3.5 text-[#1d1d1f]" />
            </span>
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            )}
          >
            <p className="text-[#6e6e73] leading-relaxed text-[15px]">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
