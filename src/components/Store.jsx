import React, { useState, useMemo } from "react";
import CartModal from "./CartModal.jsx";
import CheckoutModal from "./CheckoutModal.jsx";
import Banner from "./Banner.jsx";
import CourseCard from "./CourseCard.jsx";
import { placeOrder } from "../services/orderService.js";
import { isValidEmail } from "../services/emailService.js";
import useCart from "../hooks/useCart.js";
import { ui } from "../i18n/index.js";
import { COURSES } from "../lib/courses.js";

const TAG_ORDER = ['frontend', 'backend', 'python', 'java', 'typescript', 'sql', 'databases', 'devops', 'data-science', 'qa', 'algorithms', 'design', '3d', 'marketing', 'no-code'];

export default function Store({ productUrlPrefix, courseUrlPrefix, termsUrl, privacyUrl, currentLocale, aboutUrl, blogUrl }) {
  const t = ui[currentLocale] || ui.en;
  const storeT = t.store;
  const cartT = t.cart;
  const checkoutT = t.checkout;
  const { cartItems, cartCount, addToCart, removeFromCart, removeItems, clearCart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [email, setEmail] = useState("");
  const [card, setCard] = useState({ number: "", expiry: "", cvc: "" });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [activeTag, setActiveTag] = useState(() => {
    if (typeof window !== 'undefined') {
      return new URLSearchParams(window.location.search).get('tag') || null;
    }
    return null;
  });

  const updateTag = (tag) => {
    setActiveTag(tag);
    const url = new URL(window.location.href);
    if (tag) {
      url.searchParams.set('tag', tag);
    } else {
      url.searchParams.delete('tag');
    }
    window.history.replaceState({}, '', url.toString());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [consultOpen, setConsultOpen] = useState(false);
  const [consultName, setConsultName] = useState("");
  const [consultEmail, setConsultEmail] = useState("");
  const [consultMessage, setConsultMessage] = useState("");
  const [consultSent, setConsultSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const allTags = useMemo(() => {
    const tagSet = new Set(COURSES.flatMap(c => c.tags));
    return TAG_ORDER.filter(t => tagSet.has(t));
  }, []);

  const filteredCourses = useMemo(() => {
    let result = COURSES;
    if (activeTag) {
      result = result.filter(c => c.tags.includes(activeTag));
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(c => {
        const title = c.title[currentLocale] || c.title.en;
        return title.toLowerCase().includes(q);
      });
    }
    return result;
  }, [activeTag, searchQuery]);

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
      removeItems(checkoutItems.map((item) => item.id));
    } catch (err) {
      setError(err.message || "Purchase could not be completed.");
      setCheckoutStep(2);
    } finally {
      setProcessing(false);
    }
  };

  const handleCloseCart = () => setCartOpen(false);

  const clearFilters = () => {
    updateTag(null);
    setSearchQuery("");
  };

  const handleConsultSubmit = (e) => {
    e.preventDefault();
    setConsultSent(true);
  };

  const handleConsultReset = () => {
    setConsultName("");
    setConsultEmail("");
    setConsultMessage("");
    setConsultSent(false);
  };

  return (
    <>
      <main className="catalog">
        <Banner t={t} />

        <div className="catalog__toolbar">
          <div className="catalog__filters">
            <button
              className={`catalog__filter-btn ${!activeTag ? 'catalog__filter-btn--active' : ''}`}
              onClick={() => updateTag(null)}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`catalog__filter-btn ${activeTag === tag ? 'catalog__filter-btn--active' : ''}`}
                onClick={() => updateTag(tag)}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
          <div className="catalog__search">
            <input
              type="text"
              placeholder={storeT.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="catalog__grid">
          {filteredCourses.length === 0 ? (
            <div className="catalog__empty">
              <h2 className="catalog__empty-title">{storeT.emptyTitle}</h2>
              <ul className="catalog__empty-list">
                <li>
                  <button className="catalog__empty-link" onClick={clearFilters}>
                    {storeT.emptyReset}
                  </button>
                </li>
                <li>{storeT.emptyConsult}</li>
              </ul>
              <button className="catalog__empty-btn" onClick={() => setConsultOpen(true)}>
                {storeT.emptyWriteBtn}
              </button>
            </div>
          ) : (
            filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                locale={currentLocale}
                productUrlPrefix={courseUrlPrefix}
              />
            ))
          )}
        </div>

        <section className="catalog__info">
          <h2 className="catalog__info-title">{storeT.infoTitle}</h2>
          <p className="catalog__info-text">{storeT.infoParagraph1}</p>

          <h3 className="catalog__info-subtitle">{storeT.infoSubtitle2}</h3>
          <p className="catalog__info-text">{storeT.infoParagraph2}</p>

          <h3 className="catalog__info-subtitle">{storeT.infoSubtitle3}</h3>
          <p className="catalog__info-text">{storeT.infoParagraph3}</p>
        </section>

        <section className="catalog__faq">
          <h2 className="catalog__faq-title">{storeT.faqTitle}</h2>
          <div className="accordion">
            {(storeT.faqItems || []).map((item, index) => (
              <div
                key={index}
                className={`accordion__item ${openFaq === index ? "accordion__item--open" : ""}`}
              >
                <button
                  className="accordion__trigger"
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
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
        </section>
      </main>

      {/* {cartOpen && (
        <CartModal
          items={cartItems}
          onClose={handleCloseCart}
          onRemove={removeFromCart}
          onClear={clearCart}
          onBuy={(items) => openCheckout(items)}
          cartT={cartT}
          locale={currentLocale}
        />
      )} */}

      {/* {checkoutOpen && (
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
      )} */}

      {consultOpen && (
        <div className="modal-backdrop" onClick={() => { setConsultOpen(false); setConsultSent(false); }}>
          <div className="modal consult-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={() => { setConsultOpen(false); setConsultSent(false); }}>
              &times;
            </button>
            {consultSent ? (
              <div className="consult-modal__success">
                <p>{t.consult.success}</p>
                <button className="consult-modal__write-more" type="button" onClick={handleConsultReset}>
                  {t.consult.writeMore}
                </button>
              </div>
            ) : (
              <form className="consult-modal__form" onSubmit={handleConsultSubmit}>
                <h3 className="modal__title">{t.consult.title}</h3>
                <label className="modal__label">
                  {t.consult.nameLabel}
                  <input
                    type="text"
                    className="modal__input"
                    value={consultName}
                    onChange={(e) => setConsultName(e.target.value)}
                    required
                  />
                </label>
                <label className="modal__label">
                  {t.consult.emailLabel}
                  <input
                    type="email"
                    className="modal__input"
                    value={consultEmail}
                    onChange={(e) => setConsultEmail(e.target.value)}
                    required
                  />
                </label>
                <label className="modal__label">
                  {t.consult.messageLabel}
                  <textarea
                    className="consult-modal__textarea"
                    value={consultMessage}
                    onChange={(e) => setConsultMessage(e.target.value)}
                    required
                  />
                </label>
                <button type="submit" className="modal__submit">
                  {t.consult.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* {cartOpen && (
        <CartModal
          items={cartItems}
          onClose={handleCloseCart}
          onRemove={removeFromCart}
          onClear={clearCart}
          onBuy={(items) => openCheckout(items)}
          cartT={cartT}
          locale={currentLocale}
        />
      )} */}

      {/* {checkoutOpen && (
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
      )} */}
    </>
  );
}
