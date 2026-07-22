import React, { useState } from "react";
import CartModal from "./CartModal.jsx";
import CheckoutModal from "./CheckoutModal.jsx";
import { placeOrder } from "../services/orderService.js";
import { isValidEmail } from "../services/emailService.js";
import { Price } from "../modules/price/index.js";
import eldenRingImg from "../assets/game/elden-ring.webp";
import baldursGate3Img from "../assets/game/baldurs-gate-3.webp";
import starfieldImg from "../assets/game/starfield.webp";
import cyberpunkImg from "../assets/game/cyberpunk-2077.webp";
import theWitcher3Img from "../assets/game/the-witcher-3.webp";
import darkSouls3Img from "../assets/game/dark-souls-3.webp";

const coverImages = {
  "Elden Ring": eldenRingImg,
  "Baldurs Gate 3": baldursGate3Img,
  Starfield: starfieldImg,
  "Cyberpunk 2077": cyberpunkImg,
  "The Witcher 3": theWitcher3Img,
  "Dark Souls III": darkSouls3Img,
};
import useCart from "../hooks/useCart.js";

export default function ProductDetail({ game: gameJson, t: tProp, homeUrl, termsUrl, privacyUrl, currentLocale }) {
  const game = JSON.parse(gameJson);
  const t = typeof tProp === "string" ? JSON.parse(tProp) : tProp || {};
  const tp = t.product || {};
  const cartT = t.cart || {};
  const checkoutT = t.checkout || {};

  const FAQ_ITEMS = (tp.faqItems || []).map((item) => ({
    q: item.q.replace("{title}", game.title),
    a: item.a,
  }));

  const { cartItems, cartCount, addToCart, removeFromCart, clearCart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [email, setEmail] = useState("");
  const [card, setCard] = useState({ number: "", expiry: "", cvc: "" });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleCloseCart = () => setCartOpen(false);

  const openCheckout = (items) => {
    setCheckoutItems(items);
    setCheckoutStep(1);
    setEmail("");
    setCard({ number: "", expiry: "", cvc: "" });
    setProcessing(false);
    setError("");
    setSuccess(false);
    setCheckoutOpen(true);
    setCartOpen(false);
  };

  const closeCheckout = () => {
    setCheckoutOpen(false);
    setCheckoutStep(1);
    setProcessing(false);
    setError("");
    setSuccess(false);
  };

  const handleNextStep = () => {
    if (!email || !isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setCheckoutStep(2);
  };

  const handleCardChange = (field, value) => {
    setCard((current) => ({ ...current, [field]: value }));
  };

  const handlePaymentSubmit = async () => {
    if (!card.number || !card.expiry || !card.cvc) {
      setError("Please complete all card fields.");
      return;
    }

    setError("");
    setProcessing(true);
    setCheckoutStep(3);

    try {
      await placeOrder({ items: checkoutItems, email, paymentInfo: card });
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Purchase could not be completed.");
      setCheckoutStep(2);
    } finally {
      setProcessing(false);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <main className="product-detail">
        <div className="product-detail__glow" />
        <div className="product-detail__orb product-detail__orb--1" />
        <div className="product-detail__orb product-detail__orb--2" />

        <div className="product-detail__back">
          <a href={homeUrl} className="product-detail__back-link">
            <svg viewBox="0 0 24 24" width="0.9rem" height="0.9rem" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {tp.backToCatalog}
          </a>
        </div>

        <div className="product-detail__layout">
          <div className="product-detail__left">
            <span className="product-detail__genre-badge">{game.genre}</span>
            <h1 className="product-detail__title">{game.title}</h1>

            {coverImages[game.title] ? (
              <div className="product-detail__cover">
                <img src={coverImages[game.title].src} alt={game.title} className="product-detail__cover-image" />
              </div>
            ) : (
              <div className="product-detail__cover product-detail__cover--empty">
                <svg className="product-detail__cover-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="8" width="40" height="32" rx="4" />
                  <path d="M20 20l8 4-8 4V20z" />
                  <path d="M4 28h6l2-2 3 4 3-6 3 4 2-2h21" />
                </svg>
                <span className="product-detail__cover-text">{tp.noImage}</span>
              </div>
            )}

            <div className="product-detail__section">
              <div className="product-detail__section-header">
                <svg className="product-detail__section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <h2 className="product-detail__section-title">{tp.systemRequirements}</h2>
              </div>
              <div className="product-detail__reqs">
                <div className="product-detail__reqs-row">
                  <span className="product-detail__reqs-key">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/></svg>
                    {tp.os}
                  </span>
                  <span className="product-detail__reqs-value">{game.systemRequirements.rec.os}</span>
                </div>
                <div className="product-detail__reqs-row">
                  <span className="product-detail__reqs-key">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
                    {tp.cpu}
                  </span>
                  <span className="product-detail__reqs-value">{game.systemRequirements.rec.cpu}</span>
                </div>
                <div className="product-detail__reqs-row">
                  <span className="product-detail__reqs-key">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
                    {tp.ram}
                  </span>
                  <span className="product-detail__reqs-value">{game.systemRequirements.rec.ram}</span>
                </div>
                <div className="product-detail__reqs-row">
                  <span className="product-detail__reqs-key">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                    {tp.gpu}
                  </span>
                  <span className="product-detail__reqs-value">{game.systemRequirements.rec.gpu}</span>
                </div>
                <div className="product-detail__reqs-row">
                  <span className="product-detail__reqs-key">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                    {tp.storage}
                  </span>
                  <span className="product-detail__reqs-value">{game.systemRequirements.rec.storage}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="product-detail__center">
            <div className="product-detail__info">
              <span className="product-detail__info-item">
                <span className="product-detail__info-badge product-detail__info-badge--type">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </span>
                <span className="product-detail__info-label">{tp.type}</span>
                <span className="product-detail__info-value">{game.type}</span>
              </span>
              <span className="product-detail__info-item">
                <span className="product-detail__info-badge product-detail__info-badge--region">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </span>
                <span className="product-detail__info-label">{tp.region}</span>
                <span className="product-detail__info-value">{game.region}</span>
              </span>
              <span className={`product-detail__info-item product-detail__info-item--${game.platform.toLowerCase().replace(' ', '-')}`}>
                <span className="product-detail__info-badge product-detail__info-badge--platform">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </span>
                <span className="product-detail__info-label">{tp.platform}</span>
                <span className="product-detail__info-value">{game.platform}</span>
              </span>
            </div>

            <div className="product-detail__section">
              <div className="product-detail__section-header">
                <svg className="product-detail__section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <h2 className="product-detail__section-title">{tp.description}</h2>
              </div>
              <p className="product-detail__description">
                {tp.gameDescriptions?.[game.id] || game.description}
              </p>
            </div>

            <div className="product-detail__section product-detail__about">
              <span className="product-detail__about-badge">{tp.whyChooseUs?.badge}</span>
              <ul className="product-detail__about-list">
                {tp.whyChooseUs?.items?.map((item, i) => (
                    <li key={i} className="product-detail__about-list-item">
                      {item}
                    </li>
                ))}
              </ul>
              <div className="product-detail__about-lines">
                <p className="product-detail__about-line product-detail__about-line--delivery">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {tp.whyChooseUs?.delivery}
                </p>
                <p className="product-detail__about-line product-detail__about-line--support">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  {tp.whyChooseUs?.support}
                </p>
                <p className="product-detail__about-line product-detail__about-line--note">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  {tp.whyChooseUs?.noReturn}
                </p>
              </div>
            </div>
          </div>

          <div className="product-detail__right">
            <div className="product-detail__sidebar">
              <div className="product-detail__sidebar-top" />
              <div className="product-detail__price">
                <span className="product-detail__old-price-wrap">
                  <span className="product-detail__badge">-15%</span>
                  <span className="product-detail__old-price"><Price usdPrice={game.price * 1.15} locale="en" /></span>
                </span>
                <span className="product-detail__current-price"><Price usdPrice={game.price} locale={currentLocale} /></span>
              </div>

              <button
                className={`product-detail__cart ${cartItems.some((item) => item.id === game.id) ? "product-detail__cart--in-cart" : ""}`}
                type="button"
                onClick={() =>
                  cartItems.some((item) => item.id === game.id)
                    ? removeFromCart(game.id)
                    : addToCart(game)
                }
              >
                <svg className="product-detail__cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                {cartItems.some((item) => item.id === game.id) ? (t.store?.remove || "Remove") : (t.store?.addToCart || "Add to cart")}
              </button>

              <button
                className="product-detail__buy"
                type="button"
                onClick={() => openCheckout([game])}
              >
                <svg className="product-detail__buy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                {t.store?.buyNow || "Pay now"}
              </button>
            </div>
          </div>
        </div>

        <div className="product-detail__faq">
          <div className="product-detail__faq-header">
            <svg className="product-detail__faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <h2 className="product-detail__faq-title">{tp.faqTitle}</h2>
          </div>
          <div className="accordion">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className={`accordion__item ${openFaq === index ? "accordion__item--open" : ""}`}
              >
                <button
                  className="accordion__trigger"
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{item.q}</span>
                  <span className="accordion__icon">{openFaq === index ? "−" : "+"}</span>
                </button>
                <div
                  className="accordion__content"
                  style={{
                    maxHeight: openFaq === index ? "200px" : "0",
                    opacity: openFaq === index ? 1 : 0,
                  }}
                >
                  <p className="accordion__text">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {cartOpen && (
          <CartModal
            items={cartItems}
            onClose={handleCloseCart}
            onRemove={removeFromCart}
            onClear={clearCart}
            onBuy={(items) => openCheckout(items)}
            cartT={cartT}
            locale={currentLocale}
          />
      )}

      {checkoutOpen && (
          <CheckoutModal
            items={checkoutItems}
            step={checkoutStep}
            email={email}
            card={card}
            error={error}
            processing={processing}
            success={success}
            onClose={closeCheckout}
            onEmailChange={setEmail}
            onCardChange={handleCardChange}
            onNextStep={handleNextStep}
            onSubmit={handlePaymentSubmit}
            onBack={() => setCheckoutStep(1)}
            checkoutT={checkoutT}
            termsUrl={termsUrl}
            privacyUrl={privacyUrl}
            locale={currentLocale}
          />
      )}
    </>
  );
}
