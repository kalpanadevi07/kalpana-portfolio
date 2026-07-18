import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Kalpana Devi T's production AI systems, RAG chatbot, Gmail automation, event platform, web scraper, computer vision and IoT work."
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero projects-page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow"><i /> Project Archive</span>
            <h1>Selected systems and products.</h1>
            <p>A collection of production AI systems, automation platforms, full-stack applications and computer-vision projects.</p>
          </div>
          <div className="project-terminal">
            <div><span /><span /><span /></div>
            <code>$ query project_archive</code>
            <code><b>[07]</b> verified project records</code>
            <code><b>[04]</b> complete engineering case studies</code>
            <code><b>[ok]</b> fake metrics disabled</code>
          </div>
        </div>
      </section>
      <section className="section projects-archive-section">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Filter the Archive" title="Explore by engineering focus" description="Live and repository buttons appear only when a real destination was supplied." /></Reveal>
          <ProjectExplorer />
        </div>
      </section>
    </>
  );
}
