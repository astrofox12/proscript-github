import { ui } from "../i18n/index.js";

export default function DiscountBanner({ currentLocale }) {
  const t = ui[currentLocale] || ui.en;
  return (
    <div className="discount-banner">
      <div className="discount-banner__inner">
        <span className="discount-banner__emoji">
          <svg viewBox="0 0 24 24" width="1.2rem" height="1.2rem" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/>
          </svg>
        </span>
        <span className="discount-banner__text">
          {t.discountBanner.text}
        </span>
        <span className="discount-banner__emoji">
          <svg viewBox="0 0 24 24" width="1.2rem" height="1.2rem" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/>
          </svg>
        </span>
      </div>
    </div>
  );
}
