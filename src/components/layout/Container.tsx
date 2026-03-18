import { cn } from '../../lib/utils';
import { type HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Container({ className, size = 'xl', children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        {
          'max-w-2xl': size === 'sm',
          'max-w-4xl': size === 'md',
          'max-w-6xl': size === 'lg',
          'max-w-7xl': size === 'xl',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
