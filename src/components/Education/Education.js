import React, { useState } from 'react';
import styles from './Education.module.css'; // Import the CSS module

const Education = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Track the currently expanded item

    const education = [
        {
            name: 'Computer Science',
            description: 'Bachelor',
            details: 'The Open University of Israel 2020-2024'
        },
        {
            name: 'Electronics',
            description: 'Practical Enginieer',
            details: 'Kciney yam Akko 2013-2015'
        },
        {
            name: 'Full Stack',
            description: 'Online Course',
            details: 'Udemy 2024'
        },
        {
            name: 'Data Structures and Algorithms',
            description: 'Online Course',
            details: 'LeetCode 2023'
        },
        // Add more education items as needed
    ];

    const toggleDetails = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle visibility of additional information
    };

    return (
        <section id="education" className={styles.educationSection}>
            <h2>Education</h2>
            <ul className={styles.educationList}>
                {education.map((edu, index) => (
                    <li key={index} className={styles.educationItem}>
                        {/* Clickable section */}
                        <div
                            className={styles.educationHeader}
                            onClick={() => toggleDetails(index)} // Make the header clickable
                        >
                            <span className={styles.educationName}>{edu.name}</span>
                            <p className={styles.educationDescription}>{edu.description}</p>
                        </div>

                        {/* Non-clickable section for additional details */}
                        {activeIndex === index && (
                            <div className={styles.educationDetails}>
                                {edu.details.split('\n').map((line, i) => (
                                    <p key={i}>&bull; {line}</p>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Education;
