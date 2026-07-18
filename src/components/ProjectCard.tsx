import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";
import { ArrowRight, ExternalLink } from "./Icons";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        <Image src={project.visual} alt={`Abstract technical diagram for ${project.title}`} fill sizes="(max-width: 760px) 100vw, 50vw" />
        <div className="project-visual-grid" />
        <span className="project-index">SYS-{String(index + 1).padStart(2, "0")}</span>
        {project.liveUrl ? <span className="live-badge"><i /> Live</span> : <span className="lab-badge">Case archive</span>}
      </div>
      <div className="project-card-body">
        <div className="category-row">{project.categories.map((category) => <span key={category}>{category}</span>)}</div>
        <h3>{project.title}</h3>
        <strong>{project.value}</strong>
        <p>{project.description}</p>
        <div className="technology-row">{project.technologies.slice(0, 6).map((technology) => <span key={technology}>{technology}</span>)}</div>
        <div className="project-actions">
          {project.caseStudy ? (
            <Link className="text-link" href={`/projects/${project.slug}`}>View Case Study <ArrowRight /></Link>
          ) : null}
          {project.liveUrl ? (
            <a className="text-link muted" href={project.liveUrl} target="_blank" rel="noreferrer">{project.liveLabel ?? "Live Website"} <ExternalLink /></a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
