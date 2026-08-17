
import Footer from "@/components/layout/Footer";


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

export default function About(): JSX.Element {
  return (
    <>
    <Header />

      <section className="subhero">
        <div className="wrap">
          <div className="crumb">
            <a href="index.html">Home</a>
            <i className="fas fa-chevron-right"></i>
            <span>About Us</span>
          </div>
          <h1>Welcome to the British Transatlantic Polytechnic</h1>
          <p className="lede">
            A cutting-edge higher institution focused on skills and technological training,
            approved by the Federal Ministry of Education and recognised by the National Board
            for Technical Education.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="about-split">
            <div className="about-visual">
              <div className="about-photo"><i className="fas fa-building-columns"></i></div>
              <div className="about-badge"><b>NBTE</b><span>Recognised</span></div>
            </div>

            <div className="about-copy">
              <div className="ribbon"><i className="fas fa-landmark"></i> Who We Are</div>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(1.8rem,3vw,2.4rem)",
                  margin: "24px 0 24px",
                  color: "var(--navy-900)",
                  lineHeight: 1.25,
                }}
              >
                Built for skills, not just certificates.
              </h2>

              <p>
                British Transatlantic Polytechnic (British Poly) is a cutting-edge higher
                institution that focuses on skills and technological training, building a
                workforce that impacts positively on jobs, employment and industrial expansion.
              </p>
              <p>
                British Poly is approved by the Federal Ministry of Education and recognised
                by the National Board for Technical Education in Nigeria.
              </p>
              <p>
                The campus is located in Akure, the capital city of Nigeria's Sunshine State,
                Ondo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="wrap">
          <div className="section-head center">
            <div className="ribbon"><i className="fas fa-star"></i> What Sets Us Apart</div>
            <h2 className="serif" style={{ marginTop: 24 }}>
              British Poly is unique by all standards
            </h2>
          </div>

          <div className="feat-grid">
            <div className="feat" style={{ background: "var(--navy-800)", borderColor: "var(--line-dark)" }}>
              <div className="ic"><i className="fas fa-screwdriver-wrench"></i></div>
              <h4 className="serif" style={{ color: "var(--ivory)" }}>Practical-led learning methodology</h4>
              <p style={{ color: "rgba(249,244,232,.7)" }}>
                Our emphasis is on skills rather than certificates. All our courses focus on practical
                and skills-acquisition elements that prepare students for the workplace — graduating with
                the knowledge to thrive in their careers and solve modern-day problems.
              </p>
            </div>

            <div className="feat" style={{ background: "var(--navy-800)", borderColor: "var(--line-dark)" }}>
              <div className="ic"><i className="fas fa-user-tie"></i></div>
              <h4 className="serif" style={{ color: "var(--ivory)" }}>Lecturers/tutors from industry</h4>
              <p style={{ color: "rgba(249,244,232,.7)" }}>
                We recruit lecturers and tutors with industry experience who are skilful and
                well-grounded in their professions, so they transfer their skills to students.
                We offer flexible learning supports and tutorial options.
              </p>
            </div>

            <div className="feat" style={{ background: "var(--navy-800)", borderColor: "var(--line-dark)" }}>
              <div className="ic"><i className="fas fa-flask"></i></div>
              <h4 className="serif" style={{ color: "var(--ivory)" }}>World-class equipment &amp; facilities</h4>
              <p style={{ color: "rgba(249,244,232,.7)" }}>
                British Poly has world-class training workshops, laboratories and studios. Most of our
                equipment is brought in from Britain, and many classrooms have multimedia learning
                facilities of international standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head center">
            <div className="ribbon"><i className="fas fa-compass"></i> What We Stand For</div>
            <h2 className="serif" style={{ marginTop: 24 }}>Our vision &amp; mission</h2>
          </div>

          <div
            className="feat-grid"
            style={{ gridTemplateColumns: "1fr 1fr", maxWidth: 960, margin: "0 auto" }}
          >
            <div className="panel">
              <div className="ic" style={{ marginBottom: 24 }}><i className="fas fa-eye"></i></div>
              <h4 className="serif" style={{ fontSize: "1.2rem", marginBottom: 14, color: "var(--navy-900)" }}>Vision</h4>
              <p style={{ color: "var(--text-dim)" }}>
                To be a leading provider of cutting-edge and world-class Polytechnic education in Africa.
              </p>
            </div>

            <div className="panel">
              <div className="ic" style={{ marginBottom: 24 }}><i className="fas fa-bullseye"></i></div>
              <h4 className="serif" style={{ fontSize: "1.2rem", marginBottom: 14, color: "var(--navy-900)" }}>Mission</h4>
              <p style={{ color: "var(--text-dim)" }}>
                Building a workforce that impacts positively on jobs, employment and industrial expansion
                — creating a better future for people through world-class polytechnic education and
                technological innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap-narrow">
          <div className="section-head">
            <div className="ribbon"><i className="fas fa-list-check"></i> Goals &amp; Objectives</div>
            <h2 className="serif" style={{ marginTop: 24 }}>Four goals guide everything we do</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <div>
              <h3 className="serif" style={{ color: "var(--navy-900)", fontSize: "1.15rem", marginBottom: 18 }}>
                1. Produce professionally competent graduates
              </h3>
              <p style={{ color: "var(--text-dim)", marginBottom: 20 }}>
                Responsible Nigerians and global citizens, formed through a quality teaching and learning environment.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <li style={{ display: "flex", gap: 14, color: "var(--navy-900)", fontSize: ".95rem" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--gold-600)", marginTop: 4, flexShrink: 0 }}></i>
                  Enhance curricular offerings compliant with quality assurance and responsive to local, regional and global needs
                </li>
                <li style={{ display: "flex", gap: 14, color: "var(--navy-900)", fontSize: ".95rem" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--gold-600)", marginTop: 4, flexShrink: 0 }}></i>
                  Develop faculty expertise aligned to specific polytechnic disciplines
                </li>
                <li style={{ display: "flex", gap: 14, color: "var(--navy-900)", fontSize: ".95rem" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--gold-600)", marginTop: 4, flexShrink: 0 }}></i>
                  Optimise ICT applications in teaching and learning
                </li>
                <li style={{ display: "flex", gap: 14, color: "var(--navy-900)", fontSize: ".95rem" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--gold-600)", marginTop: 4, flexShrink: 0 }}></i>
                  Ensure a conducive learning environment at par with global standards
                </li>
              </ul>
            </div>

            <hr className="divider" />

            <div>
              <h3 className="serif" style={{ color: "var(--navy-900)", fontSize: "1.15rem", marginBottom: 18 }}>
                2. Generate new knowledge and innovative technology
              </h3>
              <p style={{ color: "var(--text-dim)", marginBottom: 20 }}>
                Responsive to local and global needs.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <li style={{ display: "flex", gap: 14, color: "var(--navy-900)", fontSize: ".95rem" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--gold-600)", marginTop: 4, flexShrink: 0 }}></i>
                  Generate knowledge and technology in support of industry
                </li>
                <li style={{ display: "flex", gap: 14, color: "var(--navy-900)", fontSize: ".95rem" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--gold-600)", marginTop: 4, flexShrink: 0 }}></i>
                  Support the research capabilities of faculty in their respective disciplines
                </li>
                <li style={{ display: "flex", gap: 14, color: "var(--navy-900)", fontSize: ".95rem" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--gold-600)", marginTop: 4, flexShrink: 0 }}></i>
                  Broaden research and development networks with leading research institutions
                </li>
              </ul>
            </div>

            <hr className="divider" />

            <div>
              <h3 className="serif" style={{ color: "var(--navy-900)", fontSize: "1.15rem", marginBottom: 18 }}>
                3. Improve the quality of lives
              </h3>
              <p style={{ color: "var(--text-dim)", marginBottom: 20 }}>
                Through the conduct of demand-driven extension services.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <li style={{ display: "flex", gap: 14, color: "var(--navy-900)", fontSize: ".95rem" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--gold-600)", marginTop: 4, flexShrink: 0 }}></i>
                  Design and implement responsive, sustainable community engagement programmes
                </li>
                <li style={{ display: "flex", gap: 14, color: "var(--navy-900)", fontSize: ".95rem" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--gold-600)", marginTop: 4, flexShrink: 0 }}></i>
                  Collaborate with key stakeholders on programmes through resource sharing
                </li>
                <li style={{ display: "flex", gap: 14, color: "var(--navy-900)", fontSize: ".95rem" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--gold-600)", marginTop: 4, flexShrink: 0 }}></i>
                  Document existing programmes as a basis for good practice
                </li>
              </ul>
            </div>

            <hr className="divider" />

            <div>
              <h3 className="serif" style={{ color: "var(--navy-900)", fontSize: "1.15rem", marginBottom: 18 }}>
                4. Strive for optimal institutional performance
              </h3>
              <p style={{ color: "var(--text-dim)", marginBottom: 20 }}>
                Sustaining good governance and sound management of the polytechnic's resources.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <li style={{ display: "flex", gap: 14, color: "var(--navy-900)", fontSize: ".95rem" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--gold-600)", marginTop: 4, flexShrink: 0 }}></i>
                  Provide quality services through a unified governance and ICT-driven management system
                </li>
                <li style={{ display: "flex", gap: 14, color: "var(--navy-900)", fontSize: ".95rem" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--gold-600)", marginTop: 4, flexShrink: 0 }}></i>
                  Inculcate the highest degree of commitment and professionalism in all undertakings
                </li>
                <li style={{ display: "flex", gap: 14, color: "var(--navy-900)", fontSize: ".95rem" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--gold-600)", marginTop: 4, flexShrink: 0 }}></i>
                  Uplift faculty and staff morale and competence through opportunities for growth
                </li>
                <li style={{ display: "flex", gap: 14, color: "var(--navy-900)", fontSize: ".95rem" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--gold-600)", marginTop: 4, flexShrink: 0 }}></i>
                  Upgrade physical plant and facilities responsive to stakeholder needs and international standards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="cta-band">
            <div className="ribbon"><i className="fas fa-paper-plane"></i> Admissions Open</div>
            <h2 className="serif">Ready to take your career to a global level?</h2>
            <p>
              Applications for the 2026/2027 session are open. Start your application today or
              speak with our admissions team.
            </p>
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

          <div className="foot-bottom">
            © 2026 British Transatlantic Polytechnic, Akure. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}