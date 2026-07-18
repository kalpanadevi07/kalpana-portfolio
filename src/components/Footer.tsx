import Link from "next/link";
import { ArrowUpRight, Download, Github, Linkedin } from "./Icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-data-flow" aria-hidden="true"><span /><span /><span /></div>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand-mark" href="/" aria-label="Kalpana Devi home"><span>KD</span><i /></Link>
          <div>
            <h2>Kalpana Devi T</h2>
            <strong>Python & AI Developer</strong>
          </div>
          <p>Building intelligent systems with Python, APIs and Generative AI.</p>
        </div>
        <div className="footer-links">
          <div>
            <span>Navigate</span>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <span>Connect</span>
            <a href="https://github.com/kalpanadevi07" target="_blank" rel="noreferrer">GitHub <Github size={15} /></a>
            <a href="https://linkedin.com/in/kalpana-devi-4b1140264" target="_blank" rel="noreferrer">LinkedIn <Linkedin size={15} /></a>
            <a href="/resume/Kalpana-Devi-T-Resume.pdf" download>Download Resume <Download size={15} /></a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Kalpana Devi T. All rights reserved.</p>
        <a href="mailto:kalpanadevi7e@gmail.com">kalpanadevi7e@gmail.com <ArrowUpRight size={15} /></a>
      </div>
    </footer>
  );
}
