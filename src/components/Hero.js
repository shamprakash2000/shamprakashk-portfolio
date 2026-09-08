"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import data from "@/data/data";
import styles from "../styles/Hero.module.css";

const ROLES = [
  "Backend Engineer",
  "Java · Spring Boot",
  "GraphQL & REST APIs",
  "Distributed Systems",
  "AI · RAG · MCP",
];

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleFade, setRoleFade] = useState(true);

  const copyEmail = () => {
    navigator.clipboard.writeText(data.socialLinks.gmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleFade(false);
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setRoleFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const langSkills = data.skills.filter((s) => s.category === "Languages");
  const fwSkills = data.skills.filter((s) => s.category === "Frameworks");

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.grid} />
      </div>

      <div className={`${styles.container} container`}>
        {/* Top row: text + photo */}
        <div className={styles.heroRow}>
          <div className={styles.content}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Open to new opportunities
            </div>

            <h1 className={styles.name}>{data.name}</h1>
            <p className={styles.role} style={{ opacity: roleFade ? 1 : 0, transition: "opacity 0.3s ease" }}>
              {ROLES[roleIdx]}
            </p>
            <p className={styles.bio}>{data.heroBio}</p>

            <div className={styles.ctas}>
              <Link
                href={data.socialLinks.sendMail}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                Get in touch
              </Link>
              <Link
                href={data.resume}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutline}
              >
                View Resume
              </Link>
            </div>

            <div className={styles.socials}>
              <Link
                href={data.socialLinks.github}
                target="_blank"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
              <Link
                href={data.socialLinks.linkedin}
                target="_blank"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
              <button
                onClick={copyEmail}
                className={styles.socialLink}
                aria-label="Copy email"
              >
                <SiGmail />
              </button>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <div className={styles.imageRing} />
            <div className={styles.imageInner}>
              <Image
                src={data.image}
                alt={data.name}
                width={340}
                height={340}
                className={styles.profileImage}
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom row: skills + experience preview cards */}
        <div className={styles.previewRow}>
          {/* Skills card */}
          <div className={styles.previewCard}>
            <p className={styles.previewLabel}>Languages</p>
            <div className={styles.pillRow}>
              {langSkills.map((s, i) => (
                <span key={i} className={styles.pill}>
                  <span className={styles.pillIcon}>{s.icon}</span>
                  {s.name}
                </span>
              ))}
            </div>
            <p className={styles.previewLabel} style={{ marginTop: "0.85rem" }}>Frameworks</p>
            <div className={styles.pillRow}>
              {fwSkills.map((s, i) => (
                <span key={i} className={styles.pill}>
                  <span className={styles.pillIcon}>{s.icon}</span>
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          {/* Experience card */}
          <div className={styles.previewCardExp}>
            {data.workExperience.slice(0, 2).map((job, i) => (
              <div key={i}>
                <div className={styles.expNameRow}>
                  <p className={styles.expCompany}>{job.shortName ?? job.company}</p>
                  {job.current ? (
                    <span className={styles.currentBadge}>Current</span>
                  ) : (
                    <span className={styles.periodBadge}>{job.period.split("–")[1]?.trim() ?? ""}</span>
                  )}
                </div>
                <p className={styles.expTitle}>{job.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className={styles.scrollDown} aria-label="Scroll down">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>

      {/* Email copied toast */}
      <div className={`${styles.toast} ${copied ? styles.toastVisible : ""}`}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        Email copied!
      </div>
    </section>
  );
}
