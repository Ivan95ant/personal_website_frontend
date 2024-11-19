import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} My Portfolio</p>
        </footer>
    );
};

export default Footer;
