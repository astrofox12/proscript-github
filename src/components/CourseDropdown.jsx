import { useState, useRef, useEffect } from "react";
import { COURSES } from "../lib/courses.js";
import { ui } from "../i18n/index.js";

const CATEGORIES = [
  { label: "Frontend", tag: "frontend" },
  { label: "Backend", tag: "backend" },
  { label: "Python", tag: "python" },
  { label: "DevOps", tag: "devops" },
  { label: "Design", tag: "design" },
  { label: "Marketing", tag: "marketing" },
  { label: "Data Science", tag: "data-science" },
  { label: "QA", tag: "qa" },
];

export default function CourseDropdown({ currentLocale = "en", onTagFilter }) {
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

  const handleAllClick = () => {
    setOpen(false);
    if (onTagFilter) {
      onTagFilter(null);
    } else {
      const homePath = currentLocale === "ru" ? "/ru/" : "/";
      window.location.href = homePath;
    }
  };

  const handleCategoryClick = (tag) => {
    setOpen(false);
    if (onTagFilter) {
      onTagFilter(tag);
    } else {
      const homePath = currentLocale === "ru" ? "/ru/" : "/";
      window.location.href = `${homePath}?tag=${tag}`;
    }
  };

  return (
    <div className="course-dropdown" ref={ref}>
      <button
        className="course-dropdown__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{t.allCourses}</span>
        <svg
          className={`course-dropdown__arrow ${open ? "course-dropdown__arrow--open" : ""}`}
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
        <div className="course-dropdown__panel">
          <button className="course-dropdown__all" onClick={handleAllClick}>
            <span className="course-dropdown__all-label">{t.all}</span>
            <span className="course-dropdown__count">{COURSES.length}</span>
          </button>

          <div className="course-dropdown__divider" />

          <div className="course-dropdown__section">
            <span className="course-dropdown__section-title">{t.popularCategories}</span>
            <div className="course-dropdown__list">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.tag}
                  className="course-dropdown__link"
                  onClick={() => handleCategoryClick(cat.tag)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
