import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const pages = ["", "/about", "/experience", "/projects", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "monthly" as const : "yearly" as const, priority: path === "" ? 1 : 0.8 })),
    ...projects.filter((project) => project.caseStudy).map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.7 }))
  ];
}
