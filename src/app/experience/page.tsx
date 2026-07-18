import type { Metadata } from "next";
import Link from "next/link";
import { experiences, projects } from "@/data/portfolio";
import { ArrowRight, Check } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional and internship experience of Kalpana Devi T across Python, AI, backend engineering, automation, IoT and business analysis."
};

export default function ExperiencePage() {
  const productionProjects = projects.filter((project) => project.featured);
  return (
    <>
      <section className="page-hero compact-page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow"><i /> Experience</span>
            <h1>Building technology through practical delivery.</h1>
            <p>Hands-on work across production AI, backend APIs, automation, data workflows, computer vision and IoT systems.</p>
          </div>
          <div className="experience-status-panel">
            <span><i /> CURRENTLY WORKING</span>
            <h2>Python & AI Developer</h2>
            <p>BrandingBeez, Coimbatore</p>
            <b>2025 - Present</b>
          </div>
        </div>
      </section>

      <section className="section experience-page-section">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Work Timeline" title="Experience building practical technology" /></Reveal>
          <div className="detailed-timeline">
            {experiences.map((experience, index) => (
              <Reveal delay={index * 80} key={`${experience.role}-${experience.period}`}>
                <article className="detailed-experience-card">
                  <div className="experience-sequence"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
                  <div className="experience-meta"><b>{experience.period}</b>{experience.current ? <span><i /> Currently Working</span> : null}</div>
                  <div className="experience-content">
                    <h2>{experience.role}</h2>
                    <h3>{experience.company}</h3>
                    <ul>{experience.bullets.map((bullet) => <li key={bullet}><Check />{bullet}</li>)}</ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience-evidence-section">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Delivery Evidence" title="Systems connected to my current work" description="These are the supplied production and project examples most directly connected to the professional experience above." /></Reveal>
          <div className="evidence-grid">
            {productionProjects.map((project, index) => (
              <Reveal delay={(index % 2) * 80} key={project.slug}>
                <article className="evidence-card">
                  <span>0{index + 1}</span>
                  <div className="category-row">{project.categories.map((category) => <b key={category}>{category}</b>)}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="technology-row">{project.technologies.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}</div>
                  <Link className="text-link" href={`/projects/${project.slug}`}>Read Case Study <ArrowRight /></Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section next-step-section">
        <div className="container next-step-shell">
          <div><span className="eyebrow"><i /> Next Opportunity</span><h2>Ready to contribute to AI and backend product teams.</h2><p>Open to roles involving Python, Generative AI, RAG systems, APIs and intelligent automation.</p></div>
          <Link className="button button-primary" href="/contact">Discuss an Opportunity <ArrowRight /></Link>
        </div>
      </section>
    </>
  );
}
