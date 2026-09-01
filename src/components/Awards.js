import styles from "../styles/Awards.module.css";
import data from "@/data/data";
import ScrollReveal from "./ScrollReveal";

export default function Awards() {
  const total = data.awards.reduce((sum, a) => sum + a.count, 0);
  const orgs = [...new Set(data.awards.map((a) => a.organization))].join(" & ");

  return (
    <section id="awards" className={styles.awards}>
      <div className={`${styles.container} container`}>
        <ScrollReveal>
          <h2 className="section-title">Awards & Recognition</h2>
        </ScrollReveal>
        <div className={styles.grid}>
          {data.awards.map((award, i) => (
            <ScrollReveal key={i} delay={i * 80} className={i === 0 ? styles.spanTwo : ""}>
              <div className={i === 0 ? styles.cardFeatured : styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.icon}>{award.icon}</span>
                  {award.count > 1 && (
                    <span className={styles.countBadge}>×{award.count}</span>
                  )}
                </div>
                <h3 className={styles.title}>{award.title}</h3>
                <span className={styles.subtitleTag}>{award.subtitle}</span>
                <p className={styles.description}>{award.description}</p>
                <p className={styles.org}>{award.organization}</p>
                <p className={styles.dates}>{award.dates}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
