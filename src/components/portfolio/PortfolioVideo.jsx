import { useEffect, useRef, useState } from "react";

const VolumeOffIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
    <path d="M16 10l4 4m0 -4l-4 4" />
  </svg>
);

const VolumeOnIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9.5 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
  </svg>
);

export function PortfolioVideo({ src, stopAt = 20, className }) {
  const videoRef = useRef(null);
  const [effectiveStopAt, setEffectiveStopAt] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      const duration = video.duration;
      if (Number.isFinite(duration) && duration > 2) {
        setEffectiveStopAt(duration - 2);
      } else {
        setEffectiveStopAt(stopAt);
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [src, stopAt]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (effectiveStopAt !== null && video.currentTime >= effectiveStopAt) {
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
  }, [effectiveStopAt]);

  const toggleMute = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="portfolio-video-wrapper">
      <video ref={videoRef} className={className} muted playsInline preload="auto">
        <source src={src} type="video/webm" />
      </video>
      <button
        className="portfolio-video-mute-btn"
        onClick={toggleMute}
        aria-label={isMuted ? "Activar sonido" : "Silenciar"}
      >
        {isMuted ? VolumeOffIcon : VolumeOnIcon}
      </button>
    </div>
  );
}
