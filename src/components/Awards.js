import styles from '../styles/Awards.module.css';
import data from '@/data/data';
import { FaInfoCircle } from "react-icons/fa";

export default function Awards() {

  return (
    <section id="awards" className={styles.awards}>
      <div className={`${styles.container} container mx-auto`}>
        <h2 className="flex items-center gap-2">
          Awards & Recognition
          <span className="relative group">
            <FaInfoCircle className="text-black text-sm cursor-pointer" />
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 text-xs bg-gray-100 text-black rounded shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              <span>Top Impactor Award is Half yearly award.</span><br/>
              <span>Tech Champion Award is Quarterly award.</span><br/>
              <span>Excellence Spot Award and Rising Star Spot Award are Monthly awards.</span>
            </span>
          </span>
        </h2>
        <div className={styles.awardsGrid}>
          {data.awards.map((award, index) => (
            <div key={index} className={`${styles.card} ${styles.awardCard}`}>
              <div className={styles.awardIcon}>{award.icon}</div>
              <h3>{award.title}</h3>
              <p className={styles.awardEvent}>{award.organization}</p>
              <p>{award.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
