"use client";

import { useState } from "react";

const nodes = [
  { title: "User Input", code: "IN", detail: "A question, URL, file or workflow request enters the system." },
  { title: "FastAPI / Node.js API", code: "API", detail: "High-performance APIs receive requests and coordinate services." },
  { title: "Authentication & Validation", code: "AUTH", detail: "OAuth 2.0, tokens and typed validation protect each workflow." },
  { title: "LLM or AI Processing", code: "LLM", detail: "The AI layer interprets instructions and creates structured outputs." },
  { title: "RAG Retrieval", code: "RAG", detail: "Relevant knowledge is retrieved before a grounded response is generated." },
  { title: "FAISS / Vector Database", code: "VDB", detail: "Efficient vector indexing supports similarity-based retrieval." },
  { title: "Structured Response", code: "JSON", detail: "Validated response models keep downstream integrations predictable." },
  { title: "Frontend / Automation Output", code: "OUT", detail: "Results appear in a product interface or trigger an automated action." }
];

export function ArchitectureFlow() {
  const [active, setActive] = useState(3);

  return (
    <div className="architecture-shell">
      <div className="architecture-flow" role="list" aria-label="Intelligent system architecture flow">
        {nodes.map((node, index) => (
          <div className="architecture-step-wrap" key={node.title}>
            <button
              className={`architecture-node ${active === index ? "active" : ""}`}
              type="button"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              style={{ animationDelay: `${index * 360}ms` }}
              role="listitem"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <i>{node.code}</i>
              <strong>{node.title}</strong>
            </button>
            {index < nodes.length - 1 ? <div className="architecture-connector"><b /></div> : null}
          </div>
        ))}
      </div>
      <div className="architecture-detail" aria-live="polite">
        <span>{nodes[active].code} / NODE {String(active + 1).padStart(2, "0")}</span>
        <h3>{nodes[active].title}</h3>
        <p>{nodes[active].detail}</p>
      </div>
    </div>
  );
}
