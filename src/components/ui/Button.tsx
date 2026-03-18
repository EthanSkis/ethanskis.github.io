import { cn } from '../../lib/utils';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-[#f59e0b] text-white hover:bg-[#d97706] focus:ring-[#f59e0b] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0':
              variant === 'primary',
            'bg-[#1e3a5f] text-white hover:bg-[#162d4a] focus:ring-[#1e3a5f] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0':
              variant === 'secondary',
            'border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white focus:ring-[#1e3a5f] hover:-translate-y-0.5 active:translate-y-0':
              variant === 'outline',
          },
          {
            'px-4 py-2 text-sm min-h-[36px]': size === 'sm',
            'px-6 py-3 text-base min-h-[44px]': size === 'md',
            'px-8 py-4 text-lg min-h-[52px]': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
