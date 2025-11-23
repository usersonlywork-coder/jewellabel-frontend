import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glass?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = true, glass = false }) => {
    return (
        <div
            className={cn(
                'rounded-2xl p-6 transition-smooth',
                glass
                    ? 'glass shadow-glass'
                    : 'bg-white shadow-lg border border-diamond-200/50',
                hover && 'hover-lift',
                className
            )}
        >
            {children}
        </div>
    );
};

export interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
    return <div className={cn('mb-4', className)}>{children}</div>;
};

export interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
    return <h3 className={cn('text-2xl font-display font-bold text-diamond-900', className)}>{children}</h3>;
};

export interface CardDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className }) => {
    return <p className={cn('text-diamond-600 mt-2', className)}>{children}</p>;
};

export interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
    return <div className={cn(className)}>{children}</div>;
};

export interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
    return <div className={cn('mt-6 pt-6 border-t border-diamond-200', className)}>{children}</div>;
};
