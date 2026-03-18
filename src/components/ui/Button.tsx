import { cn } from '../../lib/utils';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black disabled:opacity-40 disabled:cursor-not-allowed select-none',
          {
            'bg-[#1d1d1f] text-white hover:bg-[#3a3a3c] active:bg-[#1d1d1f] active:scale-[0.98]':
              variant === 'primary',
            'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed] active:scale-[0.98]':
              variant === 'secondary',
            'text-[#1d1d1f] hover:bg-[#f5f5f7] active:scale-[0.98]':
              variant === 'ghost',
          },
          {
            'px-4 py-2 text-sm min-h-[36px]': size === 'sm',
            'px-5 py-2.5 text-[15px] min-h-[44px]': size === 'md',
            'px-7 py-3.5 text-[17px] min-h-[52px]': size === 'lg',
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
