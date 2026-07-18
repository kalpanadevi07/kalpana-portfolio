export type ProjectCategory =
  | "Production AI"
  | "Backend"
  | "Automation"
  | "Full Stack"
  | "Computer Vision"
  | "IoT"
  | "AI / Data"
  | "Frontend";

export interface Project {
  slug: string;
  title: string;
  value: string;
  description: string;
  technologies: string[];
  categories: ProjectCategory[];
  liveUrl?: string;
  liveLabel?: string;
  featured?: boolean;
  visual: string;
  flow?: string[];
  highlights?: string[];
  caseStudy?: {
    challenge: string;
    architecture: string[];
    workflow: string[];
    responsibilities: string[];
    decisions: string[];
    outcome: string;
  };
}
