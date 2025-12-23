
import React from "react";
import "./Profile.css";
import profileImg from "../assets/images/Norimboyev__Azizjon.jpg";

const Profile = ({ userData }) => {
	return (
		<div className="profile-section">
			<div className="profile-img-container">
				<img
					className="profile-img"
					src={profileImg}
					alt={userData.name}
				/>
			</div>
			<h1 className="profile-name">{userData.name}</h1>
			<div className="profile-title">{userData.title}</div>
			<div className="profile-links">
				<a className="profile-btn portfolio" href={userData.portfolioUrl} target="_blank" rel="noopener noreferrer">
					<i className="fas fa-briefcase"></i> Portfolio
				</a>
				<a className="profile-btn github" href={userData.links.github} target="_blank" rel="noopener noreferrer">
					<i className="fab fa-github"></i> GitHub
				</a>
				<a className="profile-btn linkedin" href={userData.links.linkedin} target="_blank" rel="noopener noreferrer">
					<i className="fab fa-linkedin-in"></i> LinkedIn
				</a>
				<a className="profile-btn telegram" href={userData.links.telegram} target="_blank" rel="noopener noreferrer">
					<i className="fab fa-telegram"></i> Telegram
				</a>
				<a className="profile-btn instagram" href={userData.links.instagram} target="_blank" rel="noopener noreferrer">
					<i className="fab fa-instagram"></i> Instagram
				</a>
				<a className="profile-btn facebook" href={userData.links.facebook} target="_blank" rel="noopener noreferrer">
					<i className="fab fa-facebook-f"></i> Facebook
				</a>
				<a className="profile-btn youtube" href={userData.links.youtube} target="_blank" rel="noopener noreferrer">
					<i className="fab fa-youtube"></i> YouTube
				</a>
			</div>
			<div className="profile-contact">
				<div><b>Email:</b> {userData.email}</div>
				<div><b>Telefon:</b> {userData.phone}</div>
				<div><b>Manzil:</b> {userData.location}</div>
			</div>
		</div>
	);
};

export default Profile;
