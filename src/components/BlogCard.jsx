import React from "react";

export default React.memo(function BlogCard({ article, locale, blogUrl }) {
  const title = article.title;
  const description = article.description;
  const link = `${blogUrl}${article.slug}`;
  const readMoreLabel = locale === "ru" ? "Читать далее" : "Read more";
  const readTimeLabel = locale === "ru" ? "мин чтения" : "min read";

  const formattedDate = new Date(article.date).toLocaleDateString(
    locale === "ru" ? "ru-RU" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <a href={link} className="blog-card">
      <div className="blog-card__top">
        <div className="blog-card__icon">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="8" width="56" height="48" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
            <path d="M20 24h24M20 32h18M20 40h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="48" cy="16" r="10" fill="#00e599" opacity="0.9"/>
            <path d="M45 16l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="blog-card__badge">{article.tags[0]}</span>
      </div>

      <h3 className="blog-card__title">{title}</h3>

      <div className="blog-card__meta">
        <span className="blog-card__date">{formattedDate}</span>
        <span className="blog-card__dot"></span>
        <span className="blog-card__read-time">{article.readTime} {readTimeLabel}</span>
      </div>

      <p className="blog-card__desc">{description}</p>

      <div className="blog-card__tags">
        {article.tags.map((tag, i) => (
          <span key={i} className="blog-card__tag">{tag}</span>
        ))}
      </div>

      <div className="blog-card__actions">
        <span className="blog-card__btn">
          {readMoreLabel}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </a>
  );
});
