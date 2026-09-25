"use client";
import { useState, useEffect } from "react";
import styles from "../styles/Footer.module.css";
import data from "@/data/data";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <footer className={styles.footer}>
        <div className={`${styles.container} container`}>
          <div className={styles.top}>
            <div className={styles.brand}>
              <div className={styles.logo}>SP</div>
              <div>
                <p className={styles.name}>{data.name}</p>
                <p className={styles.tagline}>{data.tagline}</p>
              </div>
            </div>
            <div className={styles.socials}>
              <Link
                href={data.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
              <Link
                href={data.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
              <Link
                href={data.socialLinks.sendMail}
                className={styles.socialLink}
                aria-label="Email"
              >
                <SiGmail />
              </Link>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.bottom}>
            <p className={styles.copy}>
              © {new Date().getFullYear()} {data.name}. All rights reserved.
            </p>
            <p className={styles.made}>Crafted with care · Next.js</p>
          </div>
        </div>
      </footer>

      <button
        className={`${styles.backToTop} ${showTop ? styles.backToTopVisible : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
