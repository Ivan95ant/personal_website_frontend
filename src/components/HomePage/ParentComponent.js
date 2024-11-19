import React, { useState } from 'react';
import ContactModal from './ContactModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // React component for Font Awesome
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Specific icons
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // LinkedIn icon

import './ParentComponent.css'

const ParentComponent = () => {
    // State to manage if the modal is open
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        document.activeElement.blur();
    };

    return (
        <div id="contact" className='ParentComponent'>
            <button className = 'contact_us' onClick={openModal}>
            <FontAwesomeIcon icon={faPhone} className="button-icon" />
            Contact
                </button>
            <a
                href="mailto:ivan1995ant@gmail.com"
                className="email_me"
                target="_blank"
                rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faEnvelope} className="button-icon" />
            Email
           </a>
            <a
                href="https://www.linkedin.com/in/ivan-antonov-403617202//"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin_button"
            >
            <FontAwesomeIcon icon={faLinkedin} className="button-icon" />
                LinkedIn
            </a>
            <a
                href="https://wa.me/+972509860437" // Replace with your phone number
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp_button"
            >
                <FontAwesomeIcon icon={faWhatsapp} className="button-icon" />
                WhatsApp
            </a>
            <ContactModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
    );
};

export default ParentComponent;
