import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from "react";
import Slider from "react-slick";

const AboutMeSlider = () => {
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Loop slides infinitely
        speed: 500, // Speed of slide transition (in ms)
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 2000, // Time between slides (in ms, here 3 seconds)
        pauseOnHover: true
    };

    const aboutMePoints = [
        "Bachelor’s degree in Computer Science graduate.",
        "Experienced in Software Validation and Automation Development.",
        "Academic experience in Full-Stack Development.",
        "Strong foundation in Computer Science fundamentals, including OOP, data structures, algorithms, problem-solving, and complexity analysis.",
        "Looking for my next opportunity as a Software Developer to contribute and grow in a dynamic environment.",
    ];

    return (
        <div className="about-me-section">
            <div className="slider-container">
                <Slider {...settings}>
                    {aboutMePoints.map((point, index) => (
                        <div key={index} className="slider-item">
                            <p>{point}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default AboutMeSlider;
