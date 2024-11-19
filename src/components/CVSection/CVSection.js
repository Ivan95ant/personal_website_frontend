import React, { useState } from 'react';
import './CVSection.css'; // CV-specific styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const CVSection = () => {
    const [showPdf, setShowPdf] = useState(false);

    const handleOpenCv2Click = (e) => {
        setShowPdf(!showPdf);

        // Remove focus if closing the PDF viewer
        if (showPdf) {
            e.target.blur();
        }
    };

    return (
        <div className="cv-section">
            <div className="cv-buttons">
                <button
                    className="cv-button"
                    aria-label="Download my CV"
                    onClick={() => {
                        const url = '/Ivan_Antonov_CV.pdf';
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = 'Ivan_Antonov_CV.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        document.activeElement.blur();
                    }}
                >
                    <FontAwesomeIcon icon={faDownload} className="cv-icon" />
                    Download CV
                </button>
                <button
                    className="cv-button"
                    onClick={() => {
                        window.open('/Ivan_Antonov_CV.pdf');
                        document.activeElement.blur();
                    }}
                >
                    <FontAwesomeIcon icon={faFilePdf} className="cv-icon" />
                    Open CV
                </button>
                <button
                    className={`cv-button ${showPdf ? 'active' : ''}`}
                    onClick={handleOpenCv2Click}
                >
                    <FontAwesomeIcon icon={faEye} className="cv-icon" />
                    Preview CV
                </button>
            </div>
            {showPdf && (
                <div className="pdf-viewer">
                    <button onClick={() => setShowPdf(false)} className="close-pdf">
                        Close
                    </button>
                    <iframe
                        src="/Ivan_Antonov_CV.pdf"
                        className="pdf-iframe"
                        title="CV PDF"
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default CVSection;
