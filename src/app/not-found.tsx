import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="not-found-page"><div className="not-found-code">404</div><span className="eyebrow"><i /> Route Not Found</span><h1>This system path does not exist.</h1><p>Return to the portfolio home or explore the verified project archive.</p><div><Link className="button button-primary" href="/">Return Home <ArrowRight /></Link><Link className="button button-secondary" href="/projects">Explore Projects</Link></div></section>
  );
}
