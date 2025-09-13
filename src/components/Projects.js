import Image from 'next/image';
import styles from '../styles/Projects.module.css';
import data from '@/data/data';
export default function Projects() {


  return (
    <section id="projects" className={styles.projects}>
      <div className={`${styles.container} container mx-auto`}>
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>
          {data.projects.map((project, index) => (
            <div key={index} className={`${styles.card} ${styles.projectCard}`}>
              <a 
    key={index} 
    href={project.code} 
    target="_blank" 
    rel="noopener noreferrer"
    className={styles.cardLink}
  >
              <div className={styles.projectImageContainer}>
              <Image
                src={project.image}
                alt={project.title}
                layout="intrinsic" 
                width={300}
                height={300}
                  className={styles.projectImage}
                  
                />
              </div>
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.projectTag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  {project.demo && (<a href={project.demo} className={styles.btn} target="_blank" rel="noopener noreferrer">Live Demo</a>)}
                  {project.code && (<a href={project.code} target="_blank" rel="noopener noreferrer" className={styles.certLink}>View Code</a>)}
                </div>
              </div>
              </a>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}