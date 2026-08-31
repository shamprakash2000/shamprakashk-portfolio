"use client";
import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "3px", zIndex: 9999, pointerEvents: "none" }}>
      <div style={{ height: "100%", width: `${progress}%`, background: "#c8f135", transition: "width 0.1s linear" }} />
    </div>
  );
}
