import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: React.ReactNode;
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, isLoading, disabled, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center font-semibold transition-smooth focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg';

        const variants = {
            primary: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-700 hover:to-primary-600 focus:ring-primary-500 shadow-lg hover:shadow-xl',
            secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 focus:ring-primary-500',
            gold: 'bg-gradient-gold text-white hover:shadow-glow focus:ring-gold-500 shadow-lg',
            outline: 'border-2 border-diamond-300 text-diamond-700 hover:bg-diamond-50 focus:ring-diamond-500',
            ghost: 'text-diamond-700 hover:bg-diamond-100 focus:ring-diamond-500',
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg',
            xl: 'px-10 py-5 text-xl',
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Loading...
                    </>
                ) : (
                    children
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
