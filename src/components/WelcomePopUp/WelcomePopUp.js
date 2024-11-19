import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './WelcomePopUp.css'; // Optional styling for the modal

Modal.setAppElement('#root'); // Accessibility requirement for Modal

const WelcomeModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Check if the user has visited before
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
            setIsModalOpen(true); // Open modal if first visit
            localStorage.setItem('hasVisited', 'true'); // Set a flag in local storage
        }
    }, []);

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="welcome-modal"
            overlayClassName="welcome-overlay"
        >
            <h2>Welcome to My Website!</h2>
            <p>Thanks for visiting. Feel free to explore and learn more about me and my projects!</p>
            <p></p>
            <p>This website was created from scratch</p>
            <p>(Ract/Express/NodeJS/MongoDB)</p>

            <button onClick={closeModal}>Close</button>
        </Modal>
    );
};

export default WelcomeModal;
