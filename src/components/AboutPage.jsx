import React from "react";

const benefitColors = [
  "#5eead4",
  "#a78bfa",
  "#f472b6",
  "#fbbf24",
  "#34d399",
];

const approachColors = ["#60a5fa", "#f87171", "#2dd4bf"];

export default function AboutPage({ t: tProp, a, homeUrl, currentLocale }) {
  const t = typeof tProp === "string" ? JSON.parse(tProp) : tProp;
  const benefits = t.about.benefits.items.map((item, i) => ({
    ...item,
    color: benefitColors[i] || "#5eead4",
  }));

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
            {t.about.backToHome}
          </a>
        </div>

        <div className="about__hero">
          <h1 className="about__logo">ProScript Academy</h1>
          <p className="about__tagline">{t.about.tagline}</p>
        </div>

        <div className="about__section about__section--intro">
          {t.about.paragraphs.map((text, i) => (
            <p key={i} className="about__text">{text}</p>
          ))}
        </div>

        <div className="about__section">
          <h2 className="about__title">
            <span className="about__title-accent">{t.about.benefits.titleAccent}</span>{" "}
            {t.about.benefits.title}
          </h2>

          <p className="about__text about__text--intro">{t.about.benefits.intro}</p>

          <ul className="about__list">
            {benefits.map((item, i) => (
              <li
                key={i}
                className="about__list-item"
                style={{ "--item-color": item.color }}
              >
                <span
                  className="about__list-badge"
                  style={{ background: item.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <strong style={{ color: item.color }}>{item.title}</strong>
                  <span className="about__list-dash"> — </span>
                  {item.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__section about__section--philosophy">
          <h2 className="about__title">
            <span className="about__title-accent">{t.about.closing.accentTagline}</span>
          </h2>

          {t.about.closing.paragraphs.map((text, i) => (
            <p key={i} className="about__text">{text}</p>
          ))}
        </div>

        {t.about.approach && (
          <div className="about__section about__section--approach">
            <h2 className="about__title">
              <span className="about__title-accent">{t.about.approach.titleAccent}</span>{" "}
              {t.about.approach.title}
            </h2>

            <ul className="about__approach-list">
              {t.about.approach.items.map((text, i) => (
                <li
                  key={i}
                  className="about__approach-item"
                  style={{ "--item-color": approachColors[i] || "#5eead4" }}
                >
                  <span
                    className="about__approach-icon"
                    style={{ background: approachColors[i] || "#5eead4" }}
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {t.about.approach.note && (
              <p className="about__approach-note">
                {t.about.approach.note}
              </p>
            )}
          </div>
        )}

        <div className="about__contacts">
          <div className="about__contacts-glow" />
          <h3 className="about__contacts-title">
            <svg className="about__contacts-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {t.about.contacts.title}
          </h3>
          <div className="about__contacts-row">
            <p className="about__contacts-text">
              <span className="about__contacts-label">{t.about.contacts.emailLabel}</span>{" "}
              <a
                href={`mailto:${t.about.contacts.email}`}
                className="about__contacts-link"
              >
                {t.about.contacts.email}
              </a>
            </p>
            <p className="about__contacts-text">
              <span className="about__contacts-label">{t.about.contacts.responseTimeLabel}</span>{" "}
              <span className="about__contacts-value">{t.about.contacts.responseTime}</span>
            </p>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
