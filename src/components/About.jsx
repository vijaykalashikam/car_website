import React from 'react';
import './About.css'; // Importing the CSS file for styling

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                Welcome to our company! We are dedicated to providing the best service to our customers.
            </p>
            <p>
                Our mission is to make the world a better place through innovative solutions and exceptional service.
            </p>
            <p>
                We believe in integrity, commitment, and excellence in everything we do.
            </p>
            <img src="path-to-your-image.jpg" alt="Our Team" className="about-image" />
        </div>
    );
};

export default About;
