import React, { useState } from "react";
import styles from "./Projects.module.css"; // Import the CSS module

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the currently expanded item

  const projects = [
    {
      name: "Personal website",
      description:
        "Single Page Application using MERN technologies (MongoDB, Express, React, NodeJS)",
      details:
        "This Website was created to practice learned material + demonstrate my skillset. \n React: Frontend. \n NodeJS + Express: Backend. \n MongoDB: Database ('Contact' feature)\n Google Maps API: 'Calculate Distance' feature. \n Modal-React: Pop-up windows (Welcome/About/Experience/Skills)\n Heroku: Backend deployment. \n Firebase: Frontend deployment.",
    },
    {
      name: "Directory Synchronization Tool",
      description: "This project implements a peer-to-peer directory synchronization tool written in Python.\n It monitors a specified directory and synchronizes changes (creations, modifications, deletions, and renames) across multiple machines on a local network.",
      details: `The tool uses UDP broadcasts for node discovery and TCP connections for file synchronization.\n It employs pyrsync2, a Python wrapper for librsync, for efficient delta encoding, ensuring that only changes within files are transmitted rather than entire files.\n Nodes establish persistent connections and use modification timestamps to determine the most recent changes, implementing a "last modified wins" conflict resolution strategy. 
GitHub: <a href="https://github.com/Ivan95ant/synched_drive.git" target="_blank" rel="noopener noreferrer">https://github.com/Ivan95ant/synched_drive.git</a>`,
    },
    {
      name: "Project X",
      description: "",
      details: "To be updated soon",
    },
    
    // Add more projects items as needed
  ];

  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle visibility of additional information
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2>Projects</h2>
      <ul className={styles.projectsList}>
        {projects.map((project, index) => (
          <li key={index} className={styles.projectItem}>
            {/* Clickable section */}
            <div
              className={styles.projectName}
              onClick={() => toggleDetails(index)} // Make the header clickable
            >
              <span className={styles.projectName}>{project.name}</span>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>

            {/* Non-clickable section for additional details */}
            <div className={`${styles.projectDetails} ${activeIndex === index ? styles.show : ''}`}>
              {project.details.split("\n").map((line, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: `&bull; ${line}` }} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
