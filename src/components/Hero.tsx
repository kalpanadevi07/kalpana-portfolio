"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { roles } from "@/data/portfolio";
import { ArrowRight, Download, Github, Linkedin, Mail } from "./Icons";
import { HeroSystem } from "./HeroSystem";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 2600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <span className="availability-pill"><i /> Available for AI, Python & backend opportunities</span>
          <h1 aria-label="Hi, I’m Kalpana Devi.">
            <span className="hero-line">Hi, I&apos;m</span>
            <span className="hero-name">Kalpana Devi.</span>
          </h1>
          <div className="hero-role-line">
            <span>I build intelligent digital systems.</span>
            <strong key={roles[roleIndex]}>{roles[roleIndex]}</strong>
          </div>
          <p className="hero-description">
            Python and AI Developer building production-ready RAG systems, scalable backend APIs, intelligent automation workflows, AI-powered web-analysis platforms, and full-stack applications that solve real business problems.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary magnetic" href="/projects">
              Explore My Work <ArrowRight />
            </Link>
            <a className="button button-secondary magnetic" href="/resume/Kalpana-Devi-T-Resume.pdf" download>
              <Download /> Download Resume
            </a>
          </div>
          <div className="hero-socials" aria-label="Professional links">
            <a href="https://github.com/kalpanadevi07" target="_blank" rel="noreferrer" aria-label="Kalpana Devi on GitHub"><Github /></a>
            <a href="https://linkedin.com/in/kalpana-devi-4b1140264" target="_blank" rel="noreferrer" aria-label="Kalpana Devi on LinkedIn"><Linkedin /></a>
            <a href="mailto:kalpanadevi7e@gmail.com" aria-label="Email Kalpana Devi"><Mail /></a>
            <span>github / linkedin / email</span>
          </div>
        </div>
        <HeroSystem />
      </div>
      <a className="scroll-indicator" href="#value" aria-label="Scroll to professional value section">
        <span>Scroll to explore</span><i />
      </a>
    </section>
  );
}
