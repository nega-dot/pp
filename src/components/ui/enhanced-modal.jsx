import { X } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export const EnhancedModal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = "default",
  className 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizes = {
    sm: "max-w-md",
    default: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-[95vw] max-h-[95vh]"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Enhanced Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Enhanced Modal */}
      <div className={cn(
        "relative bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50 animate-in zoom-in-95 slide-in-from-bottom-4 duration-300",
        "max-h-[90vh] overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:rounded-2xl",
        sizes[size],
        className
      )}>
        {/* Header */}
        {title && (
          <div className="relative z-10 flex items-center justify-between p-6 border-b border-border/50 bg-card/50 backdrop-blur-sm">
            <h2 className="text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-secondary/80 transition-all duration-200 group hover:scale-110 hover:shadow-lg"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>
        )}
        
        {/* Content */}
        <div className="relative z-10 p-6 overflow-y-auto max-h-[calc(90vh-8rem)]">
          {children}
        </div>
      </div>
    </div>
  );
};