"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./Testimonials.css";

type SuccessStory = {
  id: number;
  name: string;
  course: string;
  batch: string;
  role: string;
  company: string;
  companyLogo: string;
  image: string;
  quote: string;
};

const stories: SuccessStory[] = [
  {
    id: 1,
    name: "Anjuet Singh Sajwan",
    course: "User Experience and Interaction Design",
    batch: "2026",
    role: "UX Designer",
    company: "Google",
    companyLogo: "/images/google-logo.png",
    image: "/images/stda.webp",
    quote:
      "Through practical projects and faculty support, I’ve learned to use AI to anticipate user needs. I design smart, intuitive interfaces that solve problems before they happen, making technology feel effortless.",
  },
  {
    id: 2,
    name: "Shreya Mahajan",
    course: "B.Tech CSE",
    batch: "2026",
    role: "Software Engineer",
    company: "Microsoft",
    companyLogo: "/images/microsoft-logo.png",
    image: "/students/ab.jpeg",
    quote:
      "The practical learning environment helped me strengthen my technical skills and confidence. The guidance from faculty played an important role in preparing me for my professional journey.",
  },
  {
    id: 3,
    name: "Arshita",
    course: "B.Tech CSE",
    batch: "2026",
    role: "Software Developer",
    company: "Amazon",
    companyLogo: "/images/amazon-logo.png",
    image: "/images/stda.webp",
    quote:
      "College gave me opportunities to work on real projects and improve my problem-solving skills. The placement support helped me understand what companies expect from fresh graduates.",
  },
  {
    id: 4,
    name: "Ashutosh Kumar Pandey",
    course: "B.Tech CSE",
    batch: "2025",
    role: "Software Engineer",
    company: "Microsoft",
    companyLogo: "/images/microsoft-logo.png",
    image: "/images/stda.webp",
    quote:
      "My journey at the college helped me develop both technical and communication skills. Practical projects and continuous mentorship prepared me to confidently step into the technology industry.",
  },
  {
    id: 5,
    name: "Rohit Singh",
    course: "B.Tech CSE",
    batch: "2026",
    role: "Technology Associate",
    company: "Infosys",
    companyLogo: "/images/infosys-logo.png",
    image: "/images/stda.webp",
    quote:
      "The combination of classroom learning, projects and faculty guidance helped me build a strong foundation. I am thankful for the opportunities that helped me begin my career.",
  },
];

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentStory = stories[activeIndex];

  const nextStory = () => {
    setActiveIndex((current) => (current + 1) % stories.length);
  };

  const previousStory = () => {
    setActiveIndex(
      (current) => (current - 1 + stories.length) % stories.length
    );
  };

  const goToStory = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % stories.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      className="success-stories-section"
      id="success-stories"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background */}
      <div className="success-bg-circle success-bg-circle-one" />
      <div className="success-bg-circle success-bg-circle-two" />

      <div className="success-stories-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="success-header">
          <div className="success-header-left">
            <div className="success-label">
              <span className="success-label-line" />
              <span>SUCCESS STORIES</span>
            </div>

            <h2>
              Where ambition
              <br />
              becomes <span>achievement.</span>
            </h2>
          </div>

          <div className="success-header-right">
            <p>
              Discover how our students turn classroom learning,
              practical experience and mentorship into successful
              professional journeys.
            </p>

            <div className="success-progress">
              <span className="success-progress-number">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <div className="success-progress-track">
                <span
                  style={{
                    width: `${
                      ((activeIndex + 1) / stories.length) * 100
                    }%`,
                  }}
                />
              </div>

              <span className="success-progress-total">
                {String(stories.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN STORY
        ===================================================== */}

        <div className="success-story-card">

          {/* ===================================================
              STUDENT PANEL
          =================================================== */}

          <div className="success-student-panel">

            <div className="student-panel-top">
              <span>STUDENT SPOTLIGHT</span>

              <div className="student-number">
                {String(currentStory.id).padStart(2, "0")}
              </div>
            </div>

            {/* Yellow Shape */}
            <div className="student-yellow-shape">
              <div className="yellow-orbit orbit-one" />
              <div className="yellow-orbit orbit-two" />
              <div className="yellow-orbit orbit-three" />

              <span className="yellow-dot dot-1" />
              <span className="yellow-dot dot-2" />
              <span className="yellow-dot dot-3" />
              <span className="yellow-dot dot-4" />
              <span className="yellow-dot dot-5" />
              <span className="yellow-dot dot-6" />
              <span className="yellow-dot dot-7" />
              <span className="yellow-dot dot-8" />
            </div>

            {/* Student Image */}
            <div
              className="success-student-image"
              key={currentStory.id}
            >
              <Image
                src={currentStory.image}
                alt={`${currentStory.name} - DD College`}
                fill
                priority
                sizes="(max-width: 700px) 90vw, (max-width: 1100px) 50vw, 42vw"
              />
            </div>

            {/* Batch */}
            <div className="student-floating-tag">
              <span className="tag-dot" />
              {currentStory.batch} BATCH
            </div>
          </div>

          {/* ===================================================
              CONTENT PANEL
          =================================================== */}

          <div className="success-story-content">

            <div className="story-content-top">
              <div className="story-quote-mark">
                “
              </div>

              <span className="story-category">
                ALUMNI EXPERIENCE
              </span>
            </div>

            {/* Quote */}
            <blockquote className="success-quote">
              {currentStory.quote}
            </blockquote>

            {/* Student Details */}
            <div className="success-student-info">
              <h3>{currentStory.name}</h3>

              <div className="student-role">
                <span>{currentStory.role}</span>

                <i />

                <span>{currentStory.company}</span>
              </div>

              <p className="success-course">
                {currentStory.course}
              </p>
            </div>

            {/* Company */}
            <div className="success-company">

              <div className="company-label">
                <span className="company-label-line" />
                <span>PLACED AT</span>
              </div>

              <div className="company-logo-box">
                <Image
                  src={currentStory.companyLogo}
                  alt={`${currentStory.company} logo`}
                  width={180}
                  height={60}
                  className="success-company-logo"
                />
              </div>

            </div>

            {/* Controls */}
            <div className="success-bottom">

              <div className="success-controls">

                <button
                  type="button"
                  className="success-control-btn"
                  onClick={previousStory}
                  aria-label="Previous success story"
                >
                  <span>←</span>
                </button>

                <button
                  type="button"
                  className="success-control-btn success-control-next"
                  onClick={nextStory}
                  aria-label="Next success story"
                >
                  <span>→</span>
                </button>

              </div>

              {/* Dots */}
              <div className="success-dots">

                {stories.map((story, index) => (
                  <button
                    key={story.id}
                    type="button"
                    className={`success-dot ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => goToStory(index)}
                    aria-label={`Show ${story.name}`}
                  />
                ))}

              </div>

              <span className="success-swipe-text">
                EXPLORE STORIES
              </span>

            </div>
          </div>
        </div>

        {/* =====================================================
            INFORMATION STRIP
        ===================================================== */}

        <div className="success-info-strip">

          <div className="success-info-item">
            <strong>01</strong>
            <span>Practical Learning</span>
          </div>

          <div className="success-info-item">
            <strong>02</strong>
            <span>Industry Exposure</span>
          </div>

          <div className="success-info-item">
            <strong>03</strong>
            <span>Expert Mentorship</span>
          </div>

          <div className="success-info-item">
            <strong>04</strong>
            <span>Career Growth</span>
          </div>

        </div>

      </div>
    </section>
  );
}