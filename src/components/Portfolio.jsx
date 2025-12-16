import React from 'react';
import './Portfolio.css';

const Portfolio = ({ openPortfolio, t }) => (
  <div className="portfolio-section">
    <button className="portfolio-btn" onClick={openPortfolio}>
      <i className="fas fa-briefcase"></i> {t.portfolio}
    </button>
  </div>
);

export default Portfolio;
