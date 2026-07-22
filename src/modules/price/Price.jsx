import React, { useLayoutEffect, useState } from "react";
import { getUsdRubRate, getCachedRate } from "./rate.js";

export default function Price({ usdPrice, locale, exchangeRate }) {
  const [rubPrice, setRubPrice] = useState(() => {
    if (locale !== "ru") return null;
    if (exchangeRate != null) return Math.round(usdPrice * exchangeRate);
    const rate = getCachedRate();
    return rate !== null ? Math.round(usdPrice * rate) : null;
  });

  useLayoutEffect(() => {
    if (locale !== "ru") return;
    if (exchangeRate != null) {
      setRubPrice(Math.round(usdPrice * exchangeRate));
      return;
    }
    const rate = getCachedRate();
    if (rate !== null) {
      setRubPrice(Math.round(usdPrice * rate));
    } else {
      getUsdRubRate().then((r) => {
        setRubPrice(Math.round(usdPrice * r));
      });
    }
  }, [usdPrice, locale, exchangeRate]);

  if (locale === "ru") {
    if (rubPrice === null) {
      return <><span className="price-spinner" /> ₽</>;
    }
    return <>{rubPrice.toLocaleString('ru-RU')} ₽</>;
  }

  return <>{usdPrice.toLocaleString('en-US')} USD</>;
}
