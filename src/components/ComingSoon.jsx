import { ui } from "../i18n/index.js";

export default function ComingSoon({ currentLocale, homeUrl }) {
  const t = ui[currentLocale] || ui.en;
  const cs = t.comingSoon || {};

  return (
    <>
      <main className="coming-soon">
        <div className="coming-soon__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <h1 className="coming-soon__title">{cs.title}</h1>
        <p className="coming-soon__description">{cs.description}</p>
        <a href={homeUrl} className="coming-soon__link">{cs.backToHome}</a>
      </main>
    </>
  );
}
