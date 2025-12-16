import React from 'react';
import './About.css';

const About = ({ t }) => (
  <div className="info-section">
    <h3>
      <i className="fas fa-user"></i> {t.aboutTitle}
    </h3>
    <p>{t.aboutText}</p>
  </div>
);

export default About;
