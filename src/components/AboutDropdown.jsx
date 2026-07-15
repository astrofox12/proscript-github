import { useState, useRef, useEffect } from "react";
import { ui } from "../i18n/index.js";

export default function AboutDropdown({ currentLocale = "en", aboutUrl, blogUrl }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const t = ui[currentLocale]?.header || ui.en.header;

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="about-dropdown" ref={ref}>
      <button
        className="about-dropdown__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{t.aboutAcademy}</span>
        <svg
          className={`about-dropdown__arrow ${open ? "about-dropdown__arrow--open" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="about-dropdown__panel">
          <a href={aboutUrl} className="about-dropdown__link" onClick={() => setOpen(false)}>
            {t.aboutUs}
          </a>
          <a href={blogUrl} className="about-dropdown__link" onClick={() => setOpen(false)}>
            {t.blog}
          </a>
        </div>
      )}
    </div>
  );
}
