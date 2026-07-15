import React, { useState, useEffect } from "react";
import { ui } from "../i18n/index.js";

export default function AuthModal({ isOpen, onClose, currentLocale }) {
  const t = (ui[currentLocale] || ui.en).auth;
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setMode("login");
      setEmail("");
      setPassword("");
      setName("");
      setConfirmPassword("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="auth-modal__header">
          <h2 className="auth-modal__title">
            {mode === "login" ? t.titleLogin : t.titleRegister}
          </h2>
          <p className="auth-modal__subtitle">
            {mode === "login" ? t.subtitleLogin : t.subtitleRegister}
          </p>
        </div>

        <div className="auth-modal__tabs">
          <button
            className={`auth-modal__tab ${mode === "login" ? "auth-modal__tab--active" : ""}`}
            type="button"
            onClick={() => setMode("login")}
          >
            {t.login}
          </button>
          <button
            className={`auth-modal__tab ${mode === "register" ? "auth-modal__tab--active" : ""}`}
            type="button"
            onClick={() => setMode("register")}
          >
            {t.register}
          </button>
        </div>

        <form className="auth-modal__form" onSubmit={handleSubmit}>
          {mode === "register" && (
            <div className="auth-modal__field">
              <label className="auth-modal__label" htmlFor="auth-name">{t.name}</label>
              <input
                className="auth-modal__input"
                id="auth-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>
          )}

          <div className="auth-modal__field">
            <label className="auth-modal__label" htmlFor="auth-email">{t.email}</label>
            <input
              className="auth-modal__input"
              id="auth-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="auth-modal__field">
            <label className="auth-modal__label" htmlFor="auth-password">{t.password}</label>
            <input
              className="auth-modal__input"
              id="auth-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={mode === "login" ? "current-password" : "new-password"}
            />
          </div>

          {mode === "register" && (
            <div className="auth-modal__field">
              <label className="auth-modal__label" htmlFor="auth-confirm">{t.confirmPassword}</label>
              <input
                className="auth-modal__input"
                id="auth-confirm"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
              />
            </div>
          )}

          <button className="auth-modal__submit" type="submit">
            {mode === "login" ? t.submitLogin : t.submitRegister}
          </button>
        </form>

        <div className="auth-modal__switch">
          {mode === "login" ? (
            <>
              {t.noAccount}{" "}
              <button type="button" className="auth-modal__switch-btn" onClick={() => setMode("register")}>
                {t.register}
              </button>
            </>
          ) : (
            <>
              {t.hasAccount}{" "}
              <button type="button" className="auth-modal__switch-btn" onClick={() => setMode("login")}>
                {t.login}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
