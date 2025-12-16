import React from 'react';
import './Education.css';

const Education = ({ t }) => (
  <div className="info-section">
    <h3>
      <i className="fas fa-graduation-cap"></i> {t.educationTitle}
    </h3>
    <p><strong>TATU</strong> - {t.tatu}</p>
    <p><strong>Najot Ta'lim</strong> - {t.najot}</p>
    <p><strong>MohirDev</strong> - {t.mohir}</p>
    <p>{t.educationText}</p>
  </div>
);

export default Education;
