"use client";
import { useRef, useEffect, useState } from "react";
import styles from "../styles/About.module.css";
import data from "@/data/data";
import ScrollReveal from "./ScrollReveal";

function parseValue(str) {
  const match = str.match(/^(\d+(\.\d+)?)/);
  return match ? parseFloat(match[1]) : null;
}

function getSuffix(str) {
  return str.replace(/^[\d.]+/, "");
}

function CountUp({ value }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const started = useRef(false);
  const num = parseValue(value);
  const suffix = getSuffix(value);

  useEffect(() => {
    if (num === null) { setDisplay(value); return; }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1200;
        const start = performance.now();
        const tick = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * num * 10) / 10;
          setDisplay(Number.isInteger(num) ? String(Math.round(current)) : current.toFixed(1));
          if (progress < 1) requestAnimationFrame(tick);
          else setDisplay(String(num));
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [num, value]);

  return <span ref={ref} className={styles.statNumber}>{display}{suffix}</span>;
}

export default function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.container} container`}>
        <ScrollReveal>
          <h2 className="section-title">About Me</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className={styles.text}>
            <p>{data.aboutMe}</p>
            <p>{data.aboutMe2}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className={styles.stats}>
            {data.stats.map((stat, i) => (
              <div key={i} className={styles.statCard}>
                <CountUp value={stat.value} />
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
