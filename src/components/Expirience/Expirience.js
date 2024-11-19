import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './Expirience.module.css'; // Import the CSS module

Modal.setAppElement('#root'); // Set the app root for accessibility

const Expirience = () => {
    const [selectedExpirience, setSelectedExpirience] = useState(null); // Track the selected expirience
    const [modalIsOpen, setModalIsOpen] = useState(false); // Track modal state

    const expirience = [
        {
            name: 'Intel',
            role: 'Software Engineer',
            years: '2021-present',
            description: [
                'Lead software validation & verification activities, ensuring 100% system integration coverage, improving nightly build testing success rate.',
                'Develop automation for regression using Python - improving testing/reporting time and increasing CI/CD reliability.',
                'Analyze results, debugging asserts/exceptions, document steps to reproduce bugs (JIRA).',
                'Review, troubleshoot and resolve issues in existing code (C#).',
                'Lead a remote international team of 4 engineers (Taiwan), overseeing daily tasks and coordination.',
                'Lab activities, including building and debugging RF setups, maintain and develop testing flows.',
                'Collaborate with cross-functional teams throughout the entire process, from requirements definition to E2E execution.'
            ]
        },
        {
            name: 'AnnaPurnaLabs',
            role: 'Lab Operator',
            years: '2019-2021',
            description: [
                'Operating CPU final tests, build and monitor various setups, HW&SW support for engineers, providing solutions for equipment failures.',
                'Executing validation tests, reviewing results reporting and documenting every step and technical issues.'
            ]
        },
        {
            name: 'Elbit Systems',
            role: 'Hardware Integration',
            years: '2018-2019',
            description: [
                'Project support during all stages of the units development.',
                'Testing prototype units, performing final tests, troubleshooting and support test failures, qualification tests under extreme conditions.'
            ]
        },
        {
            name: 'IDF',
            role: 'Radar Technician',
            years: '2015-2018',
            description: [
                'Technical support for the high range radars on the warships, installation + Periodic radars inspection on ships and labs.'
            ]
        }           // Add more expirience with descriptions as needed
    ];

    const openModal = (expirience) => {
        setSelectedExpirience(expirience); // Set the selected expirience
        setModalIsOpen(true); // Open the modal
    };

    const closeModal = () => {
        setModalIsOpen(false); // Close the modal
        setSelectedExpirience(null); // Reset the selected expirience
    };

    return (
        <section id="expirience" className={styles.expirienceSection}>
            <h2>Expirience</h2>
            <ul className={styles.expirienceList}>
                {expirience.map((expirience) => (
                    <li
                        key={expirience.name}
                        className={styles.expirienceItem}
                        onClick={() => openModal(expirience)}
                    >
                        <span className={styles.expirienceName}>{expirience.name}</span>
                        <span className={styles.expirienceYears}>{expirience.years}</span>
                    </li>
                ))}
            </ul>

            {/* Modal for expirience description */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <h3>{selectedExpirience?.name}</h3>
                {selectedExpirience?.role && (
                    <p className={styles.expirienceRole}>{selectedExpirience.role}</p>
                )}
                {Array.isArray(selectedExpirience?.description) ? (
                    <ul>
                        {selectedExpirience.description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{selectedExpirience?.description}</p>
                )}
                <button onClick={closeModal} className={styles.closeButton}>
                    Close
                </button>
            </Modal>
        </section>
    );
};

export default Expirience;
