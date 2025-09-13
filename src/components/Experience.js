import styles from "../styles/Experience.module.css";
import data from "@/data/data";
export default function Experience() {

  return (
    <section id="experience" className={styles.experience}>
      <div className={`${styles.container} container mx-auto`}>
        <h2>Experience</h2>
        <div className={styles.timeline}>
          {data.workExperience.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                    <h3>{exp.title}</h3>
                    <span className={styles.timelineDate}>{exp.period}</span>
                    
                    <p className={styles.company}>{exp.company}</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.items && exp.items.length > 0 ? (
                        exp.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))
                      ) : (
                        <li>No items listed.</li>
                      )}
                    </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}