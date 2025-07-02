import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = window.innerHeight * 0.3; // Hide after scrolling 30% of viewport
      setIsVisible(scrolled < threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
      <div className="flex flex-col items-center animate-float">
        <div className="relative">
          {/* Glowing background */}
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150 animate-pulse-subtle"></div>
          
          {/* Main content */}
          <div className="relative bg-card/90 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 shadow-lg">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <span className="animate-pulse">Scroll down to explore</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </div>
          </div>
        </div>
        
        {/* Animated dots */}
        <div className="flex flex-col gap-1 mt-2">
          <div className="w-1 h-1 bg-primary/60 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="w-1 h-1 bg-primary/60 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1 h-1 bg-primary/60 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};