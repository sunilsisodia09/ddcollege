"use client";

import { useEffect, useState } from "react";
import "./Hero.css";

const slides = [
  "/campus/hero.jpeg",
  "/campus/heroa.jpeg",
  "/campus/herosec.jpeg",
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="dd-hero" aria-label="DD College campus gallery">
      {slides.map((image, index) => (
        <div
          key={image}
          className={`dd-hero-slide ${
            active === index ? "active" : ""
          }`}
          style={{ backgroundImage: `url("${image}")` }}
          aria-hidden="true"
        />
      ))}

      <div className="dd-hero-controls">
        <button
          type="button"
          onClick={() =>
            setActive((current) =>
              (current - 1 + slides.length) % slides.length
            )
          }
          aria-label="Previous image"
        >
          &#8592;
        </button>

        <div className="dd-hero-dots">
          {slides.map((image, index) => (
            <button
              key={image}
              type="button"
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Show image ${index + 1}`}
              aria-current={active === index ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() =>
            setActive((current) => (current + 1) % slides.length)
          }
          aria-label="Next image"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}