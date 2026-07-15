import React from "react";

const CURRENCY_MAP = {
  USD: { symbol: '$', code: 'USD' },
  RUB: { symbol: '₽', code: 'RUB' },
};

export default React.memo(function CourseCard({ course, locale, productUrlPrefix }) {
  const title = course.title[locale] || course.title.en;
  const badge = course.badge[locale] || course.badge.en;
  const duration = course.duration[locale] || course.duration.en;
  const level = course.level[locale] || course.level.en;
  const excerpt = course.excerpt[locale] || course.excerpt.en;
  const link = `${productUrlPrefix}${course.slug}`;
  const moreLabel = locale === "ru" ? "Подробнее" : "Learn more";
  const currency = CURRENCY_MAP[course.currency] || CURRENCY_MAP.USD;

  const cardClass = `course-card${course.id === 'python-dev' ? ' course-card--python' : ''}${course.id === 'java-enterprise' ? ' course-card--java' : ''}${course.id === 'react-typescript' ? ' course-card--react' : ''}${course.id === 'sql-databases' ? ' course-card--sql' : ''}${course.id === 'devops-infrastructure' ? ' course-card--devops' : ''}${course.id === 'data-science-ml' ? ' course-card--ds' : ''}${course.id === 'qa-automation' ? ' course-card--qa' : ''}${course.id === 'telegram-bots' ? ' course-card--tg' : ''}${course.id === 'algorithms-data-structures' ? ' course-card--algo' : ''}${course.id === 'backend-nestjs' ? ' course-card--nest' : ''}${course.id === 'figma-web-design' ? ' course-card--figma' : ''}${course.id === 'ui-ux-design' ? ' course-card--uiux' : ''}${course.id === 'photoshop-pro' ? ' course-card--ps' : ''}${course.id === 'motion-design-ae' ? ' course-card--ae' : ''}${course.id === 'blender-3d' ? ' course-card--blender' : ''}${course.id === 'tilda-web-design' ? ' course-card--tilda' : ''}${course.id === 'smm-manager' ? ' course-card--smm' : ''}${course.id === 'ppc-advertising' ? ' course-card--ppc' : ''}${course.id === 'copywriting-neurocopywriting' ? ' course-card--copy' : ''}`;

  return (
    <a href={link} className={cardClass}>
      <div className="course-card__top">
        {course.id === 'python-dev' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <path d="M63.4 15c-18.5 0-17.2 8-17.2 8v8.1h17.4v2.4H40.5S24 31.3 24 48.7s14.7 16.4 14.7 16.4h8.7v-7.9S47.7 50.8 47.7 42s7.8-10.5 7.8-10.5h9.4v9.6h-9.2s-4.8.1-4.8 4.5 3.2 5.3 3.2 5.3h7.3s8.1-1 8.1-10V23s2.7-8-10.9-8zm-12.4 7.4a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6z" fill="#3776AB"/>
            <path d="M64.6 113c18.5 0 17.2-8 17.2-8v-8.1H64.4v-2.4h23.3S99 96.7 99 79.3s-14.7-16.4-14.7-16.4h-8.7v7.9S80.3 77.2 80.3 86s-7.8 10.5-7.8 10.5h-9.4v-9.6h9.2s4.8-.1 4.8-4.5-3.2-5.3-3.2-5.3h-7.3s-8.1 1-8.1 10v17.1S38.9 113 52.5 113zm12.4-7.4a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z" fill="#FFD43B"/>
          </svg>
        )}
        {course.id === 'react-typescript' && (
          <svg viewBox="-11.5 -10.23174 23 20.46348" className="course-card__icon course-card__icon--react">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        )}
        {course.id === 'java-enterprise' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <ellipse cx="52" cy="108" rx="30" ry="6" fill="#ED8B00"/>
            <rect x="30" y="58" width="44" height="50" rx="4" fill="#ED8B00"/>
            <rect x="30" y="58" width="44" height="50" rx="4" fill="#5382A1" opacity="0.4"/>
            <path d="M74 72h10c4 0 8 4 8 8s-4 8-8 8h-10" fill="none" stroke="#ED8B00" strokeWidth="5"/>
            <path d="M74 72h10c4 0 8 4 8 8s-4 8-8 8h-10" fill="none" stroke="#5382A1" strokeWidth="5" opacity="0.4" transform="translate(1,1)"/>
            <path d="M42 48c2-6 5-10 0-14" fill="none" stroke="#ED8B00" strokeWidth="3" strokeLinecap="round"/>
            <path d="M52 46c2-8 6-13 0-18" fill="none" stroke="#ED8B00" strokeWidth="3" strokeLinecap="round"/>
            <path d="M62 48c2-6 5-10 0-14" fill="none" stroke="#ED8B00" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        )}
        {course.id === 'sql-databases' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <ellipse cx="64" cy="32" rx="36" ry="12" fill="#336791"/>
            <rect x="28" y="32" width="72" height="72" fill="#336791"/>
            <ellipse cx="64" cy="104" rx="36" ry="12" fill="#264D73"/>
            <ellipse cx="64" cy="32" rx="36" ry="12" fill="#4A90D9"/>
            <ellipse cx="64" cy="52" rx="36" ry="12" fill="none" stroke="#264D73" strokeWidth="1.5"/>
            <ellipse cx="64" cy="72" rx="36" ry="12" fill="none" stroke="#264D73" strokeWidth="1.5"/>
            <ellipse cx="64" cy="92" rx="36" ry="12" fill="none" stroke="#264D73" strokeWidth="1.5"/>
            <ellipse cx="64" cy="32" rx="36" ry="12" fill="#4A90D9"/>
            <text x="64" y="68" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="18" fill="white">SQL</text>
          </svg>
        )}
        {course.id === 'devops-infrastructure' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <path d="M90 40c16 0 28 12 28 28s-12 28-28 28H38C22 96 10 84 10 68S22 40 38 40h12" fill="none" stroke="#0DB7ED" strokeWidth="8" strokeLinecap="round"/>
            <path d="M76 88c-16 0-28-12-28-28s12-28 28-28h12c16 0 28 12 28 28s-12 28-28 28H38" fill="none" stroke="#FF6B35" strokeWidth="8" strokeLinecap="round"/>
            <circle cx="38" cy="68" r="8" fill="#0DB7ED"/>
            <circle cx="90" cy="68" r="8" fill="#FF6B35"/>
            <path d="M60 52l8-8 8 8M68 44v20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M68 76v12" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        )}
        {course.id === 'data-science-ml' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <circle cx="64" cy="64" r="56" fill="none" stroke="#9B59B6" strokeWidth="3"/>
            <circle cx="64" cy="32" r="8" fill="#9B59B6"/>
            <circle cx="40" cy="56" r="8" fill="#8E44AD"/>
            <circle cx="88" cy="56" r="8" fill="#8E44AD"/>
            <circle cx="32" cy="84" r="8" fill="#7D3C98"/>
            <circle cx="56" cy="88" r="8" fill="#7D3C98"/>
            <circle cx="72" cy="88" r="8" fill="#7D3C98"/>
            <circle cx="96" cy="84" r="8" fill="#7D3C98"/>
            <line x1="64" y1="40" x2="40" y2="48" stroke="#BB8FCE" strokeWidth="2"/>
            <line x1="64" y1="40" x2="88" y2="48" stroke="#BB8FCE" strokeWidth="2"/>
            <line x1="40" y1="64" x2="32" y2="76" stroke="#BB8FCE" strokeWidth="2"/>
            <line x1="40" y1="64" x2="56" y2="80" stroke="#BB8FCE" strokeWidth="2"/>
            <line x1="88" y1="64" x2="72" y2="80" stroke="#BB8FCE" strokeWidth="2"/>
            <line x1="88" y1="64" x2="96" y2="76" stroke="#BB8FCE" strokeWidth="2"/>
            <circle cx="64" cy="64" r="6" fill="#E74C3C"/>
            <text x="64" y="112" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="10" fill="#9B59B6">AI</text>
          </svg>
        )}
        {course.id === 'qa-automation' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <circle cx="56" cy="56" r="40" fill="none" stroke="#27AE60" strokeWidth="5"/>
            <line x1="86" y1="86" x2="112" y2="112" stroke="#27AE60" strokeWidth="5" strokeLinecap="round"/>
            <path d="M40 56l10 10 20-20" fill="none" stroke="#2ECC71" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="96" cy="32" r="12" fill="#E74C3C"/>
            <path d="M92 28l8 8M100 28l-8 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
        {course.id === 'telegram-bots' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <path d="M28 62l88-32-20 88-28-20-20 16 8-28z" fill="white"/>
            <path d="M48 78l4 24 20-16" fill="#C4DAF0"/>
            <path d="M48 78l60-48-52 40" fill="#D5E6F5"/>
          </svg>
        )}
        {course.id === 'algorithms-data-structures' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <circle cx="64" cy="24" r="12" fill="#E67E22"/>
            <circle cx="36" cy="56" r="10" fill="#D35400"/>
            <circle cx="92" cy="56" r="10" fill="#D35400"/>
            <circle cx="20" cy="88" r="8" fill="#E67E22"/>
            <circle cx="44" cy="88" r="8" fill="#E67E22"/>
            <circle cx="84" cy="88" r="8" fill="#E67E22"/>
            <circle cx="108" cy="88" r="8" fill="#E67E22"/>
            <line x1="64" y1="36" x2="36" y2="46" stroke="#F39C12" strokeWidth="3"/>
            <line x1="64" y1="36" x2="92" y2="46" stroke="#F39C12" strokeWidth="3"/>
            <line x1="36" y1="66" x2="20" y2="80" stroke="#F39C12" strokeWidth="2"/>
            <line x1="36" y1="66" x2="44" y2="80" stroke="#F39C12" strokeWidth="2"/>
            <line x1="92" y1="66" x2="84" y2="80" stroke="#F39C12" strokeWidth="2"/>
            <line x1="92" y1="66" x2="108" y2="80" stroke="#F39C12" strokeWidth="2"/>
            <rect x="8" y="108" width="112" height="8" rx="4" fill="#E67E22"/>
          </svg>
        )}
        {course.id === 'backend-nestjs' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <path d="M64 16L16 44v40l48 28 48-28V44L64 16z" fill="none" stroke="#E0234E" strokeWidth="4"/>
            <path d="M64 16L16 44l48 28 48-28L64 16z" fill="#E0234E" opacity="0.3"/>
            <path d="M64 72v40" stroke="#E0234E" strokeWidth="3"/>
            <path d="M16 44l48 28" stroke="#E0234E" strokeWidth="3"/>
            <path d="M112 44l-48 28" stroke="#E0234E" strokeWidth="3"/>
            <circle cx="64" cy="52" r="10" fill="#E0234E"/>
            <circle cx="64" cy="52" r="5" fill="white"/>
          </svg>
        )}
        {course.id === 'figma-web-design' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <rect x="28" y="12" width="24" height="24" rx="12" fill="#F24E1E"/>
            <rect x="52" y="12" width="24" height="24" rx="12" fill="#FF7262"/>
            <rect x="76" y="12" width="24" height="24" rx="12" fill="#A259FF"/>
            <rect x="28" y="36" width="24" height="24" rx="12" fill="#1ABCFE"/>
            <rect x="52" y="36" width="24" height="24" rx="12" fill="#0ACF83"/>
            <rect x="28" y="60" width="24" height="24" rx="12" fill="#F24E1E" opacity="0.5"/>
            <rect x="52" y="60" width="24" height="24" rx="12" fill="#FF7262" opacity="0.5"/>
            <rect x="76" y="36" width="24" height="24" rx="12" fill="#A259FF" opacity="0.5"/>
            <text x="64" y="108" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="14" fill="#F24E1E">FIGMA</text>
          </svg>
        )}
        {course.id === 'ui-ux-design' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <circle cx="40" cy="40" r="20" fill="#FF6B9D"/>
            <circle cx="88" cy="40" r="20" fill="#C44CDB"/>
            <circle cx="64" cy="76" r="20" fill="#4C8BF5"/>
            <path d="M40 60c10 10 30 10 48 0" fill="none" stroke="#FF6B9D" strokeWidth="3"/>
            <circle cx="64" cy="56" r="8" fill="white" opacity="0.5"/>
            <path d="M56 56h16M64 48v16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
        {course.id === 'photoshop-pro' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <rect x="16" y="16" width="96" height="96" rx="12" fill="#001E36"/>
            <text x="64" y="72" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="36" fill="#31A8FF">Ps</text>
            <rect x="16" y="100" width="96" height="12" fill="#31A8FF" opacity="0.3"/>
          </svg>
        )}
        {course.id === 'motion-design-ae' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <rect x="16" y="16" width="96" height="96" rx="12" fill="#00005B"/>
            <text x="64" y="72" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="36" fill="#9999FF">Ae</text>
            <rect x="16" y="100" width="96" height="12" fill="#9999FF" opacity="0.3"/>
            <circle cx="100" cy="28" r="8" fill="#CF96FD"/>
            <path d="M96 28l4 4 8-8" fill="none" stroke="white" strokeWidth="2"/>
          </svg>
        )}
        {course.id === 'blender-3d' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <circle cx="64" cy="64" r="50" fill="#E87D0D"/>
            <ellipse cx="64" cy="64" rx="20" ry="30" fill="white"/>
            <ellipse cx="64" cy="64" rx="8" ry="12" fill="#E87D0D"/>
            <circle cx="64" cy="52" r="6" fill="white"/>
            <circle cx="64" cy="52" r="3" fill="#E87D0D"/>
          </svg>
        )}
        {course.id === 'tilda-web-design' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <rect x="20" y="24" width="88" height="80" rx="8" fill="#333"/>
            <rect x="28" y="32" width="72" height="48" fill="#1a1a1a"/>
            <text x="64" y="78" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="24" fill="white">T</text>
            <circle cx="64" cy="96" r="6" fill="#666"/>
            <rect x="36" y="40" width="20" height="4" rx="2" fill="#555"/>
            <rect x="36" y="48" width="40" height="3" rx="1.5" fill="#444"/>
            <rect x="36" y="54" width="30" height="3" rx="1.5" fill="#444"/>
          </svg>
        )}
        {course.id === 'smm-manager' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <circle cx="64" cy="52" r="36" fill="none" stroke="#E44D26" strokeWidth="4"/>
            <circle cx="64" cy="52" r="24" fill="none" stroke="#FF6B35" strokeWidth="3"/>
            <circle cx="64" cy="52" r="12" fill="#E44D26"/>
            <path d="M64 16v-8M64 88v8M28 52h-8M108 52h8" stroke="#E44D26" strokeWidth="3" strokeLinecap="round"/>
            <path d="M38 26l-4-4M90 26l4-4M38 78l-4 4M90 78l4 4" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
            <rect x="20" y="100" width="88" height="16" rx="4" fill="#E44D26"/>
            <text x="64" y="112" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="10" fill="white">SMM</text>
          </svg>
        )}
        {course.id === 'ppc-advertising' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <rect x="20" y="32" width="88" height="64" rx="8" fill="#F1C40F"/>
            <rect x="28" y="40" width="72" height="48" fill="#F39C12"/>
            <text x="64" y="72" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="28" fill="white">ADS</text>
            <circle cx="64" cy="20" r="10" fill="#E74C3C"/>
            <path d="M60 16l4 4 8-8" fill="none" stroke="white" strokeWidth="2"/>
            <path d="M32 96l16 12M96 96l-16 12" stroke="#F1C40F" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        )}
        {course.id === 'copywriting-neurocopywriting' && (
          <svg viewBox="0 0 128 128" className="course-card__icon">
            <path d="M36 100L96 20l12 6-60 80z" fill="#2ECC71"/>
            <path d="M36 100l4 8 8-4z" fill="#27AE60"/>
            <path d="M96 20l8-8 12 6-8 8z" fill="#27AE60"/>
            <path d="M44 96l40-64" stroke="#1E8449" strokeWidth="3"/>
            <circle cx="76" cy="44" r="16" fill="#27AE60" opacity="0.3"/>
            <path d="M68 44h16M76 36v16" stroke="#2ECC71" strokeWidth="3" strokeLinecap="round"/>
            <text x="64" y="118" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="10" fill="#27AE60">AI</text>
          </svg>
        )}
        <span className="course-card__badge">{badge}</span>
      </div>

      <h3 className="course-card__title">{title}</h3>

      <div className="course-card__tags">
        <span className="course-card__tag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          {duration}
        </span>
        <span className="course-card__tag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          {level}
        </span>
        <span className="course-card__tag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          {course.projects} {locale === "ru" ? "проектов" : "projects"}
        </span>
      </div>

      <p className="course-card__desc">{excerpt}</p>

      <div className="course-card__actions">
        <div className="course-card__price-group">
          <span className="course-card__price">{currency.symbol}{course.price.toLocaleString(locale === 'ru' ? 'ru-RU' : 'en-US')}</span>
          <span className="course-card__currency">{currency.code}</span>
        </div>
        <span className="course-card__btn">
          {moreLabel}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </a>
  );
});
