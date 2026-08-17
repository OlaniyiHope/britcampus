
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

const relatedProgrammes = [
  { name: "Computer Engineering with Software Systems", icon: "fas fa-microchip", color: "pg-2" },
  { name: "Electrical/Electronic Engineering", icon: "fas fa-bolt", color: "pg-4" },
  { name: "Statistics with Data Science", icon: "fas fa-chart-line", color: "pg-5" },
];

export default function CourseDetails(): JSX.Element {
  return (
    <>
   <Header />

 
      <section className="subhero">
        <div className="wrap">
          <div className="crumb">
            <a href="index.html">Home</a>
            <i className="fas fa-chevron-right"></i>
            <a href="course-details.html">Programmes</a>
            <i className="fas fa-chevron-right"></i>
            <span>Accountancy</span>
          </div>

          <h1>Accountancy with Digital &amp; Cloud Accounting</h1>
          <p className="lede">
            Modern-day accounting practice — beyond the traditional syllabus, into digital taxation,
            Xero, Sage and cloud accounting systems.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="course-layout">
            <div className="course-body">
              <div className="course-hero-photo">
                <span className="tag">National Diploma</span>
                <i className="fas fa-coins"></i>
              </div>

              <h2>Programme overview</h2>
              <p>
                Our Accountancy programme covers modern-day accounting practice. We don't just teach
                traditional accounting — we go above and beyond to teach Digital &amp; Cloud Accounting.
              </p>
              <p>
                Students learn financial audits, financial reporting, taxation, auditing, forensic
                accounting, corporate finance, business recovery and insolvency, and modern accounting
                systems and processes.
              </p>
              <p>
                Beyond standard accounting skills, students learn digital taxation, Xero, Sage and modern
                cloud accounting systems, and how to perform "digital health checks" on a client's
                financial data. We also teach students to use digital software to complete bookkeeping duties.
              </p>
              <p>
                Students get the opportunity to pursue international and national professional
                qualifications such as AAT, ACCA and ICAN, in line with our aim of making every graduate
                globally competitive.
              </p>

              <h2>Admission requirements</h2>
              <ul>
                <li><i className="fas fa-check"></i> Admission into National Diploma (ND) programmes is through the Universal Tertiary Matriculation Examination (UTME) organised by JAMB, meeting the prescribed cut-off mark.</li>
                <li><i className="fas fa-check"></i> Candidates must have at least five credits in relevant SSCE/GCE 'O' Level subjects.</li>
                <li><i className="fas fa-check"></i> Credits in Mathematics, English Language, and any other three subjects from Economics, Biology, Government, Commerce, Agricultural Science, Business Studies, or Geography.</li>
              </ul>

              <h2>How you're assessed</h2>
              <p>
                Our assessment methodology focuses on what a student can <em>do</em>, rather than what they can
                write during examinations — students cannot pass a course by examination alone.
              </p>
              <ul>
                <li><i className="fas fa-check"></i> Coursework: presentations, assignments, report writing, in-class tests, research and project work.</li>
                <li><i className="fas fa-check"></i> Individual and group projects assessed through written report, practical demonstration and oral examination.</li>
              </ul>

              <a href="signup.html" className="btn btn-gold" style={{ marginTop: 24 }}>
                <i className="fas fa-arrow-right"></i> Apply Now
              </a>
            </div>

            <aside className="course-side">
              <div className="course-fact">
                <h5>Programme Facts</h5>
                <dl>
                  <div className="row"><dt>Academic level</dt><dd>National Diploma (ND)</dd></div>
                  <div className="row"><dt>Full-time duration</dt><dd>2 years</dd></div>
                  <div className="row"><dt>Part-time duration</dt><dd>3 years</dd></div>
                  <div className="row"><dt>Campus</dt><dd>Akure, Ondo State</dd></div>
                  <div className="row"><dt>Tuition (home, per sem.)</dt><dd>₦80,000</dd></div>
                </dl>
              </div>

              <div className="course-fact">
                <h5>Related Programmes</h5>
                <dl style={{ gap: 14 }}>
                  <div className="row" style={{ border: "none", padding: 0 }}>
                    <dt><a href="course-details.html" style={{ textDecoration: "none", color: "var(--navy-900)" }}>Statistics with Data Science</a></dt>
                  </div>
                  <div className="row" style={{ border: "none", padding: 0 }}>
                    <dt><a href="course-details.html" style={{ textDecoration: "none", color: "var(--navy-900)" }}>Computer Science with Digital Media</a></dt>
                  </div>
                  <div className="row" style={{ border: "none", padding: 0 }}>
                    <dt><a href="course-details.html" style={{ textDecoration: "none", color: "var(--navy-900)" }}>Hotel &amp; Hospitality Management</a></dt>
                  </div>
                </dl>
              </div>

              <a
                href="tuition-fees.html"
                className="link-arrow"
                style={{
                  justifyContent: "center",
                  background: "var(--ivory)",
                  border: "1px solid var(--line-light)",
                  borderRadius: "var(--radius)",
                  padding: "18px",
                }}
              >
                View full fee schedule <i className="fas fa-arrow-right"></i>
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="dark section-tight">
        <div className="wrap">
          <div className="head-row section-head" style={{ marginBottom: 56 }}>
            <div>
              <div className="ribbon"><i className="fas fa-graduation-cap"></i> More Programmes</div>
              <h2 className="serif" style={{ marginTop: 24 }}>
                Explore our other National Diploma courses
              </h2>
            </div>
          </div>

          <div className="prog-grid">
            {relatedProgrammes.map((programme) => (
              <div key={programme.name} className="prog-card">
                <div className={`prog-photo ${programme.color}`}>
                  <span className="tag">ND · 2 yrs</span>
                  <i className={programme.icon}></i>
                </div>

                <div className="prog-body">
                  <h4 className="serif">{programme.name}</h4>
                  <div className="meta">
                    <span>Full &amp; part-time</span>
                    <a href="course-details.html">Details →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-col">
              <div className="foot-brand">
                <div className="brand-mark">BP</div>
                <b>British Poly</b>
              </div>

              <p>
                Km 5 Akure–Ado Expressway, Igoba, by Road Maker Village, Akure, Ondo State, Nigeria.
              </p>

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