import React, { useState } from "react";
import { FaFacebookF, FaGlobe } from "react-icons/fa6";
import Header from "@/components/layout/SiteHeader";

export default function ContactUs(): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send
    setTimeout(() => {
      setStatus("sent");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 800);
  };

  return (
    <>
    <Header />
      <div className="subhero">
        <div className="wrap">
          <div className="crumb">
            <a href="index.html">Home</a>
            <i className="fas fa-chevron-right"></i>
            <span>Contact Us</span>
          </div>
          <h1>Contact Us</h1>
          <p className="lede">British Transatlantic Polytechnic — British Poly.</p>
        </div>
      </div>

      <section>
        <div className="wrap contact-grid">
          <div className="contact-form-card">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <label>
                <span>Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  required
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </label>

              <label>
                <span>Subject</span>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                />
              </label>

              <label>
                <span>Message</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  rows={6}
                  required
                />
              </label>

              <div className="form-actions">
                <button type="submit" className="btn btn-gold" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send"}
                </button>
                {status === "sent" && <span className="note">Message sent — we'll be in touch.</span>}
              </div>
            </form>
          </div>

          <aside className="contact-info">
            <h3>Contact Info</h3>

            <div className="info-block">
              <h4>Campus</h4>
              <p>British Transatlantic Polytechnic</p>
              <address>
                Km 5 Akure-Ado Expressway,
                <br /> Igoba, by Road maker village,
                <br /> Akure, Ondo State, Nigeria
              </address>
              <p>Tel: <a href="tel:+2347073404445">+2347073404445</a>, <a href="tel:+2348110750723">+2348110750723</a></p>
              <p>WhatsApp: <a href="https://wa.me/2348032122418">+2348032122418</a></p>
            </div>

            <div className="info-block">
              <h4>UK Liaison Office</h4>
              <p>Atlantic House</p>
              <address>
                5 New Road Avenue
                <br /> Opp. University of Creative Arts, Rochester
                <br /> ME4 6AR, Medway, Kent, United Kingdom
              </address>
              <p>Tel: <a href="tel:+443333448138">+44 333 344 8138</a></p>
            </div>

            <div className="info-block">
              <h4>Online</h4>
              <p>
                Facebook <a href="#">British Poly</a>
                <br /> Website: <a href="https://www.britishpoly.edu.ng">www.britishpoly.edu.ng</a>
                <br /> Email: <a href="mailto:registrar@britishpoly.edu.ng">registrar@britishpoly.edu.ng</a>
              </p>
            </div>

            <div className="info-block">
              <h4>Location Info</h4>
              <p>......</p>
            </div>

            <div className="foot-social">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://www.britishpoly.edu.ng" aria-label="Website"><FaGlobe /></a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
