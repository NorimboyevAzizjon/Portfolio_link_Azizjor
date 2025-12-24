import React, { useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";
import "./Profile.css";
import profileImg from "../assets/images/Norimboyev__Azizjon.jpg";
import { ThemeContext, LangContext } from "../App";

const translations = {
  en: {
    info: "Info",
    theme: "Theme",
    email: "Email",
    phone: "Phone",
    location: "Location",
    portfolio: "Portfolio",
    x: "X (Twitter)",
    telegram: "Telegram",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    github: "GitHub",
    facebook: "Facebook",
    youtube: "YouTube",
  },
  ru: {
    info: "Инфо",
    theme: "Тема",
    email: "Эл. почта",
    phone: "Телефон",
    location: "Адрес",
    portfolio: "Портфолио",
    x: "X (Twitter)",
    telegram: "Telegram",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    github: "GitHub",
    facebook: "Facebook",
    youtube: "YouTube",
  },
  uz: {
    info: "Ma'lumot",
    theme: "Tema",
    email: "Email",
    phone: "Telefon",
    location: "Manzil",
    portfolio: "Portfolio",
    x: "X (Twitter)",
    telegram: "Telegram",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    github: "GitHub",
    facebook: "Facebook",
    youtube: "YouTube",
  },
};

const ProfileLink = ({ href, className, children, label }) => {
  if (!href) return null;
  return (
    <a
      className={`profile-btn ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children} {label}
    </a>
  );
};

ProfileLink.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
};

const ContactRow = ({ href, icon, label, children }) => {
  if (!children) return null;
  return (
    <div>
      {href ? (
        <a href={href} className="contact-link" style={{ textDecoration: "none", color: "inherit" }}>
          <span style={{ marginRight: 8 }}>{icon}</span>
          <b>{label}:</b> {children}
        </a>
      ) : (
        <div className="contact-link" style={{ textDecoration: "none", color: "inherit" }}>
          <span style={{ marginRight: 8 }}>{icon}</span>
          <b>{label}:</b> {children}
        </div>
      )}
    </div>
  );
};

ContactRow.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const Profile = ({ userData = {} }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang = "uz", changeLang } = useContext(LangContext);

  const t = useMemo(() => translations[lang] || translations.uz, [lang]);

  const [activeTab, setActiveTab] = useState("info");

  const links = [
    { key: "portfolio", className: "portfolio", href: userData.portfolioUrl, icon: <i className="fas fa-briefcase" aria-hidden="true"></i>, label: t.portfolio },
    { key: "github", className: "github", href: userData.links?.github, icon: <i className="fab fa-github" aria-hidden="true"></i>, label: t.github },
    { key: "linkedin", className: "linkedin", href: userData.links?.linkedin, icon: <i className="fab fa-linkedin-in" aria-hidden="true"></i>, label: t.linkedin },
    { key: "x", className: "x", href: userData.links?.x, icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 8 }}>
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 3c-2.72 0-4.92 2.47-4.5 5.15A12.94 12.94 0 013 4s-4 9 5 13a13 13 0 01-7 2c9 5 20 0 20-11.5V5a7 7 0 001-2z" fill="currentColor"/>
      </svg>
    ), label: t.x },
    { key: "telegram", className: "telegram", href: userData.links?.telegram, icon: <i className="fab fa-telegram" aria-hidden="true"></i>, label: t.telegram },
    { key: "instagram", className: "instagram", href: userData.links?.instagram, icon: <i className="fab fa-instagram" aria-hidden="true"></i>, label: t.instagram },
    { key: "facebook", className: "facebook", href: userData.links?.facebook, icon: <i className="fab fa-facebook-f" aria-hidden="true"></i>, label: t.facebook },
    { key: "youtube", className: "youtube", href: userData.links?.youtube, icon: <i className="fab fa-youtube" aria-hidden="true"></i>, label: t.youtube },
  ];

  const safeName = userData.name || "User";
  const safeLocation = userData.location || "";
  const safeEmail = userData.email || "";
  const safePhone = userData.phone || "";

  return (
    <div className="profile-section">
      <div className="profile-img-container">
        <img
          className="profile-img"
          src={profileImg}
          alt={safeName}
          onError={(e) => { e.currentTarget.src = ""; }} // optional: fallback handling
        />
      </div>

      <h1 className="profile-name">{safeName}</h1>
      <div className="profile-title">{userData.title || ""}</div>

      {/* Button group below image and title */}
      <div className="button-group" role="toolbar" aria-label="Profile actions">
        <button
          className={`menu-btn${activeTab === "info" ? " active" : ""}`}
          onClick={() => setActiveTab("info")}
          aria-pressed={activeTab === "info"}
          aria-label={t.info}
          title={t.info}
        >
          <span role="img" aria-hidden="true">ℹ️</span> {t.info}
        </button>

        <button
          className={`menu-btn${theme === "dark" ? " active" : ""}`}
          onClick={() => { toggleTheme && toggleTheme(); }}
          aria-pressed={theme === "dark"}
          aria-label={t.theme}
          title={t.theme}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "8px" }}>
            <circle cx="10" cy="10" r="9" stroke="#bbb" strokeWidth="2" fill="#222" />
            <path d="M10 6.5V10L12.5 12.5" stroke="#bbb" strokeWidth="2" strokeLinecap="round" />
            <circle cx="10" cy="10" r="1.5" fill="#bbb" />
          </svg>
          {t.theme}
        </button>

        <div style={{ display: "inline-flex", marginLeft: 8 }}>
          {["uz", "ru", "en"].map((l) => (
            <button
              key={l}
              className={`menu-btn${lang === l ? " active" : ""}`}
              onClick={() => changeLang && changeLang(l)}
              aria-pressed={lang === l}
              aria-label={`Language ${l}`}
              title={l.toUpperCase()}
              style={{ marginLeft: 4 }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="profile-links">
        {links.map((item) => (
          <ProfileLink
            key={item.key}
            href={item.href}
            className={item.className}
            label={item.label}
          >
            {item.icon}
          </ProfileLink>
        ))}
      </div>

      <div className="profile-contact">
        <ContactRow
          href={safeEmail ? `mailto:${safeEmail}` : undefined}
          icon={<span><i className="fas fa-envelope" aria-hidden="true"></i></span>}
          label={t.email}
        >
          {safeEmail}
        </ContactRow>

        <ContactRow
          href={safePhone ? `tel:${safePhone.replace(/\D/g, "")}` : undefined}
          icon={<span><i className="fas fa-phone" aria-hidden="true"></i></span>}
          label={t.phone}
        >
          {safePhone}
        </ContactRow>

        <ContactRow
          href={safeLocation ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(safeLocation)}` : undefined}
          icon={<span><i className="fas fa-map-marker-alt" aria-hidden="true"></i></span>}
          label={t.location}
        >
          {safeLocation}
        </ContactRow>
      </div>
    </div>
  );
};

Profile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    portfolioUrl: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    location: PropTypes.string,
    links: PropTypes.object,
  }),
};

export default Profile;