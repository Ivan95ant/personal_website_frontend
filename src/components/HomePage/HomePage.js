import React from 'react';
import Profile from './ProfilePic';
import Slider from '../Slider/Slider';
import CVSection from '../CVSection/CVSection'; // Import the new CVSection component
import './HomePage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Slider/Slider.css';

const HomePage = () => {
    return (
        <section className="home-page">
            <div className="profile-picture">
                <Profile /> {/* Profile picture component */}
            </div>

            <Slider /> {/* Slider component */}

        </section>
    );
};

export default HomePage;
