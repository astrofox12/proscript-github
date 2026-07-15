import React, { useState } from "react";
import CheckoutModal from "./CheckoutModal.jsx";
import { placeOrder } from "../services/orderService.js";
import { isValidEmail } from "../services/emailService.js";
import { ui } from "../i18n/index.js";

const CURRENCY_MAP = {
  USD: { symbol: '$', code: 'USD' },
  RUB: { symbol: '₽', code: 'RUB' },
};

const SECTION_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

function splitWhoFor(text) {
  if (!text) return [];
  const blocks = text.split('\n\n');
  return blocks.map((b) => {
    const lines = b.trim().split('\n');
    const title = lines[0]?.replace(/^—\s*/, '').trim();
    const desc = lines.slice(1).join(' ').trim().replace(/^—\s*/, '');
    return { title, desc };
  });
}

export default function 
CourseDetail({ course: courseJson, currentLocale, homeUrl, termsUrl, privacyUrl }) {
  const course = JSON.parse(courseJson);
  const t = ui[currentLocale] || ui.en;
  const ct = t.course || {};
  const locale = currentLocale;
  const currency = CURRENCY_MAP[course.currency] || CURRENCY_MAP.USD;

  const title = course.title[locale] || course.title.en;
  const hook = course.hook[locale] || course.hook.en;
  const duration = course.duration[locale] || course.duration.en;
  const format = course.format[locale] || course.format.en;
  const result = course.result[locale] || course.result.en;
  const bonuses = course.bonuses[locale] || course.bonuses.en;
  const whoDesc = (course.whoIsThisFor && (course.whoIsThisFor[locale] || course.whoIsThisFor.en)) || ct.whoIsThisForDesc || "";
  const highlights = (course.highlights && (course.highlights[locale] || course.highlights.en)) || [];
  const techStack = course.techStack || [];
  const badge = course.badge[locale] || course.badge.en;
  const whoForItems = splitWhoFor(whoDesc);

  const checkoutT = t.checkout || {};

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [email, setEmail] = useState("");
  const [card, setCard] = useState({ number: "", expiry: "", cvc: "" });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const openCheckout = (items) => {
    setCheckoutItems(items);
    setCheckoutStep(1);
    setEmail("");
    setCard({ number: "", expiry: "", cvc: "" });
    setProcessing(false);
    setError("");
    setSuccess(false);
    setCheckoutOpen(true);
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

  return (
    <>
      <main className="course-detail">
        <div className="course-detail__glow" />
        <div className="course-detail__orb course-detail__orb--1" />
        <div className="course-detail__orb course-detail__orb--2" />

        <div className="course-detail__back">
          <a href={homeUrl} className="course-detail__back-link">
            <svg viewBox="0 0 24 24" width="0.9rem" height="0.9rem" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {ct.backToCatalog}
          </a>
        </div>

        <div className="course-detail__hero">
          <span className="course-detail__badge">{badge}</span>
          <h1 className="course-detail__title">{title}</h1>
          <p className="course-detail__hook">{hook}</p>
        </div>

        {highlights.length > 0 && (
          <div className="course-detail__banner course-detail__banner--neon">
            {highlights.map((h, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="course-detail__banner-divider" />}
                <div className="course-detail__banner-item">
                  <span className="course-detail__banner-value">{h.value}</span>
                  <span className="course-detail__banner-label">{h.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}

        <div className="course-detail__layout">
          <div className="course-detail__main">
            {/* Stats */}
            <div className="course-detail__stats">
              <div className="course-detail__stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span className="course-detail__stat-label">{ct.duration}</span>
                <span className="course-detail__stat-value">{duration}</span>
              </div>
              <div className="course-detail__stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                <span className="course-detail__stat-label">{ct.theory}</span>
                <span className="course-detail__stat-value">{course.theoryHours} {ct.hours}</span>
              </div>
              <div className="course-detail__stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span className="course-detail__stat-label">{ct.practice}</span>
                <span className="course-detail__stat-value">{course.practiceHours} {ct.hours}</span>
              </div>
              <div className="course-detail__stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                <span className="course-detail__stat-label">{ct.projects}</span>
                <span className="course-detail__stat-value">{course.projects}</span>
              </div>
            </div>

            {/* Why This Course */}
            <div className="course-detail__section">
              <div className="course-detail__section-header">
                {SECTION_ICON}
                <h2 className="course-detail__section-title">{ct.whyThisCourse.replace('{tech}', course.techName?.[locale] || course.techName?.en || '')}</h2>
              </div>
              <div className="course-detail__features">
                {(course.whyFeatures?.[locale] || course.whyFeatures?.en || ct.whyFeatures)?.map((f, i) => (
                  <div key={i} className="course-detail__feature">
                    <span className="course-detail__feature-icon">{["🏆", "🧠", "🌐", "💼"][i]}</span>
                    <h3 className="course-detail__feature-title">{f.title}</h3>
                    <p className="course-detail__feature-desc">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who This Is For */}
            {course.whoIsThisFor && whoForItems.length > 0 && (
              <div className="course-detail__section">
                <div className="course-detail__section-header">
                  {SECTION_ICON}
                  <h2 className="course-detail__section-title">{ct.whoIsThisFor}</h2>
                </div>
                <div className="course-detail__whofor-grid">
                  {whoForItems.map((item, i) => (
                    <div key={i} className="course-detail__whofor-card">
                      <span className="course-detail__whofor-card-icon">
                        {["🚀", "⚡", "🔄"][i % 3]}
                      </span>
                      <h3 className="course-detail__whofor-card-title">{item.title}</h3>
                      <p className="course-detail__whofor-card-desc">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="course-detail__section">
              <div className="course-detail__section-header">
                {SECTION_ICON}
                <h2 className="course-detail__section-title">{ct.techStack}</h2>
              </div>
              <div className="course-detail__tech-grid">
                {techStack.length > 0 ? techStack.map((tech, i) => (
                  <div key={i} className="course-detail__tech-card">
                    <div className="course-detail__tech-card-icon">{tech.icon}</div>
                    <div className="course-detail__tech-card-info">
                      <h4 className="course-detail__tech-card-name">{tech.name}</h4>
                      <p className="course-detail__tech-card-desc">{tech.desc}</p>
                    </div>
                  </div>
                )) : (
                  <p className="course-detail__text">{ct.techStackFallback || (locale === 'ru' ? 'Информация о стеке технологий будет добавлена позже.' : 'Tech stack information will be added soon.')}</p>
                )}
              </div>
            </div>

            {/* Course Program */}
            <div className="course-detail__section">
              <div className="course-detail__section-header">
                {SECTION_ICON}
                <h2 className="course-detail__section-title">{ct.program}</h2>
              </div>
              <div className="course-detail__syllabus">
                {course.syllabus.map((module, i) => {
                  const moduleTitle = module.title[locale] || module.title.en;
                  const moduleTopics = module.topics[locale] || module.topics.en;

                  const topicItems = moduleTopics
                    .replace(/Project:.*$|Проект:.*$/i, '')
                    .split(/\.\s+/)
                    .filter(t => t.trim().length > 0)
                    .map(t => t.trim() + '.');

                  const enProj = moduleTopics.match(/Project:\s*"([^"]+)"/);
                  const ruProj = moduleTopics.match(/Проект:\s*«([^»]+)»/);
                  const projName = enProj?.[1] || ruProj?.[1];

                  return (
                    <div key={i} className={`course-detail__module course-detail__module--${i + 1}`}>
                      <div className="course-detail__module-header">
                        <span className="course-detail__module-weeks">
                          {locale === "ru" ? `Недели ${module.weeks}` : `Weeks ${module.weeks}`}
                        </span>
                        <span className="course-detail__module-number">
                          {locale === "ru" ? `Модуль ${i + 1}` : `Module ${i + 1}`}
                        </span>
                      </div>
                      <h3 className="course-detail__module-title">{moduleTitle}</h3>
                      <ul className="course-detail__module-topics">
                        {topicItems.slice(0, 5).map((t, j) => (
                          <li key={j}>{t}</li>
                        ))}
                      </ul>
                      {projName && (
                        <div className="course-detail__module-project">
                          <span className="course-detail__module-project-icon">🏗️</span>
                          <span>{locale === "ru" ? "Проект:" : "Project:"}</span>
                          <strong>{projName}</strong>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Projects Banner */}
            <div className="course-detail__banner course-detail__banner--gradient">
              <span className="course-detail__banner-subtitle">{ct.projectsDesc}</span>
              <div className="course-detail__project-tags">
                {(() => {
                  const allProjects = course.syllabus.flatMap((s) => {
                    const text = s.topics[locale] || s.topics.en;
                    const enMatch = text?.match(/Project:\s*"([^"]+)"/);
                    const ruMatch = text?.match(/Проект:\s*«([^»]+)»/);
                    const name = enMatch?.[1] || ruMatch?.[1];
                    return name ? [{ name, weeks: s.weeks }] : [];
                  });
                  return allProjects.map((p, i) => (
                    <span key={i} className="course-detail__project-tag">
                      🏗️ {p.name}
                    </span>
                  ));
                })()}
              </div>
            </div>

            {/* Bonuses */}
            <div className="course-detail__section">
              <div className="course-detail__section-header">
                {SECTION_ICON}
                <h2 className="course-detail__section-title">{ct.bonuses}</h2>
              </div>
              <ul className="course-detail__bonus-list">
                {bonuses.map((item, i) => {
                  const colors = ["rgba(94,234,212,0.12)", "rgba(167,139,250,0.12)", "rgba(244,114,182,0.12)", "rgba(251,191,36,0.12)", "rgba(52,211,153,0.12)", "rgba(56,189,248,0.12)"];
                  const textColors = ["var(--accent)", "#a78bfa", "#f472b6", "#fbbf24", "var(--accent)", "#38bdf8"];
                  const icons = ["⭐", "🎯", "💼", "📝", "💬", "📜"];
                  return (
                    <li key={i} className="course-detail__bonus-item">
                      <span className="course-detail__bonus-icon" style={{ background: colors[i % colors.length], color: textColors[i % textColors.length] }}>
                        {icons[i % icons.length]}
                      </span>
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Format */}
            <div className="course-detail__section">
              <div className="course-detail__section-header">
                {SECTION_ICON}
                <h2 className="course-detail__section-title">{ct.format}</h2>
              </div>
              <div className="course-detail__format-cards">
                <div className="course-detail__format-card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  <span>{ct.instructor}</span>
                </div>
                <div className="course-detail__format-card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  <span>{ct.online}</span>
                </div>
                <div className="course-detail__format-card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <span>{ct.certificate}</span>
                </div>
              </div>
              <p className="course-detail__format-desc">{format}</p>
            </div>

            {/* Career Support Banner */}
            <div className="course-detail__banner course-detail__banner--career">
              <div className="course-detail__career-content">
                <span className="course-detail__banner-subtitle">{ct.careerSupport}</span>
                <p className="course-detail__career-desc">{ct.careerSupportDesc}</p>
                <div className="course-detail__career-stats">
                  <div className="course-detail__career-stat">
                    <span className="course-detail__career-number">80%</span>
                    <span className="course-detail__career-label">{ct.hireRate}</span>
                  </div>
                  <div className="course-detail__career-stat">
                    <span className="course-detail__career-number">6</span>
                    <span className="course-detail__career-label">{locale === "ru" ? "месяцев помощи" : "months of support"}</span>
                  </div>
                  <div className="course-detail__career-stat">
                    <span className="course-detail__career-number">4+</span>
                    <span className="course-detail__career-label">{locale === "ru" ? "проекта в портфолио" : "portfolio projects"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="course-detail__section">
              <div className="course-detail__section-header">
                {SECTION_ICON}
                <h2 className="course-detail__section-title">{ct.result}</h2>
              </div>
              <p className="course-detail__text course-detail__text--highlight">{result}</p>
            </div>
          </div>

          <div className="course-detail__sidebar">
            <div className="course-detail__sidebar-inner">
              <div className="course-detail__sidebar-glow" />

              <div className="course-detail__sidebar-badge">
                {locale === "ru" ? "Старт курса" : "Course starts"}
              </div>

              <div className="course-detail__price-block">
                <span className="course-detail__price-label">{ct.price}</span>
                <div className="course-detail__price-row">
                  <span className="course-detail__price-value">{currency.symbol}{course.price.toLocaleString(locale === 'ru' ? 'ru-RU' : 'en-US')}</span>
                  <span className="course-detail__price-currency">{currency.code}</span>
                </div>

              </div>

              <div className="course-detail__sidebar-tags">
                <div className="course-detail__sidebar-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span>{duration}</span>
                </div>
                <div className="course-detail__sidebar-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                  <span>{course.theoryHours}h {locale === 'ru' ? 'теории' : 'theory'}</span>
                </div>
                <div className="course-detail__sidebar-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span>{course.practiceHours}h {locale === 'ru' ? 'практики' : 'practice'}</span>
                </div>
                <div className="course-detail__sidebar-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  <span>{course.projects} {locale === 'ru' ? 'проекта' : 'projects'}</span>
                </div>
              </div>

              <button
                type="button"
                className="course-detail__cta"
                onClick={() => openCheckout([course])}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                {ct.startLearning}
              </button>


            </div>
          </div>
        </div>
      </main>

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
          successMessage={checkoutT.courseAccessOnWay}
        />
      )}
    </>
  );
}
