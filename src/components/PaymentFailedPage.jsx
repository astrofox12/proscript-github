import React from "react";

export default function PaymentFailedPage({ t: tProp, homeUrl }) {
  const t = typeof tProp === "string" ? JSON.parse(tProp) : tProp;
  const pf = t.paymentFailed;

  return (
    <main className="payment-failed">
      <div className="payment-failed__glow" />
      <div className="payment-failed__content">
        <div className="payment-failed__icon">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </div>

        <h1 className="payment-failed__title">{pf.title}</h1>
        <p className="payment-failed__subtitle">{pf.subtitle}</p>
        <p className="payment-failed__description">{pf.description}</p>

        <div className="payment-failed__reasons">
          <h2 className="payment-failed__reason-title">{pf.reasonTitle}</h2>
          <ul className="payment-failed__reason-list">
            {pf.reasons.map((reason, i) => (
              <li key={i} className="payment-failed__reason">{reason}</li>
            ))}
          </ul>
        </div>

        <div className="payment-failed__actions">
          <button className="payment-failed__btn payment-failed__btn--primary" onClick={() => window.history.back()}>
            {pf.tryAgain}
          </button>
        </div>

        <div className="payment-failed__home">
          <a href={homeUrl} className="payment-failed__home-link">
            <svg viewBox="0 0 24 24" width="0.9rem" height="0.9rem" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {pf.backToHome}
          </a>
        </div>
      </div>
    </main>
  );
}
