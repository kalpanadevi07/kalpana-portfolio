"use client";

import { useState } from "react";
import { skillGroups } from "@/data/portfolio";
import { ChevronDown } from "./Icons";

export function SkillsUniverse() {
  const [active, setActive] = useState(0);

  return (
    <div className="skills-layout">
      <div className="skills-orbit" aria-hidden="true">
        <div className="orbit-core"><span>KD</span><small>STACK</small></div>
        {[0, 1, 2].map((ring) => <div className={`orbit-ring orbit-ring-${ring + 1}`} key={ring} />)}
        {skillGroups.map((group, index) => {
          const angle = (360 / skillGroups.length) * index - 90;
          const radius = index % 2 === 0 ? 41 : 34;
          const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
          const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
          return (
            <button
              className={`orbit-node ${active === index ? "active" : ""}`}
              type="button"
              key={group.title}
              style={{ left: `${x}%`, top: `${y}%` }}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              tabIndex={-1}
            >
              <span>{group.code}</span>
            </button>
          );
        })}
        <div className="orbit-detail">
          <span>{skillGroups[active].code} / TECHNOLOGY CLUSTER</span>
          <h3>{skillGroups[active].title}</h3>
          <div>{skillGroups[active].skills.map((skill) => <b key={skill}>{skill}</b>)}</div>
        </div>
      </div>

      <div className="skills-accordion">
        {skillGroups.map((group, index) => (
          <div className={`skill-group-card ${active === index ? "open" : ""}`} key={group.title}>
            <button type="button" onClick={() => setActive(active === index ? -1 : index)} aria-expanded={active === index}>
              <span>{group.code}</span><strong>{group.title}</strong><ChevronDown />
            </button>
            <div className="skill-group-content">
              {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
