import styles from "../styles/Certifications.module.css";
import data from "@/data/data";
import { FaCertificate } from "react-icons/fa";
import Image from 'next/image';

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
    {/* First row: Certificate title */}
    <h3 className={styles.certTitle}>{cert.title}</h3>

    {/* Second row: info on left, logo on right */}
    <div className={styles.certInfoRow}>
      <div className={styles.certInfo}>
        <span className={styles.org}>{cert.organization}</span>
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
      {cert.logo && (
        <Image
          src={cert.logo}
          alt={cert.organization + " logo"}
          layout="intrinsic" 
          className={styles.certLogo}
        />
      )}
    </div>
  </div>
))}
        </div>
      </div>
    </section>
  );
}
