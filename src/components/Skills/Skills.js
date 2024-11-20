import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./Skills.module.css"; // Import the CSS module

Modal.setAppElement("#root"); // Set the app root for accessibility

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null); // Track the selected skill
  const [modalIsOpen, setModalIsOpen] = useState(false); // Track modal state

  const skills = [
    {
      name: "Full-Stack",
      description:
      [
        'React',
        'NodeJS', 
        'Express', 
        'CSS', 
        'MongoDB - database',
        'PostMan - backend debug tool',
        'Implementation of external APIs (Google APIs, etc.)',
        'Heroku - backend deployment',
        'Firebase - frontend deployment',
        'Build SPA from scratch E2E'
    ]
    },
    {
      name: "Programming Languages",
      description: [
        'Python',
        'JavaScript', 
        'C#', 
        'Java', 
        'Shell scripting', 
    ]
    },
    {
      name: "Prompt Engineering",
      description: [
        'Co-Pilot ',
        'Chat GPT',
        'Efficiently structuring instructions for AI models',
        'Integrate model output into an existing codebase'    ]
    },
    {
      name: "Data-serialization formats",
      description: [
        'JSON',
        'YAML', 
        'XML'
    ]
    },
    {
        name: "Data Analysis",
        description: [
          'CSV',
          'Excel', 
          'VBA'
      ]
      },
      {
        name: "Version Control",
        description: [
          'Azure Git',
          'GitHub', 
          'Gerrit'
      ]
      },
      {
        name: "OS",
        description: [
          'Windows',
          'Linux'
      ]
      },
      {
        name: "Computer Network",
        description: [
          'TCP/IP',
          'SSH',
          'FTP/FTPS',
          'Network fundamentals and theoretical knowledge'
      ]
      },
      {
        name: "Management",
        description: [
          'Management of international team activities (4 engineers)'
      ]
      },
    {
      name: "Personal",
      description:[
        'Highly motivated',
        'Quick learner', 
        'Good technical and logical skills', 
        'Ability to work independently', 
        'Task-driven', 
        'Organized and responsible.'
    ]
        
    }
    // Add more skills with descriptions as needed
  ];

  const openModal = (skill) => {
    setSelectedSkill(skill); // Set the selected skill
    setModalIsOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalIsOpen(false); // Close the modal
    setSelectedSkill(null); // Reset the selected skill
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <h2>Skills</h2>
      <ul className={styles.skillsList}>
        {skills.map((skill) => (
          <li
            key={skill.name}
            className={styles.skillItem}
            onClick={() => openModal(skill)}
          >
            {skill.name}
          </li>
        ))}
      </ul>

      {/* Modal for skill description */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h3>{selectedSkill?.name}</h3>
                {Array.isArray(selectedSkill?.description) ? (
                    <ul>
                        {selectedSkill.description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{selectedSkill?.description}</p>
                )}

        <button onClick={closeModal} className={styles.closeButton}>
          Close
        </button>
      </Modal>
    </section>
  );
};

export default Skills;
