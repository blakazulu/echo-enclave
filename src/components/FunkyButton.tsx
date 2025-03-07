
import React from 'react';
import { cn } from "@/lib/utils";
import { Slot } from '@radix-ui/react-slot';

interface FunkyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  icon?: React.ReactNode;
}

const FunkyButton = React.forwardRef<HTMLButtonElement, FunkyButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    
    return (
      <Comp
        ref={ref}
        className={cn(
          "relative overflow-hidden font-medium rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300",
          
          // Base style with funky gradient background
          variant === 'primary' && "bg-gradient-to-r from-songhunt-red to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/20 active:scale-95",
          
          // Secondary variant
          variant === 'secondary' && "bg-gradient-to-r from-blue-500 to-teal-400 text-white hover:shadow-lg hover:shadow-blue-500/20 active:scale-95",
          
          // Outline variant
          variant === 'outline' && "bg-transparent border border-current text-songhunt-red hover:bg-songhunt-red/5 active:scale-95",
          
          // Ghost variant
          variant === 'ghost' && "bg-transparent hover:bg-white/10 dark:hover:bg-black/10 active:scale-95",
          
          // Link variant
          variant === 'link' && "bg-transparent underline-offset-4 hover:underline p-0 h-auto",
          
          // Sizes
          size === 'sm' && "text-xs h-8 px-3",
          size === 'md' && "text-sm h-10 px-4",
          size === 'lg' && "text-base h-12 px-6",
          
          className
        )}
        {...props}
      >
        {/* Animated background shine effect */}
        {(variant === 'primary' || variant === 'secondary') && (
          <span className="absolute inset-0 w-1/3 h-full bg-white/20 skew-x-12 transform -translate-x-full transition-transform group-hover:duration-1000 duration-1000 group-hover:translate-x-[400%]"></span>
        )}
        
        {/* Icon with spacing */}
        {icon && <span className="mr-1">{icon}</span>}
        
        {/* Button text */}
        {children}
      </Comp>
    );
  }
);

FunkyButton.displayName = 'FunkyButton';

export { FunkyButton };
