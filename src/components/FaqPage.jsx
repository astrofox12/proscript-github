import React from "react";

export default function FaqPage({ t: tProp, homeUrl, currentLocale }) {
  const t = typeof tProp === "string" ? JSON.parse(tProp) : tProp;
  const tc = t.faq;

  return (
    <>
    <main className="about">
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

        <h1 className="about__title">{tc.title}</h1>

        {tc.items.map((item, i) => (
          <React.Fragment key={i}>
            <h2 className="about__title">{item.question}</h2>
            {item.answer.map((p, j) => (
              <p key={j} className="about__text">{p}</p>
            ))}
          </React.Fragment>
        ))}
      </div>
    </main>
    </>
  );
}
