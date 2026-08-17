import React, { useState } from "react";
import Header from "@/components/layout/SiteHeader";
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

const socialLinks: SocialLink[] = [
  { platform: "Facebook", handle: "@nationaldailynewspaper", icon: FaFacebookF },
  { platform: "Instagram", handle: "@nationaldailynewspaper", icon: FaInstagram },
  { platform: "Twitter", handle: "@nationaldailynewspaper", icon: FaXTwitter },
  { platform: "LinkedIn", handle: "@nationaldailynewspaper", icon: FaLinkedinIn },
  { platform: "YouTube", handle: "@nationaldailynewspaper", icon: FaYoutube },
];

export default function Login(): JSX.Element {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate authentication
    // For now just log the values
    console.log({ loginId, password, remember });
  };

  return (
    <>
      <Header />

      <div className="auth-shell">
        <div className="auth-visual">
          <div>
            <div className="ribbon"><i className="fas fa-shield-halved"></i> Student &amp; Staff Portal</div>
            <h2 className="serif">Welcome back to British Poly.</h2>
            <ul className="auth-list">
              <li><i className="fas fa-circle-check"></i> Check your application status and offer letter.</li>
              <li><i className="fas fa-circle-check"></i> View course registration, results and fee balance.</li>
              <li><i className="fas fa-circle-check"></i> Staff can manage credentials, students and courses.</li>
            </ul>
          </div>
          <p className="auth-quote">Approved by the Federal Ministry of Education. Recognised by the National Board for Technical Education.</p>
        </div>

        <div className="auth-form-side">
          <div className="auth-card">
            <a href="index.html" className="back-home"><i className="fas fa-arrow-left"></i> Back to homepage</a>
            <div className="eyebrow">Portal Login</div>
            <h1 className="serif">Log in to your account</h1>
            <p>Enter your credentials to access the student or staff portal.</p>

            <form onSubmit={handleSubmit}>
              <div className="field-group">
                <label htmlFor="login-id">Email or Student ID</label>
                <input
                  type="text"
                  id="login-id"
                  placeholder="you@email.com or STU0012"
                  required
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                />
              </div>

              <div className="field-group">
                <label htmlFor="login-pass">Password</label>
                <input
                  type="password"
                  id="login-pass"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="field-check" style={{ justifyContent: "space-between", display: "flex", alignItems: "center" }}>
                <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <input type="checkbox" style={{ margin: 0 }} checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                  <span style={{ marginLeft: 8 }}>Remember me</span>
                </label>
                <a href="#">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-gold btn-block"><i className="fas fa-right-to-bracket"></i> Log In</button>
            </form>

            <div className="auth-divider">or</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <button className="btn btn-outline-navy btn-block" type="button"><i className="fas fa-user-graduate"></i> Continue as Student</button>
              <button className="btn btn-outline-navy btn-block" type="button"><i className="fas fa-user-tie"></i> Continue as Staff</button>
            </div>

            <div className="auth-foot" style={{ justifyContent: "center" }}>
              <span>New here? <a href="signup.html">Create an application account</a></span>
            </div>
          </div>
        </div>
      </div>

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
