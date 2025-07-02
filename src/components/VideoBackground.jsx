import { useEffect, useState } from "react";

export const VideoBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  const handleVideoError = () => {
    setHasError(true);
    console.warn("Video background failed to load, falling back to gradient");
  };

  useEffect(() => {
    // Preload video for better performance
    const video = document.createElement('video');
    video.src = "https://videos.pexels.com/video-files/11353720/11353720-uhd_2560_1440_60fps.mp4";
    video.load();
  }, []);

  if (hasError) {
    // Fallback to animated gradient background
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 animate-pulse-subtle"></div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Video Background */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        style={{
          filter: 'brightness(0.4) contrast(1.1) saturate(1.2)',
        }}
      >
        <source 
          src="https://videos.pexels.com/video-files/11353720/11353720-uhd_2560_1440_60fps.mp4" 
          type="video/mp4" 
        />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-indigo-900/30"></div>
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
      
      {/* Loading state */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 animate-pulse-subtle"></div>
      )}
    </div>
  );
};