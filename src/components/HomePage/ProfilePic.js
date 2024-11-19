import React from 'react';
import profileImage from '../../assets/profile.jpg';
// ProfilePic.js
import './ProfilePic.css';


const Profile = () => {
    return (
        <div class="profile-image-wrapper">
            <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
    );
};

export default Profile;
