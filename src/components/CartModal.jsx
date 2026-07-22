import React from 'react';
import { Price } from "../modules/price/index.js";

export default function CartModal({ items, onClose, onRemove, onBuy, onClear, cartT, locale }) {
  cartT = cartT || {};
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="modal__glow" />
        <button className="modal__close" onClick={onClose} aria-label={cartT.closeLabel}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="modal__header">
          <svg className="modal__header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <h2 className="modal__title">{cartT.title}</h2>
        </div>
        {items.length === 0 ? (
          <div className="modal__empty">
            <svg className="modal__empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <p className="modal__empty-title">{cartT.emptyTitle}</p>
            <p className="modal__empty-text">{cartT.emptyText}</p>
          </div>
        ) : (
          <div className="modal__review">
            <div className="modal__review-items">
              {items.map((item) => (
                <div key={item.id} className="modal__review-row">
                  <div className="modal__review-info">
                    <div className="modal__review-label">{item.title}</div>
                    <span className="modal__review-genre">{item.genre}</span>
                  </div>
                  <div className="modal__review-price"><Price usdPrice={item.price} locale={locale} /></div>
                  <button
                    className="modal__back"
                    onClick={() => onRemove(item.id)}
                    type="button"
                    aria-label={cartT.removeLabel}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <div className="modal__review-row modal__review-row--total">
              <span className="modal__review-label">{cartT.total}</span>
              <span className="modal__review-price"><Price usdPrice={total} locale={locale} /></span>
            </div>
          </div>
        )}
        {items.length !== 0 && (
          <div className="modal__buttons">
            {items.length > 1 && (
              <button
                className="modal__clear"
                onClick={onClear}
                type="button"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
                {cartT.clearAll}
              </button>
            )}
            <button
              className="modal__submit"
              onClick={() => onBuy(items)}
              type="button"
            >
              <svg className="modal__submit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              {cartT.proceedToCheckout}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
