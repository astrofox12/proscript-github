import React, { useState, useEffect } from "react";

import { COURSES } from "../lib/courses.js";
import { ClerkProvider, useAuth, UserButton } from "@clerk/react";
import LangSwitcher from "./LangSwitcher.jsx";
import { ui } from "../i18n/index.js";

function MyCoursesPageInner({ currentLocale = "en" }) {
  const { isSignedIn, isLoaded } = useAuth();
  const [activated, setActivated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isActivating, setIsActivating] = useState(false);
  const [keyInput, setKeyInput] = useState("");
  const [keyMessage, setKeyMessage] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      window.location.href = "/";
    }
  }, [isLoaded, isSignedIn]);

  const t = ui[currentLocale] || ui.en;
  const PYTHON_DISABLED = true;

  const pythonCourse = PYTHON_DISABLED ? null : COURSES.find((c) => c.id === "python-dev");

  useEffect(() => {
    fetch("https://checkout.proscriptacademy.com/check-activation")
      .then((r) => r.json())
      .then((data) => setActivated(data.activated))
      .catch(() => setActivated(false))
      .finally(() => setIsLoading(false));
  }, []);

  const handleActivate = async () => {
    const trimmed = keyInput.trim();
    if (!trimmed) {
      setKeyMessage({ type: "error", text: t.dashboard.keyRequired });
      return;
    }

    if (trimmed.length !== 20) {
      setKeyMessage({ type: "error", text: t.dashboard.keyLengthError });
      return;
    }

    setIsActivating(true);
    try {
      const res = await fetch("https://checkout.proscriptacademy.com/verify-key", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: trimmed }),
      });
      const data = await res.json();
      if (data.valid) {
        setActivated(true);
        const courseTitle = currentLocale === "ru" ? pythonCourse?.title?.ru : pythonCourse?.title?.en || pythonCourse?.title?.ru;
        setKeyMessage({ type: "success", text: t.dashboard.keySuccess.replace("{title}", courseTitle || "") });
        setKeyInput("");
      } else if (data.alreadyActivated) {
        setKeyMessage({ type: "error", text: t.dashboard.keyAlreadyUsed });
      } else {
        setKeyMessage({ type: "error", text: t.dashboard.keyInvalid });
      }
    } catch {
      setKeyMessage({ type: "error", text: t.dashboard.keyConnectionError });
    } finally {
      setIsActivating(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleActivate();
  };

  const courseCount = activated && pythonCourse ? 1 : 0;
  const courseLabel = courseCount === 1
    ? t.dashboard.course
    : t.dashboard.courses;

  const courseName = currentLocale === "ru"
    ? pythonCourse?.title?.ru
    : pythonCourse?.title?.en || pythonCourse?.title?.ru;

  const courseLevel = currentLocale === "ru"
    ? pythonCourse?.level?.ru
    : pythonCourse?.level?.en || pythonCourse?.level?.ru;

  const courseExcerpt = currentLocale === "ru"
    ? pythonCourse?.excerpt?.ru
    : pythonCourse?.excerpt?.en || pythonCourse?.excerpt?.ru;

  if (!isLoaded) {
    return (
      <div className="dashboard">
        <div className="spinner-wrapper">
          <div className="spinner" />
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return null;
  }

  return (
    <div className="dashboard">
      <header className="dashboard__topbar">
        <button className="dashboard__sidebar-toggle" onClick={() => setSidebarOpen(v => !v)} aria-label="Toggle sidebar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {sidebarOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></>
            )}
          </svg>
        </button>
        <div className="dashboard__logo">
          <span className="dashboard__logo-mark">Pro</span>
          <span className="dashboard__logo-accent">Script</span>
          <span className="dashboard__logo-suffix">Academy</span>
        </div>
        <LangSwitcher currentLocale={currentLocale} />
        <UserButton />
      </header>

      <div className="dashboard__layout">
        <aside className={`dashboard__sidebar${sidebarOpen ? " sidebar--open" : ""}`}>
          <div className="sidebar__module-info">
            <h2 className="sidebar__module-title">{t.dashboard.myCourses}</h2>
            <span className="sidebar__module-duration">{t.dashboard.available}: {courseCount === 0 ? t.dashboard.noCoursesZero : `${courseCount} ${courseLabel}`}</span>
          </div>

          <nav className="sidebar__nav">
            {activated && pythonCourse && (
              <div className="sidebar__section">
                <a href={`/dashboard/learn/${pythonCourse.id}`} className="sidebar__section-btn sidebar__section-btn--active" style={{ textDecoration: "none", display: "flex" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>{courseName}</span>
                </a>
              </div>
            )}
          </nav>
        </aside>

        <main className="dashboard__content">
          <div className="my-courses">
            <h1 className="my-courses__title">{t.dashboard.myCourses}</h1>
            <p className="my-courses__subtitle">{t.dashboard.continueLearning}</p>

            {isLoading && (
              <div className="spinner-wrapper">
                <div className="spinner" />
              </div>
            )}

            {!isLoading && <div className="my-courses__list">
              {activated && pythonCourse && (
                <div className="my-courses__card my-courses__card--python" style={{ marginBottom: 0 }}>
                  <div className="my-courses__card-top">
                    <div className="my-courses__card-icon">
                      <svg viewBox="0 0 128 128" width="48" height="48">
                        <path d="M63.4 15c-18.5 0-17.2 8-17.2 8v8.1h17.4v2.4H40.5S24 31.3 24 48.7s14.7 16.4 14.7 16.4h8.7v-7.9S47.7 50.8 47.7 42s7.8-10.5 7.8-10.5h9.4v9.6h-9.2s-4.8.1-4.8 4.5 3.2 5.3 3.2 5.3h7.3s8.1-1 8.1-10V23s2.7-8-10.9-8zm-12.4 7.4a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6z" fill="#3776AB"/>
                        <path d="M64.6 113c18.5 0 17.2-8 17.2-8v-8.1H64.4v-2.4h23.3S99 96.7 99 79.3s-14.7-16.4-14.7-16.4h-8.7v7.9S80.3 77.2 80.3 86s-7.8 10.5-7.8 10.5h-9.4v-9.6h9.2s4.8-.1 4.8-4.5-3.2-5.3-3.2-5.3h-7.3s-8.1 1-8.1 10v17.1S38.9 113 52.5 113zm12.4-7.4a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z" fill="#FFD43B"/>
                      </svg>
                    </div>
                    <div className="my-courses__card-info">
                      <h3 className="my-courses__card-title">{courseName}</h3>
                      <div className="my-courses__card-tags">
                        <span className="my-courses__card-tag">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                          {courseLevel}
                        </span>
                      </div>
                    </div>
                    <div className="my-courses__card-action">
                      <a href={`/dashboard/learn/${pythonCourse.id}`} className="my-courses__card-btn">
                        {t.dashboard.goToCourse}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p className="my-courses__card-desc">{courseExcerpt}</p>
                </div>
              )}

              {!activated && (
                <div className="my-courses__empty">
                  <div className="my-courses__empty-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c6 3 10 0 12-2v-5" />
                    </svg>
                  </div>
                  <h3 className="my-courses__empty-title">{t.dashboard.noCourses}</h3>
                  <p className="my-courses__empty-desc">{t.dashboard.noCoursesDesc}</p>
                  <a href="/" className="my-courses__empty-btn">{t.dashboard.buyCourse}</a>
                </div>
              )}

            </div>
            }

            <div className="activation-key">
              <h2 className="activation-key__title">{t.dashboard.activateCourse}</h2>
              <p className="activation-key__desc">{t.dashboard.activateDesc}</p>
              <div className="activation-key__row">
                <input
                  className={`activation-key__input${keyMessage?.type === "error" ? " activation-key__input--error" : ""}`}
                  type="text"
                  placeholder={t.dashboard.activatePlaceholder}
                  value={keyInput}
                  onChange={(e) => {
                    setKeyInput(e.target.value);
                    if (keyMessage) setKeyMessage(null);
                  }}
                  onKeyDown={handleKeyDown}
                />
                <button className="activation-key__btn" onClick={handleActivate} disabled={isActivating}>
                  {isActivating ? <span className="spinner spinner--small" /> : t.dashboard.activateBtn}
                </button>
              </div>
              {keyMessage && (
                <div className={`activation-key__message activation-key__message--${keyMessage.type}`}>
                  {keyMessage.type === "success" ? "✓" : "✕"} {keyMessage.text}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function MyCoursesPage(props) {
  return (
    <ClerkProvider publishableKey={import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <MyCoursesPageInner {...props} />
    </ClerkProvider>
  );
}
