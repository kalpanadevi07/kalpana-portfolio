"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

const filters = ["All", "Production AI", "Backend", "Automation", "Full Stack", "Computer Vision", "IoT"] as const;

export function ProjectExplorer() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visibleProjects = useMemo(
    () => active === "All" ? projects : projects.filter((project) => project.categories.includes(active as never)),
    [active]
  );

  return (
    <>
      <div className="project-filters" role="group" aria-label="Filter projects by category">
        {filters.map((filter) => (
          <button className={active === filter ? "active" : ""} type="button" onClick={() => setActive(filter)} key={filter}>
            {filter}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visibleProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
      </div>
    </>
  );
}
