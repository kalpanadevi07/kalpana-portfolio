import type { Metadata } from "next";
import Link from "next/link";
import { achievements, certifications, education, skillGroups } from "@/data/portfolio";
import { ArrowRight, Check, Download, MapPin } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Kalpana Devi T's background, technical focus, education and approach to building practical AI and backend systems."
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero compact-page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow"><i /> About Kalpana</span>
            <h1>Engineering practical intelligence.</h1>
            <p>Python, backend systems, Generative AI and automation—connected into products that address real workflows.</p>
          </div>
          <div className="page-hero-code">
            <span>PROFILE / KD-2026</span>
            <code><b>focus</b>: ["AI", "Backend", "Automation"]</code>
            <code><b>location</b>: "Theni, Tamil Nadu"</code>
            <code><b>status</b>: "open_to_opportunities"</code>
          </div>
        </div>
      </section>

      <section className="section about-page-story">
        <div className="container story-grid">
          <Reveal>
            <div className="story-monogram-panel">
              <div className="large-monogram"><span>KD</span><i /></div>
              <div className="story-status"><i /> AVAILABLE FOR OPPORTUNITIES</div>
              <dl>
                <div><dt>Current Role</dt><dd>Python & AI Developer</dd></div>
                <div><dt>Company</dt><dd>BrandingBeez</dd></div>
                <div><dt>Education</dt><dd>B.E. Computer Science Engineering</dd></div>
                <div><dt>Academic Period</dt><dd>2022 - 2026</dd></div>
                <div><dt>CGPA</dt><dd>7.8</dd></div>
              </dl>
              <a className="button button-secondary" href="/resume/Kalpana-Devi-T-Resume.pdf" download><Download /> Download Resume</a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="story-copy">
              <SectionHeading eyebrow="My Approach" title="More than code. I build systems that work in the real world." />
              <p>I am a Python and AI Developer with hands-on experience building production AI applications, scalable backend services and automation platforms. My work includes RAG-based chatbots, AI-powered website analysis, Gmail automation, full-stack event platforms, web scraping and computer-vision systems.</p>
              <p>I enjoy transforming complex business requirements into structured, maintainable and practical software solutions. My approach combines backend engineering, Generative AI, automation and user-focused product development.</p>
              <p>My strongest work happens where multiple layers meet: a validated API, a reliable data pipeline, an AI component that is grounded in context, and a frontend or automation output that is useful to the person using it.</p>
              <div className="principles-grid">
                <article><span>01</span><h3>Structure before complexity</h3><p>Clear boundaries, validated data and maintainable modules make AI systems easier to trust and extend.</p></article>
                <article><span>02</span><h3>Grounded AI responses</h3><p>Retrieval, explicit context and fallback behavior are essential for practical LLM-powered products.</p></article>
                <article><span>03</span><h3>Automation with control</h3><p>Background work should be observable, authorized and designed for predictable failure handling.</p></article>
                <article><span>04</span><h3>Product-focused engineering</h3><p>The architecture matters, but the final workflow must remain clear and useful to the end user.</p></article>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section about-stack-section">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Capability Map" title="The systems I am prepared to build" /></Reveal>
          <div className="capability-grid">
            {skillGroups.map((group, index) => (
              <Reveal delay={(index % 3) * 70} key={group.title}>
                <article className="capability-card"><span>{group.code}</span><h3>{group.title}</h3><div>{group.skills.map((skill) => <b key={skill}>{skill}</b>)}</div></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section education-section about-education">
        <div className="container education-grid">
          <Reveal>
            <div>
              <SectionHeading eyebrow="Academic Background" title="Education" />
              <div className="education-list">
                {education.map((item, index) => (
                  <article key={item.qualification}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.qualification}</h3><p>{item.institution}</p><small>{item.period}</small></div><b>{item.result}</b></article>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="certification-panel">
              <span className="mono-label">CERTIFICATIONS / ORIGINAL FILES REQUIRED</span>
              <h2>Declared certifications</h2>
              <p>Only the certification titles supplied for this portfolio are listed. No artificial certificates or verification links are created.</p>
              <ul>{certifications.map((item) => <li key={item}><Check />{item}</li>)}</ul>
              <div className="location-line"><MapPin /> Theni, Tamil Nadu, India</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section about-achievement-strip">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Recognition" title="Evidence of initiative beyond coursework" /></Reveal>
          <div className="achievement-strip">
            {achievements.map((achievement) => <article key={achievement.title}><span>{achievement.number}</span><div><h3>{achievement.title}</h3><strong>{achievement.institution}</strong><p>{achievement.text}</p></div></article>)}
          </div>
          <div className="center-action"><Link className="button button-primary" href="/projects">Explore My Projects <ArrowRight /></Link></div>
        </div>
      </section>
    </>
  );
}
