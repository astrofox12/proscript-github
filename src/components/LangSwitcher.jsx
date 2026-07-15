export default function LangSwitcher({ currentLocale }) {
  const isRu = currentLocale === "ru";

  const enPath = () => {
    const path = window.location.pathname;
    if (path === "/ru" || path === "/ru/") return "/";
    return path.replace(/^\/ru\//, "/") || "/";
  };

  const ruPath = () => {
    const path = window.location.pathname;
    if (path === "/" || path === "") return "/ru/";
    if (path.startsWith("/ru")) return path;
    return `/ru${path}`;
  };

  const switchTo = (locale) => {
    const target = locale === "en" ? enPath() : ruPath();
    if (window.location.pathname !== target) {
      window.location.href = target;
    }
  };

  return (
    <div className="header__lang">
      <button
        className={`header__lang-btn ${!isRu ? "header__lang-btn--active" : ""}`}
        type="button"
        onClick={() => switchTo("en")}
      >
        EN
      </button>
      <button
        className={`header__lang-btn ${isRu ? "header__lang-btn--active" : ""}`}
        type="button"
        onClick={() => switchTo("ru")}
      >
        RU
      </button>
    </div>
  );
}
