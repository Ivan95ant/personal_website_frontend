import React, { useState } from "react";
import styles from "./Projects.module.css"; // Import the CSS module

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the currently expanded item

  const projects = [
    {
      name: "Personal website",
      description:
        "Single Page Aplication using MERN technologies (MongoDB, Express, React, NodeJS)",
      details:
        "This Website was created to practices learned material + demonstrate my skillset. \n React: Frontend. \n NodeJS + Express: Backend. \n MongoDB: Database ('Contact' feature)\n Google maps API: 'Calculate Distance' feature. \n Modal-React: Pop-up windows (Welcome/About/Expirience/Skills)\n Heroku: Backend deployment. \n Firebase: Frontend deployment.",
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
                  <p key={i}>&bull; {line}</p>
                ))}
              </div>
       
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
