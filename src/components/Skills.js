import styles from "../styles/Skills.module.css";
import data from "@/data/data";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  const categories = [...new Set(data.skills.map((s) => s.category))];

  return (
    <section id="skills" className={styles.skills}>
      <div className={`${styles.container} container`}>
        <ScrollReveal>
          <h2 className="section-title">Technical Skills</h2>
        </ScrollReveal>
        <div className={styles.categories}>
          {categories.map((cat, ci) => (
            <ScrollReveal key={cat} delay={ci * 70}>
              <div className={styles.category}>
                <h3 className={styles.catLabel}>{cat}</h3>
                <div className={styles.grid}>
                  {data.skills
                    .filter((s) => s.category === cat)
                    .map((skill, i) => (
                      <div key={i} className={styles.skillCard}>
                        <span className={styles.icon}>{skill.icon}</span>
                        <span className={styles.name}>{skill.name}</span>
                      </div>
                    ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
