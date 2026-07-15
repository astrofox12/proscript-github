import React from "react";

export default function PrivacyPolicy({ t: tProp, homeUrl, currentLocale }) {
  const t = typeof tProp === "string" ? JSON.parse(tProp) : tProp;
  const tc = t.privacy;

  return (
    <>
      <main className="privacy">
        <div className="privacy__content">
          <div className="product-detail__back">
            <a href={homeUrl} className="product-detail__back-link">
              <svg viewBox="0 0 24 24" width="0.9rem" height="0.9rem" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              {tc.backToHome}
            </a>
          </div>
          <h1 className="privacy__title">{tc.title}</h1>

          <nav className="privacy__toc">
            <h2 className="privacy__toc-title">{tc.tocTitle}</h2>
            <ol className="privacy__toc-list">
              {tc.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="privacy__toc-link">{s.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          {tc.sections.map((section) => (
            <React.Fragment key={section.id}>
              <section className="privacy__section" id={section.id}>
                <h2 className="privacy__heading">{section.heading}</h2>
                {section.blocks.map((block, i) => {
                  if (block.type === "p") {
                    if (block.html) {
                      return <p key={i} dangerouslySetInnerHTML={{ __html: block.html }} />;
                    }
                    return <p key={i}>{block.text}</p>;
                  }
                  if (block.type === "h3") {
                    return <h3 key={i} className="privacy__subheading">{block.text}</h3>;
                  }
                  if (block.type === "list") {
                    return (
                      <ul key={i} className="privacy__list">
                        {block.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "contact") {
                    return (
                      <p key={i}>
                        {block.items.map((item, j) => (
                          <React.Fragment key={j}>
                            <strong>{item.label}</strong>{" "}
                            {item.mailto ? (
                              <a href={`mailto:${item.value}`} className="privacy__link">{item.value}</a>
                            ) : (
                              item.value
                            )}
                            {j < block.items.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </p>
                    );
                  }
                  return null;
                })}
              </section>
              {section.id !== tc.sections[tc.sections.length - 1].id && (
                <hr className="privacy__divider" />
              )}
            </React.Fragment>
          ))}
        </div>
      </main>

      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
