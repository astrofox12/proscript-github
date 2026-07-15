import React, { useEffect } from 'react';

export default function CheckoutModal({
  items,
  step,
  email,
  card,
  error,
  processing,
  success,
  onClose,
  onEmailChange,
  onCardChange,
  onNextStep,
  onSubmit,
  onBack,
  checkoutT,
  termsUrl,
  privacyUrl,
  successMessage,
}) {
  checkoutT = checkoutT || {};
  const total = items.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {(step === 1 || step === 2) && (
          <>
          <button className="modal__close" onClick={onClose} aria-label={checkoutT.closeLabel}>
          ×
        </button>
          </>
        )}
        
        {step === 1 && (
          <div className="modal__email-step">
            <div className="modal__email-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
            </div>
            <h2 className="modal__email-title">{checkoutT.enterEmail}</h2>
            <p className="modal__email-subtitle">{checkoutT.emailSubtitle}</p>
            <p className="modal__email-desc">{checkoutT.emailDescription}</p>
            <form className="modal__form" onSubmit={(e) => { e.preventDefault(); onNextStep(); }}>
              <input
                id="checkout-email"
                className="modal__input modal__input--wide"
                type="email"
                placeholder={checkoutT.emailPlaceholder}
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
                required
              />
              <p className="modal__terms">
                {checkoutT.byContinuing}<br />
                <a href={termsUrl} target="_blank" rel="noopener noreferrer">{checkoutT.termsLink}</a> {checkoutT.conjunction} <a href={privacyUrl} target="_blank" rel="noopener noreferrer">{checkoutT.privacyLink}</a>
              </p>
              <button className="modal__submit" type="submit" disabled={!email || processing}>
                {checkoutT.continueToPayment}
              </button>
              <p className="modal__total-cost">{checkoutT.totalCostWithFee}<br /><span>${total} USD</span></p>
            </form>
            <div className="modal__paylogos">
              <img src="/paylogo/visa.svg" className="modal__paylogo-icon" alt="Visa" />
              <img src="/paylogo/mastercard.svg" className="modal__paylogo-icon" alt="Mastercard" />
            </div>
          </div>
        )}

        {step === 2 && (
          <form className="modal__form" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
            <label className="modal__label" htmlFor="card-number">{checkoutT.cardNumber}</label>
            <input
              id="card-number"
              className="modal__input"
              type="text"
              placeholder={checkoutT.cardPlaceholder}
              value={card.number}
              onChange={(e) => onCardChange('number', e.target.value)}
              required
            />
            <div className="modal__row">
              <div className="modal__field">
                <label className="modal__label" htmlFor="card-expiry">{checkoutT.expiry}</label>
                <input
                  id="card-expiry"
                  className="modal__input"
                  type="text"
                  placeholder={checkoutT.expiryPlaceholder}
                  value={card.expiry}
                  onChange={(e) => onCardChange('expiry', e.target.value)}
                  required
                />
              </div>
              <div className="modal__field">
                <label className="modal__label" htmlFor="card-cvc">{checkoutT.cvc}</label>
                <input
                  id="card-cvc"
                  className="modal__input"
                  type="text"
                  placeholder={checkoutT.cvcPlaceholder}
                  value={card.cvc}
                  onChange={(e) => onCardChange('cvc', e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="modal__review-row">
              <span className="modal__review-label">{checkoutT.totalCharge}</span>
              <span className="modal__review-price">${total}</span>
            </div>
            {error && <div className="modal__error">{error}</div>}
            <div className="modal__row">
              <button className="modal__back" type="button" onClick={onBack}>
                {checkoutT.backToEmail}
              </button>
              <button className="modal__submit" type="submit" disabled={processing}>
                {checkoutT.payNow}
              </button>
            </div>
            <div className="modal__bottom-row">
              <div className="modal__paylogos">
                <img src="/paylogo/visa.svg" className="modal__paylogo-icon" alt="Visa" />
                <img src="/paylogo/mastercard.svg" className="modal__paylogo-icon" alt="Mastercard" />
              </div>
              <div className="modal__security">
                <div className="modal__security-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>{checkoutT.securePayment}</span>
                </div>
                <div className="modal__security-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>{checkoutT.sslProtected}</span>
                </div>
              </div>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="modal__processing">
            {processing ? (
              <>
                <div className="modal__spinner" />
                <p className="modal__processing-note">{checkoutT.processing}</p>
              </>
            ) : (
              <>
                <div className="modal__success-lead">{checkoutT.paymentSuccessful}</div>
                <div className="modal__success">
                  <p>{(successMessage || checkoutT.keysOnWay)} <strong>{email}</strong>.</p>
                  <p>{checkoutT.thankYou}</p>
                </div>
                <button className="modal__submit" type="button" onClick={onClose}>
                  {checkoutT.close}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
