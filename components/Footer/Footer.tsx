"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";

import "./Footer.css";


/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dd-footer">

      {/* =====================================================
          TOP CTA
      ===================================================== */}

      <section className="dd-footer-cta">

        <div className="dd-footer-container">

          <div className="dd-footer-cta-content">

            <span className="dd-footer-cta-label">
              BEGIN YOUR JOURNEY
            </span>

            <h2>
              Build Your Future
              <span> With D.D. College</span>
            </h2>

            <p>
              Discover quality education, practical learning,
              vibrant campus life and opportunities designed
              to help you move towards a brighter career.
            </p>

          </div>


         
<Link
  href="https://admissions.ddcollege.in"
  className="dd-footer-cta-button"
  target="_blank"
  rel="noopener noreferrer"
>
  <span>Apply Now</span>

  <ArrowRight
    size={18}
    strokeWidth={2.5}
  />
</Link>


        </div>

      </section>


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="dd-footer-main">

        <div className="dd-footer-container">

          <div className="dd-footer-grid">


            {/* =================================================
                COLLEGE INFO
            ================================================= */}

            <div className="dd-footer-brand">

              <Link
                href="/"
                className="dd-footer-logo"
              >

                <Image
                  src="/logos/college.png"
                  alt="D.D. College Dehradun"
                  width={230}
                  height={80}
                  className="dd-footer-logo-image"
                />

              </Link>


              <p className="dd-footer-description">
                D.D. College, Dehradun is committed to providing
                quality education, holistic development and
                meaningful opportunities for students to build
                successful careers.
              </p>


              {/* Social Icons */}

              <div className="dd-footer-socials">

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="dd-footer-social"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.7.3-1 1-1Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>


                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="dd-footer-social"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />

                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                    />
                  </svg>
                </a>


                {/* YouTube */}
                <a
                  href="#"
                  aria-label="YouTube"
                  className="dd-footer-social"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M21.5 7.2a2.8 2.8 0 0 0-2-2C17.7 4.7 12 4.7 12 4.7s-5.7 0-7.5.5a2.8 2.8 0 0 0-2 2C2 9 2 12 2 12s0 3 .5 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a2.8 2.8 0 0 0 2-2c.5-1.8.5-4.8.5-4.8s0-3-.5-4.8Z"
                      fill="currentColor"
                    />

                    <path
                      d="m10 9 5 3-5 3V9Z"
                      fill="#172337"
                    />
                  </svg>
                </a>


                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="dd-footer-social"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 3.5A2.5 2.5 0 1 1 5 8a2.5 2.5 0 0 1 0-4.5ZM3 9h4v12H3V9Zm6 0h3.8v1.6h.1c.5-1 1.8-2.1 3.8-2.1 4.1 0 4.9 2.7 4.9 6.2V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

              </div>

            </div>


            {/* =================================================
                QUICK LINKS
            ================================================= */}

            <div className="dd-footer-column">

              <h3>
                Quick Links
              </h3>

              <ul>

                <li>
                  <Link href="/about">
                    About College
                  </Link>
                </li>

                <li>
                  <Link href="/courses">
                    Programs
                  </Link>
                </li>

                <li>
                  <Link href="/campus">
                    Campus Life
                  </Link>
                </li>

                <li>
                  <Link href="/placements">
                    Placements
                  </Link>
                </li>

                <li>
                  <Link href="/scholarships">
                    Scholarships
                  </Link>
                </li>

                <li>
                  <Link href="/gallery">
                    Gallery
                  </Link>
                </li>

              </ul>

            </div>


            {/* =================================================
                ADMISSIONS
            ================================================= */}

            <div className="dd-footer-column">

              <h3>
                Admissions
              </h3>

              <ul>

                <li>
                  <Link href="/admissions">
                    Admission Process
                  </Link>
                </li>

                <li>
                  <Link href="/admissions/eligibility">
                    Eligibility
                  </Link>
                </li>

                <li>
                  <Link href="/admissions/fee-structure">
                    Fee Structure
                  </Link>
                </li>

                <li>
                  <Link href="/scholarships">
                    Scholarships
                  </Link>
                </li>

                <li>
                  <Link href="/admissions/apply">
                    Apply Online
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    Contact Admission Cell
                  </Link>
                </li>

              </ul>

            </div>


            {/* =================================================
                CONTACT
            ================================================= */}

            <div className="dd-footer-contact">

              <h3>
                Contact Us
              </h3>


              <div className="dd-footer-contact-item">

                <div className="dd-footer-contact-icon">
                  <MapPin
                    size={17}
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <strong>
                    Campus
                  </strong>

                  <span>
                    Dehradun, Uttarakhand, India
                  </span>
                </div>

              </div>


              <div className="dd-footer-contact-item">

                <div className="dd-footer-contact-icon">
                  <Phone
                    size={17}
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <strong>
                    Phone
                  </strong>

                  <a href="tel:+9113527XXXXX">
                    +91 XXXXX XXXXX
                  </a>
                </div>

              </div>


              <div className="dd-footer-contact-item">

                <div className="dd-footer-contact-icon">
                  <Mail
                    size={17}
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <strong>
                    Email
                  </strong>

                  <a href="mailto:info@ddcollege.ac.in">
                    info@ddcollege.ac.in
                  </a>
                </div>

              </div>


              <div className="dd-footer-contact-item">

                <div className="dd-footer-contact-icon">
                  <Clock3
                    size={17}
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <strong>
                    Office Hours
                  </strong>

                  <span>
                    Mon – Sat · 9:00 AM – 5:00 PM
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div className="dd-footer-bottom">

        <div className="dd-footer-container">

          <div className="dd-footer-bottom-inner">

            <p>
              © {currentYear} D.D. College, Dehradun.
              All Rights Reserved.
            </p>


            <div className="dd-footer-bottom-links">

              <Link href="/privacy-policy">
                Privacy Policy
              </Link>

              <span>|</span>

              <Link href="/terms">
                Terms & Conditions
              </Link>

              <span>|</span>

              <Link href="/contact">
                Contact
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}