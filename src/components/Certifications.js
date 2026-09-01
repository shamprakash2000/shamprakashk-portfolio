import styles from "../styles/Certifications.module.css";
import data from "@/data/data";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

export default function Certifications() {
  return (
    <section id="certifications" className={styles.certifications}>
      <div className={`${styles.container} container`}>
        <ScrollReveal>
          <h2 className="section-title">Certifications</h2>
        </ScrollReveal>
        <div className={styles.grid}>
          {data.certifications.map((cert, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className={styles.card}>
                <div className={styles.logoWrap}>
                  <Image
                    src={cert.logo}
                    alt={cert.organization}
                    width={36}
                    height={36}
                    className={styles.logoImage}
                  />
                </div>
                <div className={styles.body}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.title}>{cert.title}</h3>
                    {cert.level && (
                      <span className={`${styles.levelBadge} ${cert.level === "Professional" ? styles.levelPro : styles.levelAssoc}`}>
                        {cert.level}
                      </span>
                    )}
                  </div>
                  <p className={styles.org}>{cert.organization}</p>
                  <p className={styles.date}>{cert.date}</p>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewLink}
                    aria-label="View certificate"
                  >
                    <FiExternalLink size={14} />
                    <span>View</span>
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
