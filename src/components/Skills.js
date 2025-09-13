import styles from '../styles/Skills.module.css';
import data from '@/data/data';

export default function Skills() {


  return (
    <section id="skills" className={styles.skills}>
      <div className={`${styles.container} container mx-auto`}>
        <h2>Skills</h2>
        <div className={styles.skillsGrid}>
          {data.skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
                <div className={styles.skillIcon}>{skill.icon}</div>
              <p className={styles.skillName}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}