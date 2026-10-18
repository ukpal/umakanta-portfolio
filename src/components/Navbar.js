
"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav
        className="container site-nav"
        aria-label="Main navigation"
      >
        <a
          href="/"
          className="brand-mark"
          aria-label="Umakanta Pal — home"
          onClick={closeMenu}
        >
          UP<span>.</span>
        </a>

        <div className="nav-desktop">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link-custom"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="button-lime nav-contact"
        >
          Let's talk
          <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          className="nav-menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <div
          id="mobile-navigation"
          className={`nav-mobile ${menuOpen ? "is-open" : ""}`}
          aria-hidden={!menuOpen}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-mobile-link"
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
            >
              {link.label}
              <ArrowUpRight size={17} />
            </a>
          ))}

          <a
            href="#contact"
            className="button-lime mobile-contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            Get in touch
            <ArrowUpRight size={17} />
          </a>
        </div>
      </nav>
    </header>
  );
}
