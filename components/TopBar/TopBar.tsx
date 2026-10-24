"use client";

import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";

import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="dd-topbar">
      <div className="dd-topbar-container">

        {/* LEFT LINKS */}
        <div className="dd-topbar-left">

          {/* News & Events */}
          <Link href="/news" className="dd-topbar-link">
            <span>News & Events</span>
          </Link>

          {/* Quick Links */}
          <Link
            href="/quick-links"
            className="dd-topbar-link dd-dropdown"
          >
            <span>Quick Links</span>
            
          </Link>

          {/* Admission */}
          <Link
            href="/admissions"
            className="dd-topbar-link dd-admission-link"
          >
            <span className="dd-live-dot"></span>
            <span>Admission Enquiry</span>
          </Link>

          {/* Examinations */}
          <Link
            href="/examinations"
            className="dd-topbar-link dd-dropdown"
          >
            <span>Examinations</span>
      
          </Link>

          {/* Alumni */}
          <Link
            href="/alumni"
            className="dd-topbar-link"
          >
            <span>Alumni</span>
          </Link>

        </div>


        {/* RIGHT SIDE */}
        <div className="dd-topbar-right">

          {/* SOCIAL ICONS */}
          <div className="dd-social-links">

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="dd-social-icon"
            >
              <svg
                viewBox="0 0 24 24"
                width="17"
                height="17"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.8v8h3.2Z" />
              </svg>
            </a>


            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="dd-social-icon"
            >
              <svg
                viewBox="0 0 24 24"
                width="17"
                height="17"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>


            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="dd-social-icon"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.5 3.8-6.5 3.8Z" />
              </svg>
            </a>


            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="dd-social-icon"
            >
              <svg
                viewBox="0 0 24 24"
                width="17"
                height="17"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.2 3.5A1.9 1.9 0 1 1 5.2 7.3a1.9 1.9 0 0 1 0-3.8ZM3.5 8.7h3.4V21H3.5V8.7ZM9 8.7h3.3v1.7h.1c.5-.9 1.7-2 3.5-2 3.7 0 4.4 2.4 4.4 5.6V21h-3.4v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9V8.7Z" />
              </svg>
            </a>

          </div>


          {/* DIVIDER */}
          <span className="dd-topbar-divider"></span>


          
{/* REGISTER BUTTON */}
<Link
  href="https://admissions.ddcollege.in"
  className="dd-register-button"
  target="_blank"
  rel="noopener noreferrer"
>
  <span>REGISTER NOW</span>

  <span className="dd-register-icon">
    <ArrowUpRight
      size={14}
      strokeWidth={2.5}
    />
  </span>
</Link>


        </div>

      </div>
    </div>
  );
}