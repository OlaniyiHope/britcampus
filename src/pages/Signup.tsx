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
import { PORTAL_LOGIN_URL } from "@/lib/portal";
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

const REGISTER_ENDPOINT = "http://localhost:5001/api/register";

export default function Signup(): JSX.Element {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [programme, setProgramme] = useState("Accountancy with Digital & Cloud Accounting");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!agree) {
      setError("You must agree to the Terms of Admission");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!username.trim()) {
      setError("Please choose a username");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch(REGISTER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: "student",
          username: username.trim(),
          email,
          password,
          phone,
          studentName: `${firstName} ${lastName}`.trim(),
          programme,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.message || "Registration failed. Please try again.");
      }

      setSuccess(true);
      // Optional: redirect to login after a short delay
      setTimeout(() => {
        window.location.href = PORTAL_LOGIN_URL;
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <div className="auth-shell">
        <div className="auth-visual">
          <div>
            <div className="ribbon"><i className="fas fa-graduation-cap"></i> 2026/2027 Admissions</div>
            <h2 className="serif">Take your career to a global level.</h2>
            <ul className="auth-list">
              <li><i className="fas fa-circle-check"></i> Application takes about 10 minutes to complete.</li>
              <li><i className="fas fa-circle-check"></i> You'll need your O'Level result and a valid email address.</li>
              <li><i className="fas fa-circle-check"></i> Save your progress and return to the portal any time before submitting.</li>
              <li><i className="fas fa-circle-check"></i> Applications are reviewed by the admissions office within 5 working days.</li>
            </ul>
          </div>
          <p className="auth-quote">"I'm more attracted to this polytechnic due to the opportunity to study under international influence." — Prospective Student</p>
        </div>

        <div className="auth-form-side">
          <div className="auth-card">
            <a href="/" className="back-home"><i className="fas fa-arrow-left"></i> Back to homepage</a>
            <div className="eyebrow">Admissions</div>
            <h1 className="serif">Create your application account</h1>
            <p>Start your National Diploma application. You can complete the rest of the form after verifying your email.</p>

            {success ? (
              <div style={{ color: "#2f855a", marginTop: 16 }}>
                Account created successfully! Redirecting you to log in…
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="field-row">
                  <div className="field-group">
                    <label htmlFor="fname">First name</label>
                    <input id="fname" type="text" placeholder="Adaeze" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  </div>
                  <div className="field-group">
                    <label htmlFor="lname">Last name</label>
                    <input id="lname" type="text" placeholder="Okonkwo" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="username">Username</label>
                  <input id="username" type="text" placeholder="adaeze.okonkwo" required value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="field-group">
                  <label htmlFor="email">Email address</label>
                  <input id="email" type="email" placeholder="you@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="field-group">
                  <label htmlFor="phone">Phone number</label>
                  <input id="phone" type="tel" placeholder="+234 800 000 0000" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className="field-group">
                  <label htmlFor="programme">Programme of interest</label>
                  <select id="programme" value={programme} onChange={(e) => setProgramme(e.target.value)}>
                    <option>Accountancy with Digital &amp; Cloud Accounting</option>
                    <option>Computer Engineering with Software Systems</option>
                    <option>Computer Science with Digital Media</option>
                    <option>Electrical/Electronic Engineering</option>
                    <option>Statistics with Data Science</option>
                    <option>Mass Communication with Online Journalism</option>
                    <option>Hotel &amp; Hospitality Management</option>
                  </select>
                </div>

                <div className="field-row">
                  <div className="field-group">
                    <label htmlFor="pass">Password</label>
                    <input id="pass" type="password" placeholder="Create a password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="field-group">
                    <label htmlFor="cpass">Confirm password</label>
                    <input id="cpass" type="password" placeholder="Re-enter password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  </div>
                </div>

                <label className="field-check">
                  <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                  <span style={{ marginLeft: 8 }}>I agree to the <a href="#">Terms of Admission</a> and confirm the information above is accurate.</span>
                </label>

                {error && <div style={{ color: "#c53030", marginTop: 12 }}>{error}</div>}

                <button type="submit" className="btn btn-gold btn-block" style={{ marginTop: 12 }} disabled={submitting}>
                  <i className="fas fa-arrow-right"></i> {submitting ? "Creating Account…" : "Create Account & Continue"}
                </button>
              </form>
            )}

            <div className="auth-foot" style={{ justifyContent: "center" }}>
            <span>Already have an account? <a href={PORTAL_LOGIN_URL}>Log in</a></span>
            </div>
          </div>
        </div>
      </div>

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
              <a href="/login">Student Login</a>
              <a href="/login">Staff Login</a>
              <a href="/">Contact Support</a>
            </div>
          </div>

          <div className="foot-bottom">© 2026 British Transatlantic Polytechnic, Akure. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
