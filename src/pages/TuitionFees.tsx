import React, { useState } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { IconType } from "react-icons";
import Header from "@/components/layout/SiteHeader";

interface SocialLink {
  platform: string;
  handle: string;
  icon: IconType;
}

const socialLinks: SocialLink[] = [
  { platform: "Facebook", handle: "@nationaldailynewspaper", icon: FaFacebookF },
  { platform: "Instagram", handle: "@nationaldailynewspaper", icon: FaInstagram },
  { platform: "Twitter", handle: "@nationaldailynewspaper", icon: FaXTwitter },
  { platform: "LinkedIn", handle: "@nationaldailynewspaper", icon: FaLinkedinIn },
  { platform: "YouTube", handle: "@nationaldailynewspaper", icon: FaYoutube },
];

export default function TuitionFees(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mobileStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: "#0a1c33",
    padding: "24px 32px",
    gap: "20px",
    borderTop: "1px solid rgba(227,195,116,.2)",
  };

  return (
    <>
    <Header />
       
    

      <section className="subhero">
        <div className="wrap">
          <div className="crumb">
            <a href="index.html">Home</a>
            <i className="fas fa-chevron-right"></i>
            <span>Tuition Fees</span>
          </div>
          <h1>Fees</h1>
          <p className="lede">
            We believe every student deserves access to quality education regardless of background.
            Our fees are kept close to subsidised public-school rates, with generous scholarships
            for students from lower-income households.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="fee-intro">
            <div className="fee-intro-card">
              <h4 className="serif">
                <i className="fas fa-graduation-cap" style={{ color: "var(--gold-600)", marginRight: 10 }}></i>
                Tuition fees
              </h4>
              <p>
                Cover the core of your course: lectures, seminars and tutorials, course admin,
                course materials, guest speakers, and pastoral and support services for students.
              </p>
            </div>

            <div className="fee-intro-card">
              <h4 className="serif">
                <i className="fas fa-layer-group" style={{ color: "var(--gold-600)", marginRight: 10 }}></i>
                Other fees
              </h4>
              <p>
                Cover the rest of academic life and student wellbeing — labs and studios, libraries
                and IT, field trips, and access to campus facilities and equipment.
              </p>
            </div>
          </div>

          <div className="section-head">
            <div className="ribbon"><i className="fas fa-earth-africa"></i> Home vs. International</div>
            <h2 className="serif" style={{ marginTop: 24 }}>Who pays what</h2>
            <p>
              <strong>Home students</strong> are those ordinarily resident in Nigeria for the three years
              before their course start date. <strong>International students</strong> are those who are not
              — otherwise known as foreign students. International tuition is payable in British Pounds Sterling,
              and can be made in up to two instalments, with at least half due before registration.
            </p>
          </div>

          <div className="fee-table-wrap">
            <div className="fee-table-head">
              <div>
                <h3 className="serif">2026/2027 Session — One-off Fees</h3>
                <span>New students only</span>
              </div>
            </div>

            <table className="fees">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Note</th>
                  <th className="amount">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Application form</td>
                  <td className="note">New students only, one-off</td>
                  <td className="amount">₦5,000</td>
                </tr>
                <tr>
                  <td>Acceptance fee</td>
                  <td className="note">New students only, one-off</td>
                  <td className="amount">₦40,000</td>
                </tr>
                <tr>
                  <td>Digital ID card</td>
                  <td className="note">New students only, one-off</td>
                  <td className="amount">₦5,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="fee-table-wrap">
            <div className="fee-table-head">
              <div>
                <h3 className="serif">Tuition Fee</h3>
                <span>Per semester, unless stated otherwise</span>
              </div>
            </div>

            <table className="fees">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Note</th>
                  <th className="amount">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Full-time ND — Home student</td>
                  <td className="note">Payable in up to 2 instalments</td>
                  <td className="amount">₦80,000 / semester<br /><span className="note">(₦160,000 / year)</span></td>
                </tr>
                <tr>
                  <td>Part-time ND — Home student</td>
                  <td className="note">Payable in up to 2 instalments</td>
                  <td className="amount">₦60,000 / semester<br /><span className="note">(₦120,000 / year)</span></td>
                </tr>
                <tr>
                  <td>Full-time ND — International student</td>
                  <td className="note">Per semester</td>
                  <td className="amount">£500</td>
                </tr>
                <tr>
                  <td>Part-time ND — International student</td>
                  <td className="note">Per semester</td>
                  <td className="amount">£100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="scholarship-strip">
            <div className="pill"><i className="fas fa-award"></i> 100% scholarship students pay nothing on tuition</div>
            <div className="pill"><i className="fas fa-award"></i> 50% scholarship students pay half of the tuition above</div>
          </div>

          <div className="fee-table-wrap" style={{ marginTop: 56 }}>
            <div className="fee-table-head">
              <div>
                <h3 className="serif">Other Fees</h3>
                <span>Mandatory, applies to Home &amp; International students · per semester unless noted</span>
              </div>
            </div>

            <table className="fees">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Note</th>
                  <th className="amount">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Medical</td><td className="note">Per semester</td><td className="amount">₦10,000</td></tr>
                <tr><td>Examination</td><td className="note">Per semester</td><td className="amount">₦10,000</td></tr>
                <tr><td>Caution</td><td className="note">Per semester</td><td className="amount">₦5,000</td></tr>
                <tr><td>Digital library &amp; eBooks subscription</td><td className="note">Per semester</td><td className="amount">₦10,000</td></tr>
                <tr><td>Student handbook</td><td className="note">—</td><td className="amount">Free</td></tr>
                <tr><td>Technology &amp; internet fee</td><td className="note">Per semester</td><td className="amount">₦10,000</td></tr>
                <tr><td>Laboratory, workshop &amp; studio fees</td><td className="note">Per semester</td><td className="amount">₦15,000</td></tr>
              </tbody>
            </table>
          </div>

          <div className="fee-table-wrap" style={{ marginTop: 56 }}>
            <div className="fee-table-head">
              <div>
                <h3 className="serif">Hostel Accommodation &amp; Guest House</h3>
                <span>Optional — students may also arrange their own accommodation</span>
              </div>
            </div>

            <table className="fees">
              <thead>
                <tr>
                  <th>Accommodation</th>
                  <th>Note</th>
                  <th className="amount">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Standard hostel (on campus, shared)</td><td className="note">Per year</td><td className="amount">₦100,000</td></tr>
                <tr><td>Ensuite hostel (off campus)</td><td className="note">Per year</td><td className="amount">₦100,000</td></tr>
                <tr><td>Executive lodge (Hostel Annex, off campus @ Gadson)</td><td className="note">Per annum</td><td className="amount">₦100,000</td></tr>
                <tr><td>Polytechnic Guest House (Atlantic Suites, Alagbaka, Akure)</td><td className="note">Per night</td><td className="amount">₦20,000</td></tr>
              </tbody>
            </table>
          </div>

          <div className="fee-note-block">
            <h5>
              <i className="fas fa-circle-info" style={{ marginRight: 8 }}></i>
              Looking for the 2025/2026 fee schedule?
            </h5>
            <p>
              Fees for the previous session are on record with the Bursary and available through the student portal.
              Contact <a href="mailto:admissions@britishpoly.edu.ng" style={{ color: "var(--gold-700)", fontWeight: 600 }}>admissions@britishpoly.edu.ng</a>
              for a copy, or log in to the portal to view your account.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="cta-band">
            <div className="ribbon"><i className="fas fa-paper-plane"></i> Admissions Open</div>
            <h2 className="serif">Ready to take your career to a global level?</h2>
            <p>Applications for the 2026/2027 session are open. Start your application today or speak with our admissions team.</p>
            <div className="ctas">
              <a href="signup.html" className="btn btn-gold"><i className="fas fa-arrow-right"></i> Start Application</a>
              <a href="tel:+2347073404445" className="btn btn-ghost"><i className="fas fa-phone"></i> Call Admissions</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-col">
              <div className="foot-brand"><div className="brand-mark">BP</div><b>British Poly</b></div>
              <p>Km 5 Akure–Ado Expressway, Igoba, by Road Maker Village, Akure, Ondo State, Nigeria.</p>
              <div className="foot-social">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.platform} href="#" aria-label={item.platform}>
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="foot-col">
              <h5>Explore</h5>
              <a href="about.html">About Us</a>
              <a href="course-details.html">Programmes</a>
              <a href="tuition-fees.html">Tuition Fees</a>
              <a href="signup.html">Admissions</a>
            </div>

            <div className="foot-col">
              <h5>Contact</h5>
              <a href="tel:+2347073404445">+234 707 340 4445</a>
              <a href="tel:+2348110750723">+234 811 075 0723</a>
              <a href="mailto:admissions@britishpoly.edu.ng">admissions@britishpoly.edu.ng</a>
            </div>

            <div className="foot-col">
              <h5>Portal</h5>
              <a href="login.html">Student Login</a>
              <a href="login.html">Staff Login</a>
              <a href="index.html#contact">Contact Support</a>
            </div>
          </div>

          <div className="foot-bottom">© 2026 British Transatlantic Polytechnic, Akure. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
