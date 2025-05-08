import React, { useState, useEffect } from "react";
import "./Footer.css";
import "./App.css";

const randomFacts = [
  "I tried to achieve a Google Recaptha on this contact form, but it's not working. And after days and days of trying... Instead I made this carousel.",
  "Anyway, thank you for visiting my website. I hope you like it. I'm still working on it. I'm still learning. I'm still growing.",
  "Currently, the website is JavaScript (60.5%), CSS (39.0%) and HTML (0.5%).",
  "Fun fact: I love writing novels as a hobby!",
  "React makes building UIs fun and modular.",
  "Did you know? This portfolio uses Vite for lightning-fast development.",
];

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentFact((prev) => (prev + 1) % randomFacts.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentFact]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Message sent! (demo)");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <footer>
      <section className="content-section about-section" id="CONTACT">
        <div className="footer-container" style={{ display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "space-between" }}>
          {/* Vasen puoli: lomake */}
          <div className="footer-left" style={{ flex: "1 1 320px", minWidth: 260, maxWidth: 500 }}>
            <h2 style={{ textAlign: "center", marginBottom: 24 }}>
              <span id="certifications-letter">Contact</span>
            </h2>
            <form className="footer-form" onSubmit={handleSubmit} autoComplete="off" noValidate>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter your message..."
                  required
                  rows={4}
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              <button type="submit" className="view-button" style={{ width: "100%", marginTop: 16 }}>
                Send Message
              </button>
            </form>
          </div>

          {/* Oikea puoli: random facts slider */}
          <div className="footer-right" style={{ flex: "1 1 320px", minWidth: 260, maxWidth: 500, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2 className="heading-footer" style={{ textAlign: "center", marginBottom: 24 }}>
              <span id="certifications-letter">Random facts</span>
            </h2>
            <div className="content-slider" style={{ width: "100%", minHeight: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="slider" style={{ width: "100%", textAlign: "center" }}>
                <div className="quote" style={{ fontSize: "1.1rem", color: "#fff", minHeight: 60, transition: "opacity 0.5s" }}>
                  {randomFacts[currentFact]}
                </div>
                <div className="tech-bar" style={{ marginTop: 16 }}>
                  <div className="css"></div>
                  <div className="js"></div>
                  <div className="html"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
