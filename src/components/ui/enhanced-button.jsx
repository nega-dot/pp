import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const EnhancedButton = forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  children, 
  asChild = false,
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group";
  
  const variants = {
    default: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:scale-105 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-600 hover:before:translate-x-[100%]",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 active:scale-95 hover:border-primary/80 transition-all duration-300",
    ghost: "text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:scale-105 active:scale-95 hover:text-primary/90",
    destructive: "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:scale-105 active:scale-95",
    secondary: "bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground hover:from-secondary/90 hover:to-secondary/70 hover:shadow-lg hover:scale-105 active:scale-95"
  };
  
  const sizes = {
    default: "h-10 px-6 py-2",
    sm: "h-8 px-4 py-1 text-sm",
    lg: "h-12 px-8 py-3 text-lg",
    icon: "h-10 w-10"
  };

  const Component = asChild ? "span" : "button";

  return (
    <Component
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
    </Component>
  );
});

EnhancedButton.displayName = "EnhancedButton";

export { EnhancedButton };