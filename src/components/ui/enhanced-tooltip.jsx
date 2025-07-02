import { useState } from "react";
import { cn } from "@/lib/utils";

export const EnhancedTooltip = ({ 
  children, 
  content, 
  position = "top",
  delay = 300,
  className 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const showTooltip = () => {
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsVisible(false);
  };

  const positions = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
  };

  const arrows = {
    top: "top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-card",
    bottom: "bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-card",
    left: "left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-card",
    right: "right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-card"
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      
      {isVisible && (
        <div className={cn(
          "absolute z-50 px-3 py-2 text-sm font-medium text-foreground bg-card border border-border/50 rounded-lg shadow-lg backdrop-blur-sm",
          "animate-in fade-in zoom-in-95 duration-200",
          "whitespace-nowrap",
          positions[position],
          className
        )}>
          {content}
          
          {/* Arrow */}
          <div className={cn(
            "absolute w-0 h-0 border-4",
            arrows[position]
          )} />
        </div>
      )}
    </div>
  );
};