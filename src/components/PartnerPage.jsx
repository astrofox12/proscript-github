import React from "react";

const perkColors = [
  "#5eead4",
  "#a78bfa",
  "#f472b6",
  "#fbbf24",
  "#60a5fa",
];

export default function PartnerPage({ t: tProp, homeUrl, currentLocale }) {
  const t = typeof tProp === "string" ? JSON.parse(tProp) : tProp;
  const tc = t.partner;

  return (
    <>
    <main className="about">
      <div className="about__glow" />
      <div className="about__content">
        <div className="product-detail__back">
          <a href={homeUrl} className="product-detail__back-link">
            <svg viewBox="0 0 24 24" width="0.9rem" height="0.9rem" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {tc.backToHome}
          </a>
        </div>

        <div className="about__hero">
          <h1 className="about__logo">{tc.title}</h1>
        </div>

        <div className="about__section">
          {tc.intro.map((p, i) => (
            <p key={i} className="about__text">{p}</p>
          ))}
        </div>

        <div className="about__divider">
          <span className="about__divider-dot" />
          <span className="about__divider-dot" />
          <span className="about__divider-dot" />
        </div>

        <div className="about__section">
          <h2 className="about__title">
            <span className="about__title-accent">{tc.howItWorks.accent}</span> {tc.howItWorks.title}
          </h2>
          {tc.howItWorks.paragraphs.map((p, i) => (
            <p key={i} className="about__text">{p}</p>
          ))}
        </div>

        <div className="about__divider">
          <span className="about__divider-dot" />
          <span className="about__divider-dot" />
          <span className="about__divider-dot" />
        </div>

        <div className="about__section">
          <h2 className="about__title">
            <span className="about__title-accent">{tc.whyPartner.accent}</span> {tc.whyPartner.title}
          </h2>

          <ul className="about__list">
            {tc.whyPartner.perks.map((title, i) => (
              <li
                key={i}
                className="about__list-item"
                style={{ "--item-color": perkColors[i] }}
              >
                <span
                  className="about__list-badge"
                  style={{ background: perkColors[i] }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <strong style={{ color: perkColors[i] }}>{title}</strong>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__divider">
          <span className="about__divider-dot" />
          <span className="about__divider-dot" />
          <span className="about__divider-dot" />
        </div>

        <div className="about__section">
          <h2 className="about__title">
            <span className="about__title-accent">{tc.flexibleTerms.accent}</span> {tc.flexibleTerms.title}
          </h2>
          {tc.flexibleTerms.paragraphs.map((p, i) => (
            <p key={i} className="about__text">{p}</p>
          ))}
        </div>

        <div className="about__divider">
          <span className="about__divider-dot" />
          <span className="about__divider-dot" />
          <span className="about__divider-dot" />
        </div>

        <div className="about__section">
          <h2 className="about__title">
            <span className="about__title-accent">{tc.letsBuild.accent}</span> {tc.letsBuild.title}
          </h2>
          {tc.letsBuild.paragraphs.map((p, i) => (
            <p key={i} className="about__text">{p}</p>
          ))}
          <p className="about__tagline-accent">{tc.letsBuild.tagline}</p>
        </div>

        <div className="about__contacts">
          <div className="about__contacts-glow" />
          <h3 className="about__contacts-title">
            <svg className="about__contacts-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {tc.contacts.title}
          </h3>
          <p className="about__contacts-text">
            <span className="about__contacts-label">Email:</span>{" "}
            <a
              href={`mailto:${tc.contacts.email}`}
              className="about__contacts-link"
            >
              {tc.contacts.email}
            </a>
          </p>
          <p className="about__contacts-text">
            <span className="about__contacts-label">{tc.contacts.responseTimeLabel}</span>{" "}
            <span className="about__contacts-value">{tc.contacts.responseTime}</span>
          </p>
        </div>
      </div>
    </main>
    </>
  );
}
