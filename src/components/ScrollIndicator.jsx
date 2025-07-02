import { ChevronDown, MousePointer2 } from "lucide-react";
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
        <div className="relative group">
          {/* Enhanced Glowing background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-full blur-xl scale-150 animate-pulse-subtle group-hover:scale-[1.8] transition-transform duration-500"></div>
          
          {/* Main content with enhanced styling */}
          <div className="relative bg-card/90 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 text-sm font-medium text-primary">
              <MousePointer2 className="w-4 h-4 animate-pulse" />
              <span className="animate-pulse bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-semibold">
                Scroll down to explore
              </span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </div>
          </div>
          
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-full animate-shimmer"></div>
        </div>
        
        {/* Enhanced Animated dots */}
        <div className="flex flex-col gap-1 mt-3">
          <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-ping shadow-lg shadow-primary/30" style={{ animationDelay: '0s' }}></div>
          <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-ping shadow-lg shadow-primary/30" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-ping shadow-lg shadow-primary/30" style={{ animationDelay: '0.4s' }}></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute -top-4 -left-4 w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute -top-2 -right-6 w-1 h-1 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute -bottom-2 -left-8 w-1.5 h-1.5 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0.5s', animationDuration: '6s' }}></div>
      </div>
    </div>
  );
};