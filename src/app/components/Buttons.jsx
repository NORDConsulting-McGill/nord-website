'use client';

import React from "react";
import { cva } from "class-variance-authority";

// Utility function to merge class names (simple version without clsx)
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

/* 
Button Component with Variants

Takes a value for button variant and size.

Current variants:
primary, secondary, outline, ghost, link, destructive

Current sizes:
default, sm, lg, icon

Usage examples:

<Button size="lg">
  Login
</Button>

<Button variant="secondary" size="sm">
  Sign Up
</Button>

<Button variant="outline" size="icon">
  <IconComponent />
</Button>

<Button variant="link">
  Learn More
</Button>

*/

const buttonVariants = cva(
    "cursor-pointer hover:scale-102 transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap rounded-full text-sm disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2",
    {
        variants: {
            variant: {
                primary: "bg-brand-purple-light text-black shadow-lg justify-center hover:bg-brand-purple hover:text-white hover:shadow-xl hover:-translate-y-0.5",
                purple: "bg-brand-purple text-white shadow-lg justify-center hover:bg-brand-purple-dark hover:shadow-xl hover:-translate-y-0.5",
                secondary: "justify-center text-black bg-transparent hover:bg-white hover:text-black",
                solid: "text-black bg-white hover:bg-gray-50 justify-between",
                navtrans: "text-foreground bg-transparent hover:underline hover:decoration-brand-purple hover:decoration-dashed",
                ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                link: "text-purple-600 underline-offset-4 hover:underline bg-transparent",
                destructive: "bg-red-600 text-white shadow-lg hover:bg-red-700",
                success: "bg-green-600 text-white shadow-lg hover:bg-green-700",
            },
            size: {
                default: "h-10 px-6 py-4 text-base",
                sm: "h-10 px-6 py-3 text-sm",
                lg: "h-14 px-10 py-5 text-lg",
                icon: "h-12 w-12 p-0",
                xl: "h-16 px-12 py-6 text-xl"
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

export function Button({
    className,
    variant,
    size,
    children,
    onClick,
    type = "button",
    disabled = false,
    ...props
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}
        >
            {children}
        </button>
    );
}

// Legacy components for backward compatibility
export function PrimaryButton({ children, onClick, type = "button", size = "default", className, ...props }) {
    return (
        <Button
            variant="primary"
            size={size}
            onClick={onClick}
            type={type}
            className={className}
            {...props}
        >
            {children}
        </Button>
    );
}

export function SecondaryButton({ children, onClick, type = "button", size = "default", className, ...props }) {
    return (
        <Button
            variant="secondary"
            size={size}
            onClick={onClick}
            type={type}
            className={className}
            {...props}
        >
            {children}
        </Button>
    );
}


// Export buttonVariants for external use if needed
export { buttonVariants };