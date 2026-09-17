"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/portfolio";
import { Close, Download, Menu } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="brand-mark" href="/" aria-label="Kalpana Devi home">
          <span>KD</span>
          <i />
        </Link>

        <div className="desktop-nav">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.split("#")[0]);
            return (
              <Link className={active ? "active" : ""} href={item.href} key={item.label}>
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <a className="button button-small nav-resume" href="/resume/Kalpana-Devi-T-Resume.pdf" download>
            <Download size={16} /> Resume
          </a>
          <button
            className="icon-button mobile-menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      <div id="mobile-navigation" className={`mobile-navigation ${open ? "is-open" : ""}`}>
        <div className="mobile-nav-inner">
          <span className="mono-label">NAVIGATION / 07 LINKS</span>
          {navigation.map((item, index) => (
            <Link href={item.href} key={item.label} style={{ transitionDelay: `${index * 40}ms` }}>
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <a className="button button-primary mobile-resume" href="/resume/Kalpana-Devi-T-Resume.pdf" download>
            <Download /> Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
