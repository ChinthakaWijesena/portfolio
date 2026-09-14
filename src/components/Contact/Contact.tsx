import { useState, type FormEvent } from 'react';
import { personal } from '../../data/portfolio';
import './Contact.css';

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate form submission — replace with your email API / Formspree
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact">
      <div className="container">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Let's Work Together</h2>

        <div className="contact__layout">
          {/* Info */}
          <div>
            <h3 className="contact__info-title">Have a project in mind?</h3>
            <p className="contact__info-text">
              I'm currently open to new opportunities — whether it's a full-time role,
              freelance project, or just a chat about exciting ideas. Drop me a message
              and I'll get back to you within 24 hours.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <div className="contact__detail-icon">📧</div>
                <div>
                  <p className="contact__detail-label">Email</p>
                  <p className="contact__detail-value">{personal.email}</p>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon">📍</div>
                <div>
                  <p className="contact__detail-label">Location</p>
                  <p className="contact__detail-value">{personal.location}</p>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon">🕐</div>
                <div>
                  <p className="contact__detail-label">Response time</p>
                  <p className="contact__detail-value">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <a href={personal.social.github} target="_blank" rel="noopener noreferrer"
                className="contact__social-link" aria-label="GitHub profile">
                <GitHubIcon />
              </a>
              <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer"
                className="contact__social-link" aria-label="LinkedIn profile">
                <LinkedInIcon />
              </a>
              <a href={personal.social.twitter} target="_blank" rel="noopener noreferrer"
                className="contact__social-link" aria-label="Twitter profile">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-card">
            <form id="contact-form" className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    className="form-input"
                    placeholder="John Doe"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="form-input"
                    placeholder="john@example.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  className="form-input"
                  placeholder="Project idea / collaboration..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Message</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {status === 'success' && (
                <p className="form-status success">✅ Message sent! I'll be in touch soon.</p>
              )}
              {status === 'error' && (
                <p className="form-status error">❌ Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                id="contact-submit"
                className="form-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
