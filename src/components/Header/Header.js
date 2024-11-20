import React, { useState } from 'react';
import './Header.css';
import styles from './NavLink.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Accessibility requirement for Modal

const Header = () => {
    const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

    const openAboutModal = () => {
        setIsAboutModalOpen(true);
    };

    const closeAboutModal = () => {
        setIsAboutModalOpen(false);
    };

    return (
        <header>
            <h1>Ivan Antonov</h1>
            <nav>
                <a href="#about" className={styles.navLink} onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    openAboutModal(); // Open modal
                }}>
                    About
                </a>
                <a href="#skills" className={styles.navLink}>Skills</a>
                <a href="#education" className={styles.navLink}>Education</a>
                <a href="#expirience" className={styles.navLink}>Expirience</a>
                <a href="#projects" className={styles.navLink}>Projects</a>
                <a href="#contact" className={styles.navLink}>Contact</a>
            </nav>

            {/* About Modal */}
            <Modal
                isOpen={isAboutModalOpen}
                onRequestClose={closeAboutModal}
                className="about-modal"
                overlayClassName="about-modal-overlay"
            >
                <h2>About</h2>
                <p>
                    Welcome to my portfolio! <br /><br />
                    This Single Page Application (SPA) was built from scratch by me, using MERN technologies (MongoDB, Express, React, NodeJS). <br />
                    The website serves as a platform to showcase my skillset and expertise. <br /><br />
                    New projects will be added regularly — so stay tuned for updates ;) <br /><br />
                    Feel free to explore my projects and get to know more about me.
                </p>

                <button onClick={closeAboutModal}>Close</button>
            </Modal>
        </header>
    );
};

export default Header;
