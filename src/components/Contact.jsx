"use client";
import React, { useState } from 'react';
import SectionNav from './SectionNav';

export default function Contact({ activeSection, setActiveSection }) {
  const [buttonStatus, setButtonStatus] = useState({
    text: 'Send Message',
    disabled: false,
    success: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonStatus({ text: 'Sending...', disabled: true, success: false });

    // Simulate send
    setTimeout(() => {
      setButtonStatus({ text: 'Message Sent!', disabled: true, success: true });
      e.target.reset();

      setTimeout(() => {
        setButtonStatus({ text: 'Send Message', disabled: false, success: false });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className={`contact ${activeSection === 'contact' ? 'active' : ''}`}>
      <div className="section-inner">
        <SectionNav activeSection={activeSection} setActiveSection={setActiveSection} />

        <div className="section-content">
          <div className="section-label">
            <span>CONTACT</span>
            <div className="label-line"></div>
          </div>
          <h2 className="section-title">CONTACT ME</h2>
          <p className="contact-cta" style={{
            color: '#fff',
            fontSize: '1.1rem',
            marginBottom: '30px',
            lineHeight: '1.6',
            maxWidth: '600px'
          }}>
            Interested in working together? Let’s build something amazing. Reach out via email or phone!
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div>
                <h3>My Location</h3>
                <p>Nigeria</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="bi bi-share"></i>
              </div>
              <div>
                <h3>Social Profiles</h3>
                <div className="contact-social">
                  <a href="https://github.com/EriMorak7" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/erioluwa-morakinyo-149354370/" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/erimorak7/" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="bi bi-envelope"></i>
              </div>
              <div>
                <h3>Email Me</h3>
                <p>erimorakinyo7@gmail.com</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="bi bi-phone"></i>
              </div>
              <div>
                <h3>Call Me</h3>
                <p>+2348100398302</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" required id="contact-name" />
              <input type="email" name="email" placeholder="Your Email" required id="contact-email" />
            </div>
            <input type="text" name="subject" placeholder="Subject" id="contact-subject" />
            <textarea name="message" rows="6" placeholder="Message" required id="contact-message"></textarea>
            <div className="form-submit">
              <button
                type="submit"
                disabled={buttonStatus.disabled}
                style={{
                  background: buttonStatus.success ? '#13a456' : '',
                }}
              >
                {buttonStatus.text}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
