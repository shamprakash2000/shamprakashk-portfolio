import styles from "../styles/Experience.module.css";
import data from "@/data/data";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={`${styles.container} container`}>
        <ScrollReveal>
          <h2 className="section-title">Experience</h2>
        </ScrollReveal>
        <div className={styles.timeline}>
          {data.workExperience.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 120}>
              <div className={styles.item}>
                <div className={styles.dot} />
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.headerLeft}>
                      <h3 className={styles.title}>{exp.title}</h3>
                      <p className={styles.company}>
                        {exp.company}
                        <span className={styles.location}> · {exp.location}</span>
                      </p>
                    </div>
                    <div className={styles.headerRight}>
                      <span className={styles.period}>{exp.period}</span>
                      {exp.current && (
                        <span className={styles.currentBadge}>Current</span>
                      )}
                    </div>
                  </div>
                  <ul className={styles.items}>
                    {exp.items.map((item, i) => (
                      <li key={i} className={styles.listItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
