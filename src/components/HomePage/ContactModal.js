import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './ContactModal.css';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: 'auto',
    overflow: 'auto'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};

const ContactModal = ({ isOpen, onRequestClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const contactButtonRef = useRef(null);

    const validatePhoneNumber = (phone) => {
        console.log("Validation function triggered");

        const phoneRegex = /^[+]?[0-9]{10,}$/;
        return phoneRegex.test(phone);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateMessage = (message) => {
        return message.length > 0 && message.length <= 500;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submission started"); // Log when form submission starts
    
        setError(''); // Clear any previous errors
        setSuccessMessage(''); // Clear previous success messages
        setIsSubmitting(true);
    
        const { name, email, phone, message } = formData;
    
        // Validation
        if (!name || !email || !phone || !message) {
            console.log("Validation failed: Missing fields");
            setError('All fields are required.');
            setIsSubmitting(false);
            return;
        }
    
        if (!validateEmail(email)) {
            setError('Invalid email address.');
            setIsSubmitting(false);
            return;
        }

        if (!validatePhoneNumber(phone)) {
            console.log("Validation failed: Invalid phone number");
            setError('Phone number must contain only digits or a "+" sign and be at least 10 characters long.');
            setIsSubmitting(false);
            return;
        }

        if (!validateMessage(message)) {
            setError('Message must be between 1 and 500 characters.');
            setIsSubmitting(false);
            return;
        }
    
        try {
            console.log("Validation passed, sending request...");
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/contact`, formData);   

            if (response.status === 201) {
                console.log("Form submission successful");
                setSuccessMessage('Message sent successfully!'); // Set the success message
                setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form fields
                setTimeout(() => {
                    setSuccessMessage(''); // Clear success message after 3 seconds
                    onRequestClose(); // Close the modal
                }, 3000);
    
                // Remove focus from the "Contact" button
                if (contactButtonRef.current) {
                    contactButtonRef.current.blur();
                    document.activeElement.blur();
                }
            } else {
                console.log("Error: Unexpected response status", response.status);
                setError('Error sending form data.');
            }
        } catch (error) {
            console.error('Error occurred:', error.response ? error.response.data : error.message);
            setError('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
            console.log("Form submission ended");
        }
    };
    

    return (
        <Modal 
          isOpen={isOpen} 
          onRequestClose={() => {
              onRequestClose();
              if (contactButtonRef.current) {
                  contactButtonRef.current.blur();
              }
          }}
          style={customStyles}
          ariaHideApp={false}
        >
            <h2>Contact Me</h2>
            {error && <p className="error-message">{error}</p>}

            {successMessage && <p className="success-message">{successMessage}</p>}
            <form onSubmit={handleSubmit} className="modal-form">
                <input 
                    type="text" 
                    placeholder="Name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                />
                <input 
                    type="tel" 
                    placeholder="Phone" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                />
                <textarea 
                    placeholder="Message" 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send'}
                </button>
            </form>
        </Modal>
    );
};

export default ContactModal;