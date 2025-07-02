import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const EnhancedButton = forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  children, 
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "cosmic-button",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 active:scale-95",
    ghost: "text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:scale-105 active:scale-95",
    destructive: "bg-red-500 text-white hover:bg-red-600 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:scale-105 active:scale-95",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-lg hover:scale-105 active:scale-95"
  };
  
  const sizes = {
    default: "h-10 px-6 py-2",
    sm: "h-8 px-4 py-1 text-sm",
    lg: "h-12 px-8 py-3 text-lg",
    icon: "h-10 w-10"
  };

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

EnhancedButton.displayName = "EnhancedButton";

export { EnhancedButton };