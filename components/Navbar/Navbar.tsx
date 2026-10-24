
"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Menu,
  Phone,
  X,
} from "lucide-react";

import "./Navbar.css";

type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
};

type MenuTreeProps = {
  items: MenuItem[];
  depth?: number;
  closeMenu: () => void;
};

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About DD College", href: "/about" },
      { label: "Our Vision & Mission", href: "/about/vision-mission" },
      { label: "Leadership", href: "/about/leadership" },
      {
        label: "Approvals & Affiliations",
        children: [
          { label: "Approvals", href: "/affiliation/approvals" },
          { label: "Affiliations", href: "/affiliation" },
          { label: "Accreditations", href: "/affiliation/accreditations" },
        ],
      },
    ],
  },
  {
    label: "Academics",
    href: "/courses",
    children: [
      {
        label: "UNDER GRADUATE (U.G.) PROGRAMS",
        children: [
          { label: "B.Sc. (C.B.Z.)", href: "/courses/bsc-cbz" },
          { label: "B.Sc. (P.C.M.)", href: "/courses/bsc-pcm" },
          { label: "B.Sc. (Hons.)", href: "/courses/bsc-hons" },
          { label: "B.Com", href: "/courses/bcom" },
          { label: "B.Com (Hons.)", href: "/courses/bcom-hons" },
          { label: "B.A.", href: "/courses/ba" },
          { label: "B.Ed.", href: "/courses/bed" },
          { label: "LL.B.", href: "/courses/llb" },
          { label: "B.A. LL.B.", href: "/courses/ba-llb" },
          { label: "B.Sc. (C.S.)", href: "/courses/bsc-cs" },
          { label: "B.C.A.", href: "/courses/bca" },
          { label: "B.Sc. I.T.", href: "/courses/bsc-it" },
          { label: "B.A. (Yoga)", href: "/courses/ba-yoga" },
        ],
      },
      {
        label: "POST GRADUATE (P.G.) PROGRAMS",
        children: [
          { label: "M.Sc. Physics", href: "/courses/msc-physics" },
          { label: "M.Sc. Chemistry", href: "/courses/msc-chemistry" },
          { label: "M.Sc. Mathematics", href: "/courses/msc-mathematics" },
          { label: "M.Sc. Zoology", href: "/courses/msc-zoology" },
          { label: "M.Sc. Botany", href: "/courses/msc-botany" },
          { label: "M.Sc. Horticulture", href: "/courses/msc-horticulture" },
          { label: "M.Sc. Agronomy", href: "/courses/msc-agronomy" },
          { label: "M.A. English", href: "/courses/ma-english" },
          { label: "M.A. History", href: "/courses/ma-history" },
          {
            label: "M.A. Political Science",
            href: "/courses/ma-political-science",
          },
          { label: "M.Com", href: "/courses/mcom" },
          { label: "M.A. Yoga", href: "/courses/ma-yoga" },
        ],
      },
      {
        label: "DIPLOMA PROGRAMS",
        children: [
          { label: "G.N.M. Nursing", href: "/courses/gnm-nursing" },
          { label: "D. Pharma", href: "/courses/d-pharma" },
          { label: "B.Sc. Nursing", href: "/courses/bsc-nursing" },
        ],
      },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Apply Online", href: "/admissions/apply" },
      { label: "Admission Process", href: "/admissions/process" },
      { label: "Eligibility Criteria", href: "/admissions/eligibility" },
      { label: "Fees & Scholarships", href: "/admissions/fees" },
      { label: "FAQs", href: "/admissions/faqs" },
    ],
  },
  {
    label: "Campus Life",
    href: "/campus",
    children: [
      { label: "Campus Facilities", href: "/campus/facilities" },
      { label: "Clubs & Activities", href: "/campus/activities" },
      { label: "Hostel Facilities", href: "/campus/hostel" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    label: "Placements",
    href: "/placements",
    children: [
      { label: "Placement Overview", href: "/placements" },
      { label: "Our Recruiters", href: "/placements/recruiters" },
      {
        label: "Career Development",
        href: "/placements/career-development",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

function MenuTree({
  items,
  depth = 0,
  closeMenu,
}: MenuTreeProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const generatedId = useId();

  const toggleItem = (label: string) => {
    setOpenItems((previous) =>
      previous.includes(label)
        ? previous.filter((item) => item !== label)
        : [...previous, label]
    );
  };

  const handleLinkClick = () => {
    setOpenItems([]);
    closeMenu();
  };

  return (
    <ul className={`nav-list nav-depth-${depth}`}>
      {items.map((item, index) => {
        const hasChildren = Boolean(item.children?.length);
        const isOpen = openItems.includes(item.label);
        const submenuId = `${generatedId}-${depth}-${index}`;

        return (
          <li
            key={`${depth}-${item.label}`}
            className={[
              "nav-item",
              hasChildren ? "has-children" : "",
              isOpen ? "submenu-open" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="nav-item-row">
              {item.href ? (
                <Link
                  href={item.href}
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  className="nav-link nav-link-button"
                  aria-expanded={isOpen}
                  aria-controls={submenuId}
                  onClick={() => toggleItem(item.label)}
                >
                  {item.label}
                </button>
              )}

              {hasChildren && (
                <button
                  type="button"
                  className="submenu-toggle"
                  aria-label={`${isOpen ? "Close" : "Open"} ${item.label} submenu`}
                  aria-expanded={isOpen}
                  aria-controls={submenuId}
                  onClick={() => toggleItem(item.label)}
                >
                  {depth === 0 ? (
                    <ChevronDown size={15} aria-hidden="true" />
                  ) : (
                    <ChevronRight size={15} aria-hidden="true" />
                  )}
                </button>
              )}
            </div>

            {hasChildren && (
              <div
                id={submenuId}
                className="submenu-wrapper"
              >
                <MenuTree
                  items={item.children!}
                  depth={depth + 1}
                  closeMenu={closeMenu}
                />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-menu-active", mobileOpen);

    return () => {
      document.body.classList.remove("nav-menu-active");
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1025px)");
    const handleResize = () => {
      if (mediaQuery.matches) setMobileOpen(false);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className={`dd-navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar-container">
        <Link
          href="/"
          className="navbar-brand"
          aria-label="DD College Home"
          onClick={closeMenu}
        >
          <Image
            src="/logos/college.png"
            alt="DD College Logo"
            width={180}
            height={70}
            priority
            className="navbar-logo"
            sizes="(max-width: 480px) 100px, (max-width: 1024px) 135px, 145px"
          />

          <span className="brand-divider" aria-hidden="true" />

          <span className="brand-text">
            <strong>DD COLLEGE</strong>
            <small>Education • Excellence • Empowerment</small>
          </span>
        </Link>

        <nav className="navbar-desktop-menu" aria-label="Main navigation">
          <MenuTree items={menuItems} closeMenu={closeMenu} />
        </nav>

        <Link
          href="/admissions/apply"
          className="navbar-apply-btn"
          onClick={closeMenu}
        >
          <GraduationCap size={18} aria-hidden="true" />
          <span>Apply Now</span>
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((previous) => !previous)}
        >
          {mobileOpen ? (
            <X size={26} aria-hidden="true" />
          ) : (
            <Menu size={26} aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        className={`mobile-menu-overlay ${mobileOpen ? "overlay-visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav
        id="mobile-navigation"
        className={`mobile-navigation ${
          mobileOpen ? "mobile-navigation-open" : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <div className="mobile-nav-heading">
          <div>
            <span className="mobile-nav-eyebrow">WELCOME TO</span>
            <h2>DD College</h2>
          </div>

          <button
            type="button"
            className="mobile-close-button"
            onClick={closeMenu}
            aria-label="Close navigation"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        <div className="mobile-menu-content">
          <MenuTree items={menuItems} closeMenu={closeMenu} />
        </div>

        <div className="mobile-menu-footer">
          <Link
            href="/admissions/apply"
            className="mobile-apply-btn"
            onClick={closeMenu}
          >
            <GraduationCap size={19} aria-hidden="true" />
            <span>Apply for Admission</span>
          </Link>

          <a
            href="tel:+911234567890"
            className="mobile-contact-link"
            onClick={closeMenu}
          >
            <Phone size={17} aria-hidden="true" />
            <span>Contact Admissions</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
