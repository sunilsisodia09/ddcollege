"use client";

import Link from "next/link";
import Image from "next/image";
import "./AboutSection.css";





const stats = [
  {
    number: "25+",
    label: "Years of Excellence",
  },
  {
    number: "10+",
    label: "Academic Programs",
  },
  {
    number: "1000+",
    label: "Students",
  },
  {
    number: "50+",
    label: "Industry Connections",
  },
];

export default function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">
        <div className="about-hero-shape about-shape-one" />
        <div className="about-hero-shape about-shape-two" />
        <div className="about-hero-grid" />

        
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="about-intro">
        <div className="about-container">

          <div className="about-intro-grid">

            <div className="about-intro-image">

              <div className="about-image-main">
                <Image
             src="/campus/build.webp"
                  alt="DD College Campus"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="about-image-small">
                <Image
                  src="/campus/build.webp"
                  alt="DD College Students"
                  fill
                  sizes="300px"
                />
              </div>

              <div className="about-experience-card">
                <strong>25+</strong>
                <span>Years of<br />Educational Excellence</span>
              </div>

            </div>


            <div className="about-intro-content">


              <h2>
                A Place to Learn,
                <span>Grow & Succeed.</span>
              </h2>

              <p className="about-lead">
                DD College is committed to providing students with a
                meaningful educational experience that combines academic
                knowledge, practical exposure and personal development.
              </p>

              <p>
                Our approach to education goes beyond textbooks and
                classrooms. We aim to create an environment where students
                can discover their potential, develop professional skills
                and prepare themselves for the changing demands of the
                modern world.
              </p>

              <p>
                Through academic programs, practical learning, campus
                activities and career-oriented initiatives, students get
                opportunities to build confidence and develop the skills
                required for their future journey.
              </p>

              <div className="about-intro-points">

                <div>
                  <span>✓</span>
                  <p>Student-focused learning</p>
                </div>

                <div>
                  <span>✓</span>
                  <p>Practical education</p>
                </div>

                <div>
                  <span>✓</span>
                  <p>Professional development</p>
                </div>

              </div>

              <Link href="/contact" className="about-primary-button">
                Discover DD College
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="about-stats">
        <div className="about-container">

          <div className="about-stats-grid">

            {stats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}

          </div>

        </div>
      </section>


   


  




     


     




      

    </main>
  );
}