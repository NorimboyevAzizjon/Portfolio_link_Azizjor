import React from 'react';
import './Contact.css';

const Contact = ({ userData, t, sendEmail, makeCall, showLocation }) => (
  <div className="contact-section">
    <div className="contact-item">
      <span className="contact-label">{t.emailSub}:</span>
      <span className="contact-value">{userData.email}</span>
      <button className="contact-btn" onClick={sendEmail}>{t.emailBtn}</button>
    </div>
    <div className="contact-item">
      <span className="contact-label">{t.phoneSub}:</span>
      <span className="contact-value">{userData.phone}</span>
      <button className="contact-btn" onClick={makeCall}>{t.callBtn}</button>
    </div>
    <div className="contact-item">
      <span className="contact-label">{t.locationMain}:</span>
      <span className="contact-value">{userData.location}</span>
      <button className="contact-btn" onClick={showLocation}>{t.mapBtn}</button>
    </div>
  </div>
);

export default Contact;
