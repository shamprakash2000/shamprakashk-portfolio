import styles from "../styles/Certifications.module.css";
import data from "@/data/data";
import { FaCertificate } from "react-icons/fa";

export default function Certifications() {
  return (
    <section id="certifications" className={styles.certifications}>
      <div className={`${styles.container} container mx-auto`}>
        <h2 className="flex items-center gap-2">
          Certifications
        </h2>

        <div className={styles.certGrid}>
          {data.certifications.map((cert, index) => (
            <div key={index} className={styles.certCard}>
              <div className={styles.certHeader}>
                <h3>{cert.title}</h3>
                <span className={styles.org}>{cert.organization}</span>
              </div>
              <p className={styles.date}>{cert.date}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certLink}
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
