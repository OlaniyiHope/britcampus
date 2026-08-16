import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { IconType } from "react-icons";

interface SocialLink {
  platform: string;
  handle: string;
  icon: IconType;
}
const paragraphs: string[] = [
  "NationalDaily Newspaper is a trusted daily national newspaper dedicated to delivering accurate, timely, and balanced news to readers across the country. With a strong national presence and comprehensive coverage, we report on the stories that matter most—from politics, business, the economy, and education to health, sports, entertainment, technology, and lifestyle.",
"Our mission is to inform, educate, and empower the public through credible journalism that upholds the highest standards of integrity, fairness, and professionalism. We are committed to providing factual reporting, insightful analysis, and diverse perspectives that help our readers understand the issues shaping our nation.",
"At NationalDaily Newspaper, we believe that a well-informed society is the foundation of a strong democracy. Our team of experienced journalists and editors works tirelessly to deliver reliable news and compelling stories that inspire informed discussions and positive change.",
"As a truly national newspaper, we are committed to serving every region and every community, ensuring that the voices and experiences of people across the country are represented. Whether in print or through our digital platforms, National daily Newspaper remains your trusted source for credible news, insightful reporting, and dependable information—every day.",
];

const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    handle: "@nationaldailynewspaper",
    icon: FaFacebookF,
  },
  {
    platform: "Instagram",
    handle: "@nationaldailynewspaper",
    icon: FaInstagram,
  },
  {
    platform: "Twitter",
    handle: "@nationaldailynewspaper",
    icon: FaXTwitter,
  },
  {
    platform: "LinkedIn",
    handle: "@nationaldailynewspaper",
    icon: FaLinkedinIn,
  },
  {
    platform: "YouTube",
    handle: "@nationaldailynewspaper",
    icon: FaYoutube,
  },
];

export default function Home(): JSX.Element {
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div className="contacts">
            <a href="tel:+2347073404445"><i className="fas fa-phone"></i>+234 707 340 4445</a>
            <a href="mailto:admissions@britishpoly.edu.ng"><i className="fas fa-envelope"></i>admissions@britishpoly.edu.ng</a>
            <a href="#"><i className="fas fa-location-dot"></i>Akure, Ondo State</a>
          </div>
          <div className="social">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.platform} href="#" aria-label={s.platform}>
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <header className="nav">
        <div className="wrap">
          <a href="index.html" className="brand">
            <div className="brand-mark">BP</div>
            <div className="brand-name"><b>British Poly</b><span>Transatlantic Polytechnic</span></div>
          </a>
          <nav className="links">
            <a href="index.html" className="active">Home</a>
            <a href="about.html">About</a>
            <a href="course-details.html">Programmes</a>
            <a href="tuition-fees.html">Tuition Fees</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="navbtns">
            <a href="login.html" className="btn btn-ghost">Login to Portal</a>
            <a href="signup.html" className="btn btn-gold"><i className="fas fa-arrow-right"></i> Apply Now</a>
            <button className="navtoggle" aria-label="Toggle menu"><i className="fas fa-bars"></i></button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <div className="ribbon"><i className="fas fa-shield-halved"></i> Educating for Global Opportunities</div>
            <h1>A British-standard education, built to <em>land you the job.</em></h1>
            <p className="lede">National Diploma and short-course training in accounting, engineering, data, media and hospitality — taught by people who still work in the industry, on equipment built for it.</p>
            <div className="ctas">
              <a href="signup.html" className="btn btn-gold"><i className="fas fa-graduation-cap"></i> Apply for Admission</a>
              <a href="course-details.html" className="btn btn-ghost">View Programmes</a>
            </div>
            <div className="accred-line">
              <span><i className="fas fa-landmark"></i> Federal Ministry of Education</span>
              <span><i className="fas fa-certificate"></i> NBTE Recognised</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="crest-frame">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Coat_of_arms_of_Nigeria.svg/200px-Coat_of_arms_of_Nigeria.svg.png"
                alt="British Transatlantic Polytechnic crest"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              <h3 className="serif">Est. Akure, Ondo State</h3>
              <p>Approved &amp; Recognised Institution</p>
            </div>
            <div className="stat-float a">
              <i className="fas fa-book-open"></i>
              <div><b>10+</b><span>ND Programmes</span></div>
            </div>
            <div className="stat-float b">
              <i className="fas fa-award"></i>
              <div><b>15+</b><span>Short Courses</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="trust">
        <div className="wrap">
          <div className="item"><i className="fas fa-landmark"></i> Approved — Federal Ministry of Education</div>
          <div className="item"><i className="fas fa-certificate"></i> Recognised — National Board for Technical Education</div>
          <div className="item"><i className="fas fa-location-dot"></i> Km 5, Akure–Ado Expressway, Igoba</div>
        </div>
      </div>

      <section id="about">
        <div className="wrap">
          <div className="about-split">
            <div className="about-visual">
              <div className="about-photo"><i className="fas fa-building-columns"></i></div>
              <div className="about-badge"><b>NBTE</b><span>Recognised</span></div>
            </div>
            <div className="about-copy">
              <div className="ribbon"><i className="fas fa-landmark"></i> Who We Are</div>
              <h2 className="serif" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", margin: "24px 0 24px", color: "var(--navy-900)", lineHeight: 1.25 }}>We train people for where the work is heading, not where it used to be.</h2>
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <ul className="about-list">
                <li><i className="fas fa-check-circle"></i> Industry-recruited lecturers</li>
                <li><i className="fas fa-check-circle"></i> UK-sourced lab equipment</li>
                <li><i className="fas fa-check-circle"></i> Practical-led assessment</li>
                <li><i className="fas fa-check-circle"></i> Part-time work placements</li>
              </ul>
              <a href="about.html" className="link-arrow">Read our full story <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      <section className="dark" id="programmes">
        <div className="wrap">
          <div className="head-row section-head" style={{ marginBottom: 64 }}>
            <div>
              <div className="ribbon"><i className="fas fa-graduation-cap"></i> National Diploma</div>
              <h2 className="serif" style={{ marginTop: 24 }}>Programmes built around what employers ask for.</h2>
            </div>
            <a href="course-details.html" className="link-arrow">See all programmes <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="prog-grid">
            <div className="prog-card">
              <div className="prog-photo pg-1"><span className="tag">ND · 2 yrs</span><i className="fas fa-coins"></i></div>
              <div className="prog-body">
                <h4 className="serif">Accountancy with Digital &amp; Cloud Accounting</h4>
                <div className="meta"><span>Full &amp; part-time</span><a href="course-details.html">Details →</a></div>
              </div>
            </div>
            <div className="prog-card">
              <div className="prog-photo pg-2"><span className="tag">ND · 2 yrs</span><i className="fas fa-microchip"></i></div>
              <div className="prog-body">
                <h4 className="serif">Computer Engineering with Software Systems</h4>
                <div className="meta"><span>Full &amp; part-time</span><a href="course-details.html">Details →</a></div>
              </div>
            </div>
            <div className="prog-card">
              <div className="prog-photo pg-3"><span className="tag">ND · 2 yrs</span><i className="fas fa-laptop-code"></i></div>
              <div className="prog-body">
                <h4 className="serif">Computer Science with Digital Media</h4>
                <div className="meta"><span>Full &amp; part-time</span><a href="course-details.html">Details →</a></div>
              </div>
            </div>
            <div className="prog-card">
              <div className="prog-photo pg-4"><span className="tag">ND · 2 yrs</span><i className="fas fa-bolt"></i></div>
              <div className="prog-body">
                <h4 className="serif">Electrical/Electronic Engineering</h4>
                <div className="meta"><span>Full &amp; part-time</span><a href="course-details.html">Details →</a></div>
              </div>
            </div>
            <div className="prog-card">
              <div className="prog-photo pg-5"><span className="tag">ND · 2 yrs</span><i className="fas fa-chart-line"></i></div>
              <div className="prog-body">
                <h4 className="serif">Statistics with Data Science</h4>
                <div className="meta"><span>Full &amp; part-time</span><a href="course-details.html">Details →</a></div>
              </div>
            </div>
            <div className="prog-card">
              <div className="prog-photo pg-6"><span className="tag">ND · 2 yrs</span><i className="fas fa-bed"></i></div>
              <div className="prog-body">
                <h4 className="serif">Hotel &amp; Hospitality Management</h4>
                <div className="meta"><span>Full &amp; part-time</span><a href="course-details.html">Details →</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head center">
            <div className="ribbon"><i className="fas fa-star"></i> What Sets Us Apart</div>
            <h2 className="serif" style={{ marginTop: 24 }}>British Poly is unique by all standards</h2>
            <p>Every choice we make — who teaches, what equipment we buy, how we assess — is built around one outcome: graduates who are ready for work on day one.</p>
          </div>
          <div className="feat-grid">
            <div className="feat">
              <div className="ic"><i className="fas fa-screwdriver-wrench"></i></div>
              <h4 className="serif">Practical-led learning</h4>
              <p>Our emphasis is on skills rather than certificates alone — coursework, demonstrations and projects that mirror the workplace.</p>
            </div>
            <div className="feat">
              <div className="ic"><i className="fas fa-user-tie"></i></div>
              <h4 className="serif">Lecturers from industry</h4>
              <p>We recruit tutors with real industry experience, well-grounded in their professions, so they transfer live skills to students.</p>
            </div>
            <div className="feat">
              <div className="ic"><i className="fas fa-flask"></i></div>
              <h4 className="serif">World-class facilities</h4>
              <p>Training workshops, laboratories and studios — much of the equipment brought in directly from Britain.</p>
            </div>
            <div className="feat">
              <div className="ic"><i className="fas fa-earth-africa"></i></div>
              <h4 className="serif">Global opportunities</h4>
              <p>International linkages give students a shot at competing equally with their peers anywhere in the world.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="stats-band">
            <div className="stat-item"><i className="fas fa-users"></i><b>1,200+</b><span>Students Enrolled</span></div>
            <div className="stat-item"><i className="fas fa-book-open"></i><b>10+</b><span>ND Programmes</span></div>
            <div className="stat-item"><i className="fas fa-award"></i><b>15+</b><span>Short Courses</span></div>
            <div className="stat-item"><i className="fas fa-briefcase"></i><b>85%</b><span>Graduate Placement</span></div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head center">
            <div className="ribbon"><i className="fas fa-quote-left"></i> Student Voices</div>
            <h2 className="serif" style={{ marginTop: 24 }}>What our students are saying</h2>
          </div>
          <div className="testi-grid">
            <div className="testi">
              <div className="stars">★★★★★</div>
              <p>"The quality of the courses and the teaching profile is a bigger inspiration — I really want to fulfil my dream here."</p>
              <div className="who"><div className="avatar">A</div><div><b>Adaeze O.</b><span>Accountancy, ND1</span></div></div>
            </div>
            <div className="testi">
              <div className="stars">★★★★★</div>
              <p>"I'm more attracted to this polytechnic because of the opportunity to study under international influence and standards."</p>
              <div className="who"><div className="avatar">T</div><div><b>Tunde B.</b><span>Computer Science, ND2</span></div></div>
            </div>
            <div className="testi">
              <div className="stars">★★★★★</div>
              <p>"Studying at an institution of this repute has been a long-term dream, and I hope it comes through by gaining admission."</p>
              <div className="who"><div className="avatar">C</div><div><b>Chioma K.</b><span>Prospective Student</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight" id="contact">
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
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a key={s.platform} href="#" aria-label={s.platform}>
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
              <a href="#contact">Contact Support</a>
            </div>
          </div>
          <div className="foot-bottom">© 2026 British Transatlantic Polytechnic, Akure. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
