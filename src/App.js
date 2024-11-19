import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Expirience from './components/Expirience/Expirience';
import HomePage from './components/HomePage/HomePage';
import ParentComponent from './components/HomePage/ParentComponent';
import DistanceToOffice from './components/HomePage/DistanceToOffice';
import WelcomePopUp from './components/WelcomePopUp/WelcomePopUp';
import Profile from './components/HomePage/ProfilePic';
import Slider from './components/Slider/Slider';
import CVSection from './components/CVSection/CVSection';
import './components/HomePage/HomePage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
    return (
        <div id="app-container">
            <Header />
            <main>
                <WelcomePopUp />
                <CVSection />
                <Profile />
                <Slider />
                {/* Full-width background wrapper for DistanceToOffice */}
                <div className="distance-to-office-wrapper">
                    <DistanceToOffice />
                </div>
                <Skills />
                <Education />
                <Expirience />
                <Projects />
                <ParentComponent />
            </main>
            <Footer />
        </div>
    );
};

export default App;
