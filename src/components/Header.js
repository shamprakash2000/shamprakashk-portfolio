"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import data from "@/data/data";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
  };

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const sectionIds = data.navigation.map((n) => n.section.toLowerCase() === "home" ? "home" : n.link.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const nav = data.navigation.find((n) => n.link === `#${id}`);
            if (nav) setActiveSection(nav.section);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.inner} container`}>
        <Link href="#home" className={styles.logo}>
          <span className={styles.logoText}>SP</span>
        </Link>

        <nav className={styles.nav}>
          {data.navigation.filter(n => n.section !== "Home").map((nav, i) => (
            <Link
              key={i}
              href={nav.link}
              className={`${styles.navLink} ${activeSection === nav.section ? styles.activeLink : ""}`}
            >
              {nav.section}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.themeBtn}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            )}
          </button>
          <Link href={data.socialLinks.sendMail} className={styles.hireBtn}>
            Hire me →
          </Link>
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ""}`} />
        </button>
      </div>

      <nav
        className={styles.mobileNav}
        style={{ maxHeight: menuOpen ? "400px" : "0", overflow: "hidden", transition: "max-height 0.3s ease" }}
      >
        {data.navigation.map((nav, i) => (
          <Link
            key={i}
            href={nav.link}
            className={`${styles.mobileNavLink} ${activeSection === nav.section ? styles.activeMobileLink : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {nav.section}
          </Link>
        ))}
      </nav>

      {/* Scroll progress bar — sits at the bottom edge of the sticky header */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "2px", pointerEvents: "none" }}>
        <div style={{ height: "100%", width: `${progress}%`, background: "var(--accent)", transition: "width 0.15s linear" }} />
      </div>
    </header>
  );
}
