import Image from "next/image";
import styles from "../styles/Projects.module.css";
import data from "@/data/data";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={`${styles.container} container`}>
        <ScrollReveal>
          <h2 className="section-title">Projects</h2>
        </ScrollReveal>
        <div className={styles.grid}>
          {data.projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 90}>
              <div className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={styles.overlay} />
                </div>
                <div className={styles.body}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.title}>{project.title}</h3>
                      <p className={styles.subtitle}>{project.subtitle}</p>
                    </div>
                    <div className={styles.links}>
                      {project.code && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.iconLink}
                          aria-label="View code on GitHub"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.iconLink}
                          aria-label="Live demo"
                        >
                          <FiExternalLink />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
