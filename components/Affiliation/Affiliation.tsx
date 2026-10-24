"use client";

import Image from "next/image";
import "./Affiliation.css";

const affiliations = [
  {
    name: "UTU",
    logo: "/images/BCI.png",
  },
  {
    name: "HNBGU",
    logo: "/images/sanskrit.png",
  },
  {
    name: "SDSUV",
    logo: "/images/UBTER.png",
  },
  {
    name: "UGC",
    logo: "/images/UGC.png",
  },
  {
    name: "PCI",
    logo: "/images/Shri.png",
  },
  {
    name: "NCTE",
    logo: "/images/NCTE.png",
  },
];

export default function Affiliation() {
  return (
    <section className="affiliation-section" id="affiliations">
      <div className="affiliation-container">

        {/* Heading */}
        <div className="affiliation-heading">
          <div className="affiliation-label">
            <span></span>
            Academic Recognition
          </div>

          <h2>
            Our <strong>Affiliations</strong>
          </h2>

          <p>
            Recognized and affiliated with reputed universities
            and regulatory institutions.
          </p>
        </div>

        {/* Logo Slider */}
        <div className="affiliation-slider">
          <div className="affiliation-track">

            {[...affiliations, ...affiliations].map((item, index) => (
              <div
                className="affiliation-logo-card"
                key={`${item.name}-${index}`}
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={140}
                  height={100}
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}