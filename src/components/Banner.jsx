import React from "react";

export default function Banner({ t }) {
  return (
    <section className="banner">
      <div className="banner__bg">
        <div className="banner__orb banner__orb--1" />
        <div className="banner__orb banner__orb--2" />
        <div className="banner__orb banner__orb--3" />
      </div>
      <div className="banner__content">
        <span className="banner__badge">{t.banner.badge}</span>
        <h1 className="banner__title">
          {t.banner.titleStart}{" "}
          <span className="banner__title-accent">{t.banner.titleAccent}</span>
        </h1>
        <p className="banner__subtitle">{t.banner.subtitle}</p>
        <p className="banner__desc">{t.banner.description}</p>
      </div>
    </section>
  );
}
