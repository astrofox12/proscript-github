import React, { useState } from "react";
import LangSwitcher from "./LangSwitcher.jsx";
import CourseDropdown from "./CourseDropdown.jsx";
import AboutDropdown from "./AboutDropdown.jsx";
import AuthModal from "./AuthModal.jsx";

export default function Header({ currentLocale, logoAsLink = true, onTagFilter, aboutUrl, blogUrl }) {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__logo-group">
          {logoAsLink ? (
            <a href="/" className="header__logo-link">
              <span className="header__logo">
                <span className="header__logo-mark">Pro</span>
                <span className="header__logo-accent">Script</span>
                <span className="header__logo-suffix">Academy</span>
              </span>
            </a>
          ) : (
            <div className="header__logo-link">
              <span className="header__logo">
                <span className="header__logo-mark">Pro</span>
                <span className="header__logo-accent">Script</span>
                <span className="header__logo-suffix">Academy</span>
              </span>
            </div>
          )}
        </div>
        <div className="header__selects">

            <AboutDropdown
              currentLocale={currentLocale}
              aboutUrl={aboutUrl}
              blogUrl={blogUrl}
            />
    
            <CourseDropdown currentLocale={currentLocale} onTagFilter={onTagFilter} />
        </div>
          <div className="header__lang-col">
            <LangSwitcher currentLocale={currentLocale} />
          </div>
          <div className="header__actions">
            <button className="header__auth-btn" onClick={() => setAuthOpen(true)} aria-label="Sign In">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
          </div>
      </header>
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} currentLocale={currentLocale} />
    </>
  );
};
