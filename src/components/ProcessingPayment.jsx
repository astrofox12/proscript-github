import React, { useState, useEffect, useRef } from "react";

export default function ProcessingPayment({ t: tProp, homeUrl, currentLocale }) {
  const t = typeof tProp === "string" ? JSON.parse(tProp) : tProp;
  const pp = t.paymentProcessing;

  const [state, setState] = useState("loading");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [orderId, setOrderId] = useState("");
  const mountedRef = useRef(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const merchantOrderId = params.get("merchant_order_id");

    if (!merchantOrderId) {
      window.location.href = homeUrl;
      return;
    }

    setOrderId(merchantOrderId);

    let errorCount = 0;
    const POLL_INTERVAL = 5000;
    const TIMEOUT = 120000;
    const startTime = Date.now();
    const timeoutIds = [];

    async function checkPayment() {
      const abortController = new AbortController();
      const abortTimeout = setTimeout(() => abortController.abort(), 30000);

      const res = await fetch(`https://checkout.proscriptacademy.com/orders/${merchantOrderId}`, {
        signal: abortController.signal,
      });
      clearTimeout(abortTimeout);

      if (!res.ok) {
        if (res.status === 404) throw new Error("NOT_FOUND");
        throw new Error("SERVER_ERROR");
      }

      return await res.json();
    }

    async function poll() {
      if (!mountedRef.current) return;

      try {
        const data = await checkPayment();

        if (!mountedRef.current) return;

        if (data.status === "success" && data.operation === "settle") {
          setEmail(data.email || "");
          setState("success");
          return;
        }

        if (data.status === "failed") {
          setMessage(data.message || "");
          setState("failed");
          return;
        }

        if (Date.now() - startTime >= TIMEOUT) {
          setState("timeout");
          return;
        }

        const id = setTimeout(poll, POLL_INTERVAL);
        timeoutIds.push(id);
      } catch (err) {
        if (!mountedRef.current) return;

        const errMsg = err.message || "";

        if (errMsg === "NOT_FOUND") {
          setState("not_found");
          return;
        }

        if (errMsg === "SERVER_ERROR" || errMsg === "Network error") {
          errorCount++;
          if (errorCount >= 3) {
            setState("server_error");
            return;
          }
          if (Date.now() - startTime >= TIMEOUT) {
            setState("timeout");
            return;
          }
          const id = setTimeout(poll, POLL_INTERVAL);
          timeoutIds.push(id);
          return;
        }

        errorCount++;
        if (errorCount >= 3 || Date.now() - startTime >= TIMEOUT) {
          setState("server_error");
          return;
        }
        const id = setTimeout(poll, POLL_INTERVAL);
        timeoutIds.push(id);
      }
    }

    poll();

    return () => {
      mountedRef.current = false;
      timeoutIds.forEach(clearTimeout);
    };
  }, [homeUrl]);

  const isSuccess = state === "success";
  const isFailed = state === "failed" || state === "not_found";
  const isTimeout = state === "timeout";
  const isServerError = state === "server_error";

  const showFailedStyle = isFailed || isTimeout || isServerError || state === "not_found";

  return (
    <main className={`processing ${isSuccess ? "processing--success" : ""} ${showFailedStyle ? "processing--failed" : ""}`}>
      <div className="processing__glow" />
      {state === "loading" && <div className="processing__particles" />}
      <div className="processing__content">
        {state === "loading" && (
          <div className="processing__card processing__card--loading">
            <div className="processing__card-glow" />
            <p className="processing__thank-you">{pp.processingThankYou}</p>
            <div className="processing__order-section">
              <span className="processing__order-label">{pp.processingOrderLabel}</span>
              <span className="processing__order-id">{orderId}</span>
            </div>
            <div className="processing__bank-status">
              <span className="processing__bank-dot" />
              <span>{pp.processingBankStatus}</span>
            </div>
          </div>
        )}

        {isSuccess && (
          <>
            <div className="processing__confetti" />
            <div className="processing__card processing__card--success">
              <div className="processing__icon processing__icon--success">
                <div className="processing__icon-ring processing__icon-ring--1" />
                <div className="processing__icon-ring processing__icon-ring--2" />
                <svg viewBox="0 0 24 24" width="76" height="76" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" className="processing__success-circle" />
                  <polyline points="16 8 10 16 7 13" className="processing__success-check" />
                </svg>
              </div>
              <h1 className="processing__title">{pp.successTitle}</h1>
              <p className="processing__subtitle">{pp.successSubtitle}</p>
              <p className="processing__wish">{pp.successWish}</p>
              <div className="processing__email-info">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <p>{pp.successEmail} <strong>{email}</strong></p>
              </div>
            </div>
          </>
        )}

        {state === "failed" && (
          <>
            <div className="processing__icon processing__icon--failed">
              <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
            <h1 className="processing__title">{pp.failedTitle}</h1>
            <p className="processing__subtitle">{pp.failedSubtitle}</p>
            {message && (
              <div className="processing__message-box">
                <span className="processing__message-label">{pp.failedMessage}</span>
                <p className="processing__message-text">{message}</p>
              </div>
            )}
          </>
        )}

        {state === "not_found" && (
          <>
            <div className="processing__icon processing__icon--failed">
              <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
            <h1 className="processing__title">{pp.notFoundTitle}</h1>
            <p className="processing__desc">{pp.notFoundDesc}</p>
          </>
        )}

        {isTimeout && (
          <>
            <div className="processing__icon processing__icon--failed">
              <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h1 className="processing__title">{pp.timeoutTitle}</h1>
            <p className="processing__desc">{pp.timeoutDesc}</p>
          </>
        )}

        {isServerError && (
          <>
            <div className="processing__icon processing__icon--failed">
              <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h1 className="processing__title">{pp.serverErrorTitle}</h1>
            <p className="processing__desc">{pp.serverErrorDesc}</p>
          </>
        )}

        {showFailedStyle && (
          <div className="processing__actions">
            {state === "failed" && (
              <button className="processing__btn processing__btn--primary" onClick={() => window.history.back()}>
                {pp.tryAgain}
              </button>
            )}
            {(isTimeout || isServerError || state === "not_found") && (
              <a href={`mailto:support@proscriptacademy.com`} className="processing__btn processing__btn--primary">
                {pp.contactSupport}
              </a>
            )}
          </div>
        )}

        <div className="processing__home">
          <a href={homeUrl} className="processing__home-link">
            <svg viewBox="0 0 24 24" width="0.9rem" height="0.9rem" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {pp.backToHome}
          </a>
        </div>
      </div>
    </main>
  );
}
