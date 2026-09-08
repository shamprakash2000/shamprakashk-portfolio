"use client";
import styles from "../styles/Projects.module.css";
import data from "@/data/data";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const featured = data.projects.filter((p) => p.featured);
  const compact = data.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className={styles.projects}>
      <div className={`${styles.container} container`}>
        <ScrollReveal>
          <h2 className="section-title">Projects</h2>
        </ScrollReveal>

        {/* Featured pair */}
        <div className={styles.featuredGrid}>
          {featured.map((project, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className={styles.featuredCard}>
                <div className={styles.fcHeader}>
                  <div>
                    <h3 className={styles.fcTitle}>{project.title}</h3>
                    <p className={styles.fcSub}>{project.subtitle}</p>
                  </div>
                </div>
                <p className={styles.fcDesc}>{project.description}</p>
                <div className={styles.fcTags}>
                  {project.tags.map((tag, j) => (
                    <span key={j} className={styles.fcTag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.fcLinks}>
                  {project.code && (
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className={styles.fcLink}>
                      GitHub →
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.fcLink}>
                      Live demo →
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Compact grid */}
        <div className={styles.compactGrid}>
          {compact.map((project, i) => (
            <ScrollReveal key={i} delay={i * 70}>
              <div className={styles.compactCard}>
                <h3 className={styles.ccTitle}>{project.title}</h3>
                <p className={styles.ccSub}>{project.subtitle}</p>
                <p className={styles.ccDesc}>{project.description}</p>
                <div className={styles.ccTags}>
                  {project.tags.map((tag, j) => (
                    <span key={j} className={styles.ccTag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.ccLinks}>
                  {project.code && (
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className={styles.ccLink}>
                      GitHub →
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.ccLink}>
                      Live →
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
