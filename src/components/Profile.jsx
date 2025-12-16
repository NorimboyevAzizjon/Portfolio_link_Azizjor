
import React from 'react';
import './Profile.css';
import profileImg from '../assets/images/Norimboyev__Azizjon.jpg';

const Profile = ({ userData, t }) => (
  <div className="profile-section">
    <div className="profile-img-container">
      <div className="profile-img">
        <img
          src={profileImg}
          alt={userData.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/160x200/667eea/ffffff?text=AZ";
          }}
        />
      </div>
    </div>
    <h1 className="name">{userData.name}</h1>
    <div className="title">
      <i className="fas fa-laptop-code"></i>
      <span className="title-text">{t.title}</span>
    </div>
  </div>
);

export default Profile;
