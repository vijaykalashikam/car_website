import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h2>About Our Company</h2>
                <p>
                    We are a passionate team dedicated to delivering the best products and services to our customers.
                    Our journey started with a simple idea and has grown into a thriving business.
                </p>
                <p>
                    Our team is driven by a commitment to innovation, quality, and customer satisfaction. We believe in
                    building long-lasting relationships with our clients by understanding their needs and delivering
                    tailored solutions.
                </p>
                <p>
                    Join us on our mission to make a positive impact on the world. We are constantly evolving, learning,
                    and pushing the boundaries of what's possible.
                </p>
            </div>
            <div className="about-image-container">
                <img src="path-to-your-team-image.jpg" alt="Our Team" className="about-team-image" />
            </div>
        </section>
    );
};

export default About;
