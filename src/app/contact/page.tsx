import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kalpana Devi T about Python, AI, Generative AI, RAG, backend development, automation and collaboration opportunities."
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-page-hero">
        <div className="container contact-hero-grid">
          <div>
            <span className="availability-pill"><i /> Available for AI, Python and backend opportunities</span>
            <h1>Let&apos;s build something intelligent.</h1>
            <p>I&apos;m open to opportunities involving Python development, Generative AI, RAG systems, backend engineering, automation and AI-integrated products.</p>
          </div>
          <div className="contact-signal" aria-hidden="true"><div><span>KD</span></div><i /><i /><i /></div>
        </div>
      </section>

      <section className="section contact-page-section">
        <div className="container contact-page-grid">
          <Reveal>
            <div className="contact-details-panel">
              <span className="mono-label">DIRECT CHANNELS</span>
              <h2>Contact information</h2>
              <p>Use the form for detailed enquiries or connect directly through the verified links below.</p>
              <div className="contact-detail-list">
                <a href="mailto:kalpanadevi7e@gmail.com"><Mail /><div><span>Email</span><strong>kalpanadevi7e@gmail.com</strong></div><ArrowUpRight /></a>
                <a href="tel:+918220093277"><Phone /><div><span>Phone</span><strong>+91 82200 93277</strong></div><ArrowUpRight /></a>
                <div><MapPin /><div><span>Location</span><strong>Theni, Tamil Nadu, India</strong></div></div>
              </div>
              <div className="contact-social-actions">
                <a href="https://linkedin.com/in/kalpana-devi-4b1140264" target="_blank" rel="noreferrer"><Linkedin /> Connect on LinkedIn</a>
                <a href="https://github.com/kalpanadevi07" target="_blank" rel="noreferrer"><Github /> View GitHub</a>
              </div>
              <div className="contact-availability-card"><span><i /> AVAILABLE</span><p>AI development · Python backend · RAG systems · Automation</p></div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="form-panel"><div className="form-panel-heading"><span>SECURE CONTACT FORM</span><h2>Send a message</h2><p>Fields marked by validation must contain complete, legitimate information.</p></div><ContactForm /></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
