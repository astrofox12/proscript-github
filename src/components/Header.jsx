import React from "react";
import LangSwitcher from "./LangSwitcher.jsx";
import CourseDropdown from "./CourseDropdown.jsx";
import AboutDropdown from "./AboutDropdown.jsx";
import { ClerkProvider, useAuth, SignInButton, Show } from "@clerk/react";

function HeaderInner({ currentLocale, logoAsLink = true, onTagFilter, aboutUrl, blogUrl, hideAuth = false }) {
  const { isSignedIn, isLoaded } = useAuth();

  return (
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
      {!hideAuth && (
        <div className="header__actions">
          {!isLoaded ? (
            <button className="header__auth-btn" aria-label="Sign In">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
          ) : (
            <>
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button className="header__auth-btn" aria-label="Sign In">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </button>
                </SignInButton>
              </Show>
              <Show when="signed-in">
                <a href="/dashboard" className="header__dashboard-btn">
                  <svg className="header__dashboard-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="header__dashboard-label">перейти в кабинет</span>
                </a>
              </Show>
            </>
          )}
        </div>
      )}
    </header>
  );
}

export default function Header(props) {
  const key = import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY;

  console.log("=== Clerk Debug ===");
  console.log("Has key:", !!key);
  console.log("Is production key:", key?.startsWith("pk_live_"));
  console.log("Key preview:", key ? key.slice(0, 25) + "..." : "NO KEY");
  console.log("Current URL:", window.location.href);
  return (
    <ClerkProvider publishableKey={import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <HeaderInner {...props} />
    </ClerkProvider>
  );
}
