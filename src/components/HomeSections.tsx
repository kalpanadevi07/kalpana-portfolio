import Link from "next/link";
import { achievements, certifications, education, experiences, projects, valueCards, visionLabs } from "@/data/portfolio";
import { ArchitectureFlow } from "./ArchitectureFlow";
import { ArrowRight, Check, Mail, MapPin, Phone } from "./Icons";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SkillsUniverse } from "./SkillsUniverse";

export function ValueSection() {
  return (
    <section className="section section-value" id="value">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Core Capabilities" title="Turning complex workflows into intelligent products." /></Reveal>
        <div className="value-grid">
          {valueCards.map((card, index) => (
            <Reveal delay={index * 90} key={card.title}>
              <article className="tilt-card value-card">
                <span>{card.code}</span>
                <div className="value-icon"><i /><i /><i /></div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  const facts = [
    ["Location", "Theni, Tamil Nadu, India"],
    ["Education", "B.E. Computer Science Engineering"],
    ["Institution", "Jansons Institute of Technology, Coimbatore"],
    ["Academic period", "2022 - 2026"],
    ["CGPA", "7.8"],
    ["Current role", "Python & AI Developer at BrandingBeez"]
  ];
  return (
    <section className="section about-preview" id="about">
      <div className="container split-layout">
        <Reveal>
          <div>
            <SectionHeading eyebrow="About the Developer" title="More than code. I build systems that work in the real world." />
            <div className="body-copy">
              <p>I am a Python and AI Developer with hands-on experience building production AI applications, scalable backend services and automation platforms. My work includes RAG-based chatbots, AI-powered website analysis, Gmail automation, full-stack event platforms, web scraping and computer-vision systems.</p>
              <p>I enjoy transforming complex business requirements into structured, maintainable and practical software solutions. My approach combines backend engineering, Generative AI, automation and user-focused product development.</p>
            </div>
            <div className="status-chips">
              {["Open to AI opportunities", "Backend engineering", "Generative AI", "Python development", "Automation systems"].map((chip) => <span key={chip}><i />{chip}</span>)}
            </div>
            <Link className="text-link large" href="/about">Read My Full Story <ArrowRight /></Link>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="profile-panel">
            <div className="profile-panel-head"><span>DEVELOPER_PROFILE.JSON</span><b>VERIFIED DATA</b></div>
            <div className="profile-monogram"><span>KD</span><i /></div>
            <dl>
              {facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ArchitectureSection() {
  return (
    <section className="section architecture-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="System Thinking"
            title="How I Think About Intelligent Systems"
            description="A conceptual view of the layers I connect when building AI-enabled products. Hover or focus each node to inspect its responsibility."
            align="center"
          />
        </Reveal>
        <Reveal delay={100}><ArchitectureFlow /></Reveal>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Technical Stack" title="Technologies behind the systems" description="Grouped by how they contribute to real product architecture—not by arbitrary percentage scores." /></Reveal>
        <Reveal delay={100}><SkillsUniverse /></Reveal>
      </div>
    </section>
  );
}

export function ExperiencePreview() {
  return (
    <section className="section experience-preview" id="experience">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Professional Journey" title="Experience building practical technology" /></Reveal>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <Reveal delay={index * 80} key={`${experience.role}-${experience.period}`}>
              <article className="timeline-item">
                <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="timeline-period">{experience.period}</div>
                <div className="timeline-card">
                  <div className="timeline-heading">
                    <div><h3>{experience.role}</h3><p>{experience.company}</p></div>
                    {experience.current ? <span className="current-status"><i /> Currently Working</span> : null}
                  </div>
                  <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="center-action"><Link className="button button-secondary" href="/experience">View Detailed Experience <ArrowRight /></Link></div>
      </div>
    </section>
  );
}

export function ProjectsPreview() {
  const featured = projects.filter((project) => project.featured);
  return (
    <section className="section projects-preview" id="projects">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Selected Work" title="Selected systems and products" description="Production AI systems, automation platforms, full-stack applications and practical engineering experiments." />
        </Reveal>
        <div className="project-grid">
          {featured.map((project, index) => <Reveal delay={(index % 2) * 80} key={project.slug}><ProjectCard project={project} index={index} /></Reveal>)}
        </div>
        <div className="center-action"><Link className="button button-primary" href="/projects">Explore All Projects <ArrowRight /></Link></div>
      </div>
    </section>
  );
}

export function VisionLabSection() {
  return (
    <section className="section vision-lab-section">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Applied Computer Vision" title="Computer Vision Lab" description="Technical experiments focused on image-processing pipelines, recognition and motion analysis." /></Reveal>
        <div className="vision-grid">
          {visionLabs.map((lab, index) => (
            <Reveal delay={index * 90} key={lab.title}>
              <article className="vision-card">
                <div className={`vision-display vision-display-${index + 1}`}>
                  <span className="scan-line" />
                  <div className="vision-frame"><i /><i /><i /><i /></div>
                  <b>CV_PIPELINE / {String(index + 1).padStart(2, "0")}</b>
                </div>
                <h3>{lab.title}</h3>
                <p>{lab.description}</p>
                <div className="technology-row">{lab.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section className="section education-section">
      <div className="container education-grid">
        <Reveal>
          <div>
            <SectionHeading eyebrow="Foundation" title="Education" />
            <div className="education-list">
              {education.map((item, index) => (
                <article key={item.qualification}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{item.qualification}</h3><p>{item.institution}</p><small>{item.period}</small></div>
                  <b>{item.result}</b>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="certification-panel">
            <span className="mono-label">CERTIFICATIONS / DECLARED</span>
            <h2>Continuous technical learning</h2>
            <p>Certificate images are intentionally not generated. They should only be displayed when original files are available.</p>
            <ul>{certifications.map((certificate) => <li key={certificate}><Check />{certificate}</li>)}</ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AchievementsSection() {
  return (
    <section className="section achievements-section" id="achievements">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Achievements" title="Recognition beyond development" /></Reveal>
        <div className="achievement-grid">
          {achievements.map((achievement, index) => (
            <Reveal delay={index * 100} key={achievement.title}>
              <article className="achievement-card">
                <div className="achievement-spotlight" />
                <span>{achievement.number}</span>
                <div className="award-glyph"><i /><b>◆</b><i /></div>
                <h3>{achievement.title}</h3>
                <strong>{achievement.institution}</strong>
                <p>{achievement.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section className="section contact-cta">
      <div className="container contact-cta-shell">
        <div className="contact-orb" aria-hidden="true"><span>KD</span></div>
        <Reveal>
          <div className="contact-cta-copy">
            <span className="availability-pill"><i /> Available for AI, Python and backend opportunities</span>
            <h2>Let&apos;s build something intelligent.</h2>
            <p>I&apos;m open to opportunities involving Python development, Generative AI, RAG systems, backend engineering, automation and AI-integrated products.</p>
            <div className="contact-buttons">
              <Link className="button button-primary" href="/contact">Start a Conversation <ArrowRight /></Link>
              <a className="button button-secondary" href="mailto:kalpanadevi7e@gmail.com"><Mail /> Email Me Directly</a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="contact-quick-info">
            <a href="mailto:kalpanadevi7e@gmail.com"><Mail /><div><span>Email</span><strong>kalpanadevi7e@gmail.com</strong></div></a>
            <a href="tel:+918220093277"><Phone /><div><span>Phone</span><strong>+91 82200 93277</strong></div></a>
            <div><MapPin /><div><span>Location</span><strong>Theni, Tamil Nadu, India</strong></div></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
