import React, { useState } from "react";

export default function ContactsPage({ t: tProp, homeUrl, currentLocale }) {
  const t = typeof tProp === "string" ? JSON.parse(tProp) : tProp;
  
  const tc = t.contacts;
  console.log('contect',t.contacts)
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleFormChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  const handleFormReset = () => {
    setForm({ name: '', email: '', message: '' });
    setFormSent(false);
  };

  return (
    <>
      <main className="contacts">
        <div className="contacts__glow" />
        <div className="contacts__orb contacts__orb--1" />
        <div className="contacts__orb contacts__orb--2" />
        <div className="contacts__content">
          <div className="product-detail__back">
            <a href={homeUrl} className="product-detail__back-link">
            <svg viewBox="0 0 24 24" width="0.9rem" height="0.9rem" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {t.about.backToHome}
          </a>
          </div>
          <div className="contacts__hero">
            <div className="contacts__hero-badge">{tc.badge}</div>
            <h1 className="contacts__title">{tc.title}</h1>
            <p className="contacts__subtitle">
              {tc.subtitle}
            </p>
          </div>

          <div className="contacts__divider">
            <span className="contacts__divider-line" />
            <svg className="contacts__divider-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="contacts__divider-line" />
          </div>

          <div className="contacts__info">
            <div className="contacts__info-item contacts__info-item--phone">
              <div className="contacts__info-item-top" />
              <div className="contacts__info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="contacts__info-label">{tc.phoneLabel}</div>
                <div className="contacts__info-value">{tc.phoneValue}</div>
              </div>
            </div>
            <div className="contacts__info-item contacts__info-item--email">
              <div className="contacts__info-item-top" />
              <div className="contacts__info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contacts__info-label">{tc.emailLabel}</div>
                <div className="contacts__info-value">{tc.emailValue}</div>
              </div>
            </div>
            <div className="contacts__info-item contacts__info-item--hours">
              <div className="contacts__info-item-top" />
              <div className="contacts__info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <div>
                <div className="contacts__info-label">{tc.hoursLabel}</div>
                <div className="contacts__info-value">{tc.hoursValue}</div>
              </div>
            </div>
          </div>

          <div className="contacts__seller">
            <div className="contacts__seller-glow" />
            <div className="contacts__seller-corner contacts__seller-corner--tl" />
            <div className="contacts__seller-corner contacts__seller-corner--br" />
            <span className="contacts__seller-badge">{tc.legalBadge}</span>
            <h2 className="contacts__seller-title">{tc.sellerTitle}</h2>
            <div className="contacts__seller-grid">
              {(tc.legalLines || []).map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>

          <div className="contacts__divider">
            <span className="contacts__divider-line" />
            <svg className="contacts__divider-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22,2 15,22 11,13 2,9" />
            </svg>
            <span className="contacts__divider-line" />
          </div>

          <div className="contacts__form">
            <div className="contacts__form-glow" />
            <div className="contacts__form-corner contacts__form-corner--tl" />
            <div className="contacts__form-corner contacts__form-corner--br" />
            <span className="contacts__form-badge">{tc.formBadge}</span>
            <h2 className="contacts__form-title">{tc.formTitle}</h2>
            {formSent ? (
              <div className="contacts__form-success">
                <svg className="contacts__form-success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p>{tc.formSuccess}</p>
                <button className="contacts__form-write-more" type="button" onClick={handleFormReset}>
                  {tc.formWriteMore}
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="contacts__form-field">
                  <label className="contacts__form-label">{tc.formNameLabel}</label>
                  <input className="contacts__form-input" type="text" placeholder={tc.formNamePlaceholder} value={form.name} onChange={handleFormChange('name')} required />
                </div>
                <div className="contacts__form-field">
                  <label className="contacts__form-label">{tc.formEmailLabel}</label>
                  <input className="contacts__form-input" type="email" placeholder={tc.formEmailPlaceholder} value={form.email} onChange={handleFormChange('email')} required />
                </div>
                <div className="contacts__form-field">
                  <label className="contacts__form-label">{tc.formMessageLabel}</label>
                  <textarea className="contacts__form-textarea" placeholder={tc.formMessagePlaceholder} rows={5} value={form.message} onChange={handleFormChange('message')} required />
                </div>
                <button className="contacts__form-submit" type="submit">
                  <svg className="contacts__form-submit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22,2 15,22 11,13 2,9" />
                  </svg>
                  {tc.formSubmit}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

    </>
  );
}
