import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faRoad, faMapMarkerAlt, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import './DistanceToOffice.css';

const DistanceToOffice = () => {
    const origin = 'Tirat Carmel';
    const [inputValue, setInputValue] = useState('');
    const [destination, setDestination] = useState('');
    const [distance, setDistance] = useState(null);
    const [duration, setDuration] = useState(null);
    const [error, setError] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    const calculateDistance = async (dest) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/location/distance`, {
                params: {
                    origins: origin,
                    destinations: dest,
                },
            });
            setDistance(response.data.distance);
            setDuration(response.data.duration);
            setError(null);
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred');
            setDistance(null);
            setDuration(null);
        }
        document.activeElement.blur();
    };

    useEffect(() => {
        if (destination) {
            calculateDistance(destination);
        }
    }, [destination]);

    const fetchAutocompleteSuggestions = async (input) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/location/autocomplete`, {
                params: { input },
            });
            setSuggestions(response.data.predictions || []);
        } catch (error) {
            console.error('Error fetching autocomplete suggestions:', error);
        }
    };

    const handleInputChange = (e) => {
        const input = e.target.value;
        setInputValue(input);
        if (input) {
            fetchAutocompleteSuggestions(input);
        } else {
            setSuggestions([]);
            setDistance(null);
            setDuration(null);
            setError(null);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion.description);
        setDestination(suggestion.description);
        setSuggestions([]);
    };

    return (
        <div className="distance_to_office">
            <h3>Calculate Distance to Office</h3>
            <input
                type="text"
                placeholder="Enter office OR destination address"
                value={inputValue}
                onChange={handleInputChange}
                className="destination-input"
            />
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion.place_id}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="suggestion-item"
                        >
                            {suggestion.description}
                        </li>
                    ))}
                </ul>
            )}
            <button className="cv-button" onClick={() => calculateDistance(inputValue)}>
                <FontAwesomeIcon icon={faRoad} className="distance-icon" />
            </button>
            {distance && duration && (
                <div className="distance-duration-container">
                    <p>Distance: <span>{distance}</span></p>
                    <p>Duration: <span>{duration}</span></p>
                </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default DistanceToOffice;
