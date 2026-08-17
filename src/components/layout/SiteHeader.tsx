import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

type Social = { platform: string; href: string; Icon: React.ComponentType };

const socialLinks: Social[] = [
  { platform: "Facebook", href: "#", Icon: FaFacebookF },
  { platform: "Instagram", href: "#", Icon: FaInstagram },
  { platform: "Twitter", href: "#", Icon: FaXTwitter },
  { platform: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { platform: "YouTube", href: "#", Icon: FaYoutube },
];

export default function Header(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div className="contacts">
            <a href="tel:+2347073404445">
              <i className="fas fa-phone"></i>+234 707 340 4445
            </a>
            <a href="mailto:admissions@britishpoly.edu.ng">
              <i className="fas fa-envelope"></i>admissions@britishpoly.edu.ng
            </a>
            <a href="#">
              <i className="fas fa-location-dot"></i>Akure, Ondo State
            </a>
          </div>

          <div className="social">
            {socialLinks.map((s) => (
              <a key={s.platform} href={s.href} aria-label={s.platform}>
                <s.Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <header className="nav">
        <div className="wrap">
          <a href="/" className="brand">
            <div className="brand-mark">BP</div>
            <div className="brand-name">
              <b>British Poly</b>
              <span>Transatlantic Polytechnic</span>
            </div>
          </a>

          <nav className={`links ${mobileOpen ? "is-open" : ""}`}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/course">Programmes</a>
            <a href="/tuition">Tuition Fees</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="navbtns">
            <a href="/login" className="btn btn-ghost">Login to Portal</a>
            <a href="/signup" className="btn btn-gold">
              <i className="fas fa-arrow-right"></i> Apply Now
            </a>
            <button
              className="navtoggle"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((s) => !s)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
