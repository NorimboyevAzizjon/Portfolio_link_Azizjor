import React, { useState } from 'react';
import './App.css';
import  imgProfile from './assets/images/Norimboyev__Azizjon.jpg';
const translations = {
  uz: {
    title: "Frontend Dasturchi",
    theme: "Tema",
    extra: "Ma'lumot",
    aboutTitle: "Men haqimda",
    aboutText: "Men Frontend dasturchiman va zamonaviy web texnologiyalari bilan ishlashni yaxshi ko'raman. Yangi narsalarni o'rganish va muammolarni hal qilish mening asosiy qiziqishlarimdan biridir.",
    educationTitle: "Ta'lim",
    tatu: "Toshkent Axborot Texnologiyalari Universitetida tahsil olmoqda",
    najot: "Frontend dasturlash kursi",
    mohir: "Zamonaviy web texnologiyalari kursi",
    educationText: "U Najot Ta'lim va MohirDev kurslarida ham o'qib, o'z bilim va tajribasini yanada oshirib bormoqda",
    portfolio: "Portfolio",
    github: "GitHub",
    linkedin: "LinkedIn",
    telegram: "Telegram",
    instagram: "Instagram",
    facebook: "Facebook",
    youtube: "YouTube",
    emailSub: "Elektron pochta",
    phoneSub: "Mobil telefon",
    locationMain: "O'zbekiston",
    locationSub: "Davlat",
    emailBtn: "Email yuborish",
    callBtn: "Qo'ng'iroq qilish",
    mapBtn: "Xaritada ko'rsatish",
    contactBtn: "Aloqa",
    modalTitle: "Menga xabar yuboring",
    nameLabel: "Ismingiz",
    emailLabel: "Elektron pochtangiz",
    subjectLabel: "Mavzu",
    messageLabel: "Xabaringiz",
    submitBtn: "Xabarni yuborish",
    namePlaceholder: "Ismingizni kiriting",
    emailPlaceholder: "Elektron pochtangizni kiriting",
    subjectPlaceholder: "Mavzuni kiriting",
    messagePlaceholder: "Xabaringizni kiriting",
  },
  ru: {
    title: "Frontend Разработчик",
    theme: "Тема",
    extra: "Информация",
    aboutTitle: "Обо мне",
    aboutText: "Я Frontend разработчик и люблю работать с современными веб-технологиями. Изучение новых вещей и решение проблем - одна из моих основных интересов.",
    educationTitle: "Образование",
    tatu: "Учусь в Ташкентском университете информационных технологий",
    najot: "Курс Frontend разработки",
    mohir: "Курс современных веб-технологий",
    educationText: "Он также учится на курсах Najot Ta'lim и MohirDev, продолжая повышать свои знания и опыт",
    portfolio: "Портфолио",
    github: "ГитХаб",
    linkedin: "ЛинкедИн",
    telegram: "Телеграм",
    instagram: "Инстаграм",
    facebook: "Фейсбук",
    youtube: "Ютуб",
    emailSub: "Электронная почта",
    phoneSub: "Мобильный телефон",
    locationMain: "Узбекистан",
    locationSub: "Государство",
    emailBtn: "Отправить Email",
    callBtn: "Позвонить",
    mapBtn: "Показать на карте",
    contactBtn: "Контакт",
    modalTitle: "Отправить мне сообщение",
    nameLabel: "Ваше имя",
    emailLabel: "Ваш email",
    subjectLabel: "Тема",
    messageLabel: "Ваше сообщение",
    submitBtn: "Отправить сообщение",
    namePlaceholder: "Введите ваше имя",
    emailPlaceholder: "Введите ваш email",
    subjectPlaceholder: "Введите тему",
    messagePlaceholder: "Введите ваше сообщение",
  },
  en: {
    title: "Frontend Developer",
    theme: "Theme",
    extra: "Information",
    aboutTitle: "About Me",
    aboutText: "I am a Frontend developer and I enjoy working with modern web technologies. Learning new things and solving problems is one of my main interests.",
    educationTitle: "Education",
    tatu: "Studying at Tashkent University of Information Technologies",
    najot: "Frontend development course",
    mohir: "Modern web technologies course",
    educationText: "He is also studying at Najot Ta'lim and MohirDev courses, continuing to improve his knowledge and experience",
    portfolio: "Portfolio",
    github: "GitHub",
    linkedin: "LinkedIn",
    telegram: "Telegram",
    instagram: "Instagram",
    facebook: "Facebook",
    youtube: "YouTube",
    emailSub: "Email",
    phoneSub: "Mobile Phone",
    locationMain: "Uzbekistan",
    locationSub: "Country",
    emailBtn: "Send Email",
    callBtn: "Make Call",
    mapBtn: "Show on Map",
    contactBtn: "Contact",
    modalTitle: "Send me a message",
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    subjectLabel: "Subject",
    messageLabel: "Your Message",
    submitBtn: "Send Message",
    namePlaceholder: "Enter your name",
    emailPlaceholder: "Enter your email",
    subjectPlaceholder: "Enter subject",
    messagePlaceholder: "Enter your message",
  },
};

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [language, setLanguage] = useState('uz');
  const [showInfoPanel, setShowInfoPanel] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const userData = {
    name: "Azizjon Norimboyev",
    email: "norimboyevazizjon29@gmail.com",
    phone: "+998933642030",
    location: "O'zbekiston",
    locationUrl: "https://www.google.com/maps/place/Uzbekistan",
    portfolioUrl: "https://azizjondev-alpha.vercel.app/",
    links: {
      github: "https://github.com/NorimboyevAzizjon",
      linkedin: "https://www.linkedin.com/in/azizjon-norimboyev-dev",
      telegram: "https://t.me/AzizjonNorimboyev",
      instagram: "https://instagram.com/azizjondev_",
      facebook: "https://facebook.com/azizjondev_",
      youtube: "https://www.youtube.com/channel/UCW37ULgmMZpaMD3uc1B6HiA",
    },
  };

  const t = translations[language];

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const sendEmail = () => {
    window.location.href = `mailto:${userData.email}`;
  };

  const makeCall = () => {
    window.location.href = `tel:${userData.phone}`;
  };

  const showLocation = () => {
    window.open(userData.locationUrl, "_blank");
  };

  const openPortfolio = () => {
    window.open(userData.portfolioUrl, '_blank');
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Xabar yuborildi!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setShowModal(false);
  };

  return (
    <div className={`app ${darkTheme ? 'dark-theme' : ''}`}>
      <div className="container">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-img-container">
            <div className="profile-img">
              <img
                src={imgProfile}
                alt="Azizjon Norimboyev"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/150/667eea/ffffff?text=AZ";
                }}
              />
            </div>
          </div>
          <h1 className="name">{userData.name}</h1>
          <div className="title">
            <i className="fas fa-laptop-code"></i>
            <span>{t.title}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="controls">
          <button 
            className={`extra-btn ${showInfoPanel ? 'playing' : ''}`} 
            onClick={() => setShowInfoPanel(!showInfoPanel)}
          >
            <i className="fas fa-info-circle"></i>
            <span>{t.extra}</span>
          </button>

          <button className="theme-btn" onClick={toggleTheme}>
            <i className={`fas ${darkTheme ? 'fa-sun' : 'fa-moon'}`}></i>
            <span>{t.theme}</span>
          </button>

          <div className="language-buttons">
            {['uz', 'ru', 'en'].map((lang) => (
              <button
                key={lang}
                className={`language-btn ${language === lang ? 'active' : ''}`}
                onClick={() => changeLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Info Panel */}
        {showInfoPanel && (
          <div className="info-panel">
            <div className="info-section">
              <h3>
                <i className="fas fa-user"></i> {t.aboutTitle}
              </h3>
              <p>{t.aboutText}</p>
            </div>
            <div className="info-section">
              <h3>
                <i className="fas fa-graduation-cap"></i> {t.educationTitle}
              </h3>
              <p><strong>TATU</strong> - {t.tatu}</p>
              <p><strong>Najot Ta'lim</strong> - {t.najot}</p>
              <p><strong>MohirDev</strong> - {t.mohir}</p>
              <p>{t.educationText}</p>
            </div>
          </div>
        )}

        {/* Social Links */}
        <div className="social-links">
          <button className="social-btn portfolio" onClick={openPortfolio}>
            <i className="fas fa-briefcase"></i>
            <span>{t.portfolio}</span>
          </button>
          
          <a href={userData.links.github} target="_blank" rel="noopener noreferrer" className="social-btn github">
            <i className="fab fa-github"></i>
            <span>{t.github}</span>
          </a>
          
          <a href={userData.links.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
            <i className="fab fa-linkedin-in"></i>
            <span>{t.linkedin}</span>
          </a>
          
          <a href={userData.links.telegram} target="_blank" rel="noopener noreferrer" className="social-btn telegram">
            <i className="fab fa-telegram"></i>
            <span>{t.telegram}</span>
          </a>
          
          <a href={userData.links.instagram} target="_blank" rel="noopener noreferrer" className="social-btn instagram">
            <i className="fab fa-instagram"></i>
            <span>{t.instagram}</span>
          </a>
          
          <a href={userData.links.facebook} target="_blank" rel="noopener noreferrer" className="social-btn facebook">
            <i className="fab fa-facebook-f"></i>
            <span>{t.facebook}</span>
          </a>
          
          <a href={userData.links.youtube} target="_blank" rel="noopener noreferrer" className="social-btn youtube">
            <i className="fab fa-youtube"></i>
            <span>{t.youtube}</span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-content">
              <i className="fas fa-envelope"></i>
              <div className="contact-text">
                <div className="contact-main">{userData.email}</div>
                <div className="contact-sub">{t.emailSub}</div>
              </div>
            </div>
            <div className="contact-buttons">
              <button className="contact-btn email" onClick={sendEmail}>
                <i className="fas fa-paper-plane"></i>
                <span>{t.emailBtn}</span>
              </button>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-content">
              <i className="fas fa-phone"></i>
              <div className="contact-text">
                <div className="contact-main">{userData.phone}</div>
                <div className="contact-sub">{t.phoneSub}</div>
              </div>
            </div>
            <div className="contact-buttons">
              <button className="contact-btn call" onClick={makeCall}>
                <i className="fas fa-phone"></i>
                <span>{t.callBtn}</span>
              </button>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-content">
              <i className="fas fa-map-marker-alt"></i>
              <div className="contact-text">
                <div className="contact-main">{t.locationMain}</div>
                <div className="contact-sub">{t.locationSub}</div>
              </div>
            </div>
            <div className="contact-buttons">
              <button className="contact-btn map" onClick={showLocation}>
                <i className="fas fa-map-marked-alt"></i>
                <span>{t.mapBtn}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="contact-button-container">
          <button className="contact-main-btn" onClick={() => setShowModal(true)}>
            <i className="fas fa-phone-alt"></i>
            <span>{t.contactBtn}</span>
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{t.modalTitle}</h2>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="fas fa-user"></i>
                    <span>{t.nameLabel}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder={t.namePlaceholder}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fas fa-envelope"></i>
                    <span>{t.emailLabel}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">
                    <i className="fas fa-tag"></i>
                    <span>{t.subjectLabel}</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder={t.subjectPlaceholder}
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">
                    <i className="fas fa-comment"></i>
                    <span>{t.messageLabel}</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder={t.messagePlaceholder}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="form-submit">
                  {t.submitBtn}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;