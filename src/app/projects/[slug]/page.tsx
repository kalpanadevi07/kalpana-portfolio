import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import { ArrowRight, ArrowUpRight, Check } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.filter((project) => project.caseStudy).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.caseStudy);
  if (!project) return { title: "Project Not Found" };
  return { title: project.title, description: project.description };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.caseStudy);
  if (!project || !project.caseStudy) notFound();
  const caseStudy = project.caseStudy;
  const flow = project.flow || caseStudy.workflow;

  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects.filter((item) => item.caseStudy)[(projects.filter((item) => item.caseStudy).findIndex((item) => item.slug === slug) + 1) % 4];

  return (
    <>
      <section className="case-study-hero">
        <div className="container">
          <Link className="back-link" href="/projects">← Back to projects</Link>
          <div className="case-hero-grid">
            <div className="case-hero-copy">
              <span className="eyebrow"><i /> Case Study / SYS-{String(projectIndex + 1).padStart(2, "0")}</span>
              <div className="category-row">{project.categories.map((category) => <span key={category}>{category}</span>)}</div>
              <h1>{project.title}</h1>
              <strong>{project.value}</strong>
              <p>{project.description}</p>
              <div className="case-hero-actions">
                {project.liveUrl ? <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">{project.liveLabel || "Visit Website"} <ArrowUpRight /></a> : null}
                <a className="button button-secondary" href="#architecture">Inspect Architecture <ArrowRight /></a>
              </div>
            </div>
            <div className="case-hero-visual">
              <Image src={project.visual} alt={`Abstract system diagram for ${project.title}`} fill priority sizes="(max-width: 900px) 100vw, 45vw" />
              <div className="case-visual-overlay"><span>ENGINEERING CASE STUDY</span><b>STATUS / DOCUMENTED</b></div>
            </div>
          </div>
          <div className="case-tech-strip">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </div>
      </section>

      <section className="section case-overview-section">
        <div className="container case-overview-grid">
          <Reveal><SectionHeading eyebrow="The Challenge" title="What the system needed to solve" /><p className="case-lead">{caseStudy.challenge}</p></Reveal>
          <Reveal delay={100}>
            <div className="case-principles-panel">
              <span>CASE STUDY RULES</span>
              <ul><li><Check /> No unsupported performance metrics</li><li><Check /> Only supplied technologies listed</li><li><Check /> Architecture described as implemented workflow</li></ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section case-architecture-section" id="architecture">
        <div className="container">
          <Reveal><SectionHeading eyebrow="System Architecture" title="How the major components work together" /></Reveal>
          <div className="case-architecture-grid">
            <div className="case-flow-column">
              {flow.map((step, index) => (
                <Reveal delay={index * 60} key={step}>
                  <div className="case-flow-step"><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < flow.length - 1 ? <i /> : null}</div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <div className="architecture-notes">
                {caseStudy.architecture.map((item, index) => <article key={item}><span>NODE-{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section case-details-section">
        <div className="container case-detail-grid">
          <Reveal>
            <div className="case-detail-card"><span>01 / WORKFLOW</span><h2>AI or automation workflow</h2><ol>{caseStudy.workflow.map((item) => <li key={item}>{item}</li>)}</ol></div>
          </Reveal>
          <Reveal delay={80}>
            <div className="case-detail-card"><span>02 / BACKEND</span><h2>Backend responsibilities</h2><ul>{caseStudy.responsibilities.map((item) => <li key={item}><Check />{item}</li>)}</ul></div>
          </Reveal>
          <Reveal delay={160}>
            <div className="case-detail-card"><span>03 / DECISIONS</span><h2>Key engineering decisions</h2><ul>{caseStudy.decisions.map((item) => <li key={item}><Check />{item}</li>)}</ul></div>
          </Reveal>
        </div>
      </section>

      {project.highlights ? (
        <section className="section project-highlights-section">
          <div className="container"><Reveal><SectionHeading eyebrow="Implemented Capabilities" title="Project details supplied for this system" /></Reveal><div className="highlight-grid">{project.highlights.map((highlight, index) => <Reveal delay={(index % 4) * 60} key={highlight}><div><span>{String(index + 1).padStart(2, "0")}</span><p>{highlight}</p></div></Reveal>)}</div></div>
        </section>
      ) : null}

      <section className="section case-outcome-section">
        <div className="container outcome-shell">
          <div><span className="eyebrow"><i /> Outcome</span><h2>A practical system, described without invented metrics.</h2><p>{caseStudy.outcome}</p></div>
          <div className="outcome-code"><code>status = "production-oriented"</code><code>claims = "evidence-based"</code><code>next = "continuous improvement"</code></div>
        </div>
      </section>

      <section className="section next-case-section">
        <div className="container next-case-shell"><div><span>NEXT CASE STUDY</span><h2>{nextProject.title}</h2></div><Link className="button button-primary" href={`/projects/${nextProject.slug}`}>Open Next Case <ArrowRight /></Link></div>
      </section>
    </>
  );
}
