"use client";

import { useEffect, useRef } from "react";

const labels = [
  ["FastAPI", "8%", "18%"],
  ["Python", "68%", "9%"],
  ["LLM", "80%", "44%"],
  ["FAISS", "70%", "78%"],
  ["OAuth", "10%", "75%"],
  ["MongoDB", "38%", "88%"],
  ["React", "5%", "48%"],
  ["Docker", "78%", "16%"]
];

export function HeroSystem() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      element.style.setProperty("--hero-x", `${x * 12}deg`);
      element.style.setProperty("--hero-y", `${y * -10}deg`);
    };
    const onLeave = () => {
      element.style.setProperty("--hero-x", "0deg");
      element.style.setProperty("--hero-y", "0deg");
    };
    element.addEventListener("pointermove", onMove);
    element.addEventListener("pointerleave", onLeave);
    return () => {
      element.removeEventListener("pointermove", onMove);
      element.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="hero-system" ref={ref} aria-label="Animated AI system architecture illustration">
      <div className="system-panel">
        <div className="panel-topbar">
          <div><span /><span /><span /></div>
          <p>kd://intelligent-system</p>
          <b>ACTIVE</b>
        </div>
        <div className="system-stage">
          <svg className="system-lines" viewBox="0 0 600 500" aria-hidden="true">
            <defs>
              <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#8B5CF6" />
                <stop offset="0.5" stopColor="#22D3EE" />
                <stop offset="1" stopColor="#5EEAD4" />
              </linearGradient>
              <filter id="soft-glow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            <g className="line-network" stroke="url(#line-gradient)" fill="none">
              <path d="M80 250 C145 120 205 130 300 250" />
              <path d="M80 250 C155 365 220 365 300 250" />
              <path d="M300 250 C390 125 455 135 530 250" />
              <path d="M300 250 C390 365 465 360 530 250" />
              <path d="M170 110 C260 45 410 55 475 150" />
              <path d="M160 390 C265 455 405 445 480 355" />
            </g>
            <g className="data-pulses" fill="#22D3EE" filter="url(#soft-glow)">
              <circle r="4"><animateMotion dur="3.2s" repeatCount="indefinite" path="M80 250 C145 120 205 130 300 250" /></circle>
              <circle r="3"><animateMotion dur="3.8s" begin="-.9s" repeatCount="indefinite" path="M80 250 C155 365 220 365 300 250" /></circle>
              <circle r="4"><animateMotion dur="3s" begin="-.4s" repeatCount="indefinite" path="M300 250 C390 125 455 135 530 250" /></circle>
              <circle r="3"><animateMotion dur="4.1s" begin="-1.4s" repeatCount="indefinite" path="M300 250 C390 365 465 360 530 250" /></circle>
            </g>
          </svg>

          <div className="ai-core">
            <div className="core-ring ring-one" />
            <div className="core-ring ring-two" />
            <div className="core-ring ring-three" />
            <div className="core-center"><span>KD</span><small>AI CORE</small></div>
          </div>

          <div className="node node-input"><span>01</span><strong>INPUT</strong><small>validated data</small></div>
          <div className="node node-output"><span>04</span><strong>RESPONSE</strong><small>structured output</small></div>
          <div className="node node-api"><span>02</span><strong>API</strong><small>FastAPI / Node</small></div>
          <div className="node node-engine"><span>03</span><strong>AI ENGINE</strong><small>RAG + LLM</small></div>

          {labels.map(([label, left, top], index) => (
            <span className="floating-tech" style={{ left, top, animationDelay: `${index * -0.7}s` }} key={label}>{label}</span>
          ))}

          <div className="mini-terminal">
            <div className="terminal-title"><span>system.log</span><i /></div>
            <code><b>$</b> boot intelligence_pipeline</code>
            <code><em>[ok]</em> api gateway ready</code>
            <code><em>[ok]</em> vector index connected</code>
            <code><em>[run]</em> awaiting validated input<span className="terminal-cursor" /></code>
          </div>

          <div className="flow-ribbon">
            <span>Input</span><i>→</i><span>API</span><i>→</i><span>AI Engine</span><i>→</i><span>Response</span>
          </div>
        </div>
      </div>
    </div>
  );
}
