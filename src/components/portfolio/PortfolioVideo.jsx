import { useEffect, useRef } from "react";

export function PortfolioVideo({ src, stopAt = 20, className }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= stopAt) {
        video.pause();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      observer.disconnect();
    };
  }, [stopAt]);

  return (
    <video ref={videoRef} className={className} muted playsInline preload="metadata">
      <source src={src} type="video/webm" />
    </video>
  );
}
