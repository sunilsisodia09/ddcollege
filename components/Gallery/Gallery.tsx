"use client";

import { useEffect, useRef } from "react";
import "./Gallery.css";

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    let userInteracted = false;

    const startVideo = async () => {
      video.volume = 1;
      video.muted = false;

      try {
        await video.play();
      } catch {
        video.muted = true;

        try {
          await video.play();
        } catch {}
      }
    };

    const stopVideo = () => {
      video.pause();
      video.muted = true;
      video.volume = 0;
    };

    const handleUserInteraction = () => {
      userInteracted = true;

      const rect = section.getBoundingClientRect();

      const visible =
        rect.top < window.innerHeight &&
        rect.bottom > 0;

      if (!visible) return;

      video.muted = false;
      video.volume = 1;

      video.play().catch(() => {});
    };

    window.addEventListener("click", handleUserInteraction, {
      once: true,
    });

    window.addEventListener("touchstart", handleUserInteraction, {
      once: true,
    });

    window.addEventListener("keydown", handleUserInteraction, {
      once: true,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry) return;

        if (entry.isIntersecting) {
          video.volume = 1;

          if (userInteracted) {
            video.muted = false;
            video.play().catch(() => {});
          } else {
            startVideo();
          }
        } else {
          stopVideo();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    startVideo();

    return () => {
      observer.disconnect();

      video.pause();
      video.muted = true;
      video.volume = 0;

      window.removeEventListener(
        "click",
        handleUserInteraction
      );

      window.removeEventListener(
        "touchstart",
        handleUserInteraction
      );

      window.removeEventListener(
        "keydown",
        handleUserInteraction
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="dd-gallery-section"
    >
      <div className="dd-gallery-video">
        <video
          ref={videoRef}
          className="dd-gallery-video-element"
          autoPlay
          loop
          playsInline
          preload="auto"
          controls={false}
        >
          <source
            src="/campus/dd.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}