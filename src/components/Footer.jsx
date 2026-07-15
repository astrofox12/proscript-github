import { ui } from "../i18n/index.js";

export default function Footer({ aboutUrl, contactsUrl, termsUrl, privacyUrl, publicOfferUrl, currentLocale }) {
  const t = ui[currentLocale] || ui.en;
  const footer = t.footer || {};
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
          <h3 className="footer__title">{footer.email}</h3>
          <a href="mailto:support@proscript.academy" className="footer__link">support@proscript.academy</a>
        </div>
        <div className="footer__col">
          <h3 className="footer__title">{footer.phone}</h3>
          <a href="tel:+79022615551" className="footer__link">+7-902-261-55-51</a>
        </div>
        <div className="footer__col footer__col--legal">
          <h3 className="footer__title">{footer.legal}</h3>
          {(footer.legalLines || []).map((line, i) => (
            <p key={i} className="footer__legal-item">{line}</p>
          ))}
        </div>
        <div className="footer__col">
          <h3 className="footer__title">ProScript Academy</h3>
          <a href={aboutUrl} className="footer__link">{footer.about}</a>
          <a href={contactsUrl} className="footer__link">{footer.contacts}</a>
          <a href={termsUrl} className="footer__link" target="_blank" rel="noopener noreferrer">{footer.terms}</a>
          <a href={privacyUrl} className="footer__link" target="_blank" rel="noopener noreferrer">{footer.privacy}</a>
          <a href={publicOfferUrl} className="footer__link" target="_blank" rel="noopener noreferrer">{footer.publicOffer}</a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__payments">
          <img src="/paylogo/visa.svg" className="footer__payment-icon" alt="Visa" />
          <img src="/paylogo/mastercard.svg" className="footer__payment-icon" alt="Mastercard" />
        </div>
      </div>
    </footer>
  );
}
