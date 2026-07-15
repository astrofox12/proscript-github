import { ui } from "../i18n/index.js";
import BlogCard from "./BlogCard.jsx";

export default function BlogList({ currentLocale, homeUrl, blogUrl }) {
  const t = ui[currentLocale] || ui.en;
  const blog = t.blog || {};

  return (
    <>
      <main className="blog">
        <div className="blog__hero">
          <a href={homeUrl} className="blog__back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {blog.backToHome}
          </a>
          <h1 className="blog__title">{blog.title}</h1>
          <p className="blog__subtitle">{blog.subtitle}</p>
        </div>

        <div className="blog__grid">
          {(blog.articles || []).map((article, i) => (
            <BlogCard
              key={i}
              article={article}
              locale={currentLocale}
              blogUrl={blogUrl}
            />
          ))}
        </div>

        {(blog.articles || []).length === 0 && (
          <div className="blog__empty">
            <p>No articles yet. Stay tuned!</p>
          </div>
        )}
      </main>
    </>
  );
}
