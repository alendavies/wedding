import React from 'react';
import clsx from 'clsx';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'full';
    className?: string;
};

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary:
        'bg-[#8f9d87] text-white hover:bg-[#7a8a75] focus:ring-2 focus:ring-[#8f9d87]/40',
    outline:
        'bg-white border border-[#8f9d87] text-[#8f9d87] hover:bg-[#f2f2ef]',
    ghost: 'bg-transparent text-[#8f9d87] hover:underline',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
    full: 'w-full py-4 text-sm',
};

const base =
    'inline-flex items-center justify-center rounded-full transition-colors font-sans cursor-pointer disabled:cursor-not-allowed';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    type = 'button',
    ...props
}: ButtonProps) => {
    const classes = clsx(
        base,
        variantClasses[variant],
        sizeClasses[size],
        className
    );

    return (
        <button
            type={type}
            className={classes}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
