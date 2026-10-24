"use client";

import "./admission.css";

const eligibilityCriteria = [
  {
    number: "01",
    title: "Arts",
    description:
      "Candidates should have passed Class 12 from a recognized board. Subject-specific requirements may apply.",
  },
  {
    number: "02",
    title: "Commerce",
    description:
      "Candidates should have completed Class 12 from a recognized board. Programme-specific requirements may apply.",
  },
  {
    number: "03",
    title: "Management",
    description:
      "Candidates should meet the minimum educational qualification required for their selected management programme.",
  },
  {
    number: "04",
    title: "Computer Applications",
    description:
      "Candidates must meet the qualifying examination and subject requirements applicable to the selected programme.",
  },
  {
    number: "05",
    title: "Science / B.Sc.",
    description:
      "Candidates should have passed Class 12 with the subjects required for their chosen science programme.",
  },
  {
    number: "06",
    title: "Pharmacy",
    description:
      "Eligibility depends on the specific pharmacy programme and the applicable subject and regulatory requirements.",
  },
];

const downloadableFiles = [
  {
    title: "Offline Application Form",
    file: "/downloads/offline-application-form.pdf",
  },
  {
    title: "Fee Structure",
    file: "/downloads/fee-structure.pdf",
  },
  {
    title: "Affidavit (Student & Guardian)",
    file: "/downloads/affidavit-student-guardian.pdf",
  },
  {
    title: "Consent Form and Indemnity Bond",
    file: "/downloads/consent-form-indemnity-bond.pdf",
  },
  {
    title: "Fee Refund Policy",
    file: "/downloads/fee-refund-policy.pdf",
  },
  {
    title: "Undertaking (Student & Guardian)",
    file: "/downloads/undertaking-student-guardian.pdf",
  },
];

export default function AdmissionsPage() {
  return (
    <main className="dd-admission-page">
      {/* HERO */}
      <section className="dd-admission-hero">
        <div className="dd-admission-hero-inner">
          <div className="dd-admission-hero-copy">
            <span className="dd-admission-eyebrow">
              DD COLLEGE · ADMISSIONS 2026–27
            </span>

            <h1>
              Your Future
              <br />
              <span>Starts Here.</span>
            </h1>

            <p>
              Take the first step towards your career. Explore your programme
              options, review eligibility criteria, and apply online for
              admission to DD College.
            </p>

            <div className="dd-admission-hero-actions">
              <a
                href="https://admissions.ddcollege.in"
                className="dd-admission-primary-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Online <span>↗</span>
              </a>

              <a
                href="#eligibility"
                className="dd-admission-secondary-btn"
              >
                Check Eligibility
              </a>
            </div>

            <div className="dd-admission-trust-row">
              <span>✓ Programme Information</span>
              <span>✓ Admission Guidance</span>
            </div>
          </div>

          <div className="dd-admission-hero-card">
            <span className="dd-admission-card-label">ADMISSIONS OPEN</span>
            <h2>2026–27</h2>
            <div className="dd-admission-gold-line" />
            <p>
              Choose your programme, check the eligibility requirements and
              take the next step towards your professional future.
            </p>
            <a href="#apply-online">
              Explore Application Options <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* APPLY ONLINE */}
      <section className="dd-apply-online" id="apply-online">
        <div className="dd-apply-container">
          <div className="dd-apply-heading">
            <span className="dd-admission-section-label">
              BEGIN YOUR JOURNEY
            </span>
            <h2>APPLY ONLINE</h2>
            <p>
              Start your admission application through the official DD College
              admission portal.
            </p>
          </div>

          <div className="dd-apply-grid">
            <article className="dd-apply-card">
              <a
                href="https://admissions.ddcollege.in"
                className="dd-apply-image dd-apply-image-start"
                aria-label="Start your application for admission"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Start your Application for Admission</span>
              </a>

              <div className="dd-apply-card-body">
                <p>
                  Ready to apply for your chosen programme? Visit the official
                  portal to begin your admission application.
                </p>

                <a
                  href="https://admissions.ddcollege.in"
                  className="dd-apply-card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Apply Now</span>
                  <span className="dd-apply-chevron">›</span>
                </a>
              </div>
            </article>

            <article className="dd-apply-card">
              <a
                href="https://admissions.ddcollege.in"
                className="dd-apply-image dd-apply-image-existing"
                aria-label="Continue your admission application"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Already started your application?</span>
              </a>

              <div className="dd-apply-card-body">
                <p>
                  Already registered? Visit the admission portal to access
                  the options available for your application.
                </p>

                <a
                  href="https://admissions.ddcollege.in"
                  className="dd-apply-card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Continue Application</span>
                  <span className="dd-apply-chevron">›</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY CRITERIA */}
      <section className="dd-eligibility-section" id="eligibility">
        <div className="dd-eligibility-container">
          <div className="dd-eligibility-heading">
            <span className="dd-admission-section-label">
              KNOW BEFORE YOU APPLY
            </span>
            <h2>Eligibility Criteria</h2>
            <p>
              Review the general eligibility information for your preferred
              programme before starting your application.
            </p>
          </div>

          <div className="dd-eligibility-grid">
            {eligibilityCriteria.map((item) => (
              <article className="dd-eligibility-card" key={item.number}>
                <span className="dd-eligibility-number">{item.number}</span>

                <div className="dd-eligibility-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span className="dd-eligibility-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>

          <div className="dd-eligibility-note">
            <div className="dd-eligibility-note-icon" aria-hidden="true">
              i
            </div>

            <div>
              <h3>Please Note</h3>
              <p>
                These are general guidelines, not confirmed programme-specific
                admission rules. Exact eligibility, required subjects, minimum
                marks and other conditions should be verified against the
                official programme guidelines and applicable regulations.
              </p>
            </div>
          </div>

          <div className="dd-eligibility-cta">
            <div>
              <span>READY TO TAKE THE NEXT STEP?</span>
              <h3>Start your admission application.</h3>
            </div>

            <a
              href="https://admissions.ddcollege.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Online <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* DOWNLOADABLES */}
      <section className="dd-downloadables" id="downloadables">
        <div className="dd-download-container">
          <div className="dd-download-heading">
            <span className="dd-admission-section-label">
              ADMISSION RESOURCES
            </span>
            <h2>DOWNLOADABLES</h2>
            <p>
              Access important admission forms, documents and policies.
            </p>
          </div>

          <div className="dd-download-grid">
            {downloadableFiles.map((item) => (
              <a
                key={item.title}
                href={item.file}
                className="dd-download-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="dd-pdf-icon"
                  viewBox="0 0 64 76"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M9 3H39L57 21V69H9V3Z"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M39 4V21H56"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 49C23 37 29 27 29 20C29 15 26 15 25 20C22 31 33 46 43 47C49 48 48 42 41 41C32 39 21 45 16 49Z"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <text
                    x="32"
                    y="63"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="800"
                    fill="currentColor"
                  >
                    PDF
                  </text>
                </svg>

                <span className="dd-download-title">{item.title}</span>
                <span className="dd-download-action">Open PDF ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}