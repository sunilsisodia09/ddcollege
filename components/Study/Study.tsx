"use client";

import Image from "next/image";
import {
  Search,
  ArrowRight,
  GraduationCap,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

import "./Study.css";

const features = [
  {
    icon: GraduationCap,
    title: "Quality Education",
  },
  {
    icon: Users,
    title: "Expert Faculty",
  },
  {
    icon: BriefcaseBusiness,
    title: "Better Placements",
  },
];

export default function StudySection() {
  return (
    <section className="study-section">
      <div className="study-container">

        {/* LEFT */}
        <div className="study-content">

          <div className="study-label">
            <span></span>
            <p>DD COLLEGE</p>
          </div>

          <h2 className="study-title">
            <span>Study at DD</span> College to
            <br />
            transform your
            <br />
            <strong>Career</strong>
          </h2>

          <p className="study-description">
            Build your future with quality education, expert faculty
            and industry-focused learning at DD College.
          </p>

          {/* SEARCH */}
          <div className="study-search">
            <Search size={20} />

            <input
              type="text"
              placeholder="Search Course by keyword"
              aria-label="Search Course"
            />

            <button type="button">
              <ArrowRight size={19} />
            </button>
          </div>

          {/* FEATURES */}
          <div className="study-features">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div className="study-feature" key={feature.title}>
                  <div className="study-feature-icon">
                    <Icon size={19} />
                  </div>

                  <span>{feature.title}</span>
                </div>
              );
            })}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="study-visual">

          <div className="study-image-card">
            <Image
              src="/campus/build.webp"
              alt="DD College Students"
              fill
              priority
              className="study-image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="study-badge">
            <span>Your Future</span>
            <strong>Starts Here</strong>
            <ArrowRight size={18} />
          </div>

          <div className="study-yellow-line"></div>

        </div>

      </div>
    </section>
  );
}