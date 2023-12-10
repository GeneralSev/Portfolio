import React from 'react';
import { Link } from 'react-router-dom';
import LeafletMap from './LeafletMap'; // Adjust the path based on your project structure


const About = () => {
    return (
        <div className='portfolio'>
            <h1>About Me</h1>

            {/* Add Link to About page */}
            <div className='nav-links'>
                <Link to="/">Home</Link>
            </div>

            <div className='venture-container'>
                <br />
                <p> Welcome to my portfolio! I am passionate about...</p>
                <br />
                <p>
                    Below is a small vanity project I made for myself. The clusters and red pins show places I have lived for more than a year.
                    The small blue markers show places I have stayed at for at least one night and which I have an associated memory of.
                </p>
            </div>
            <br />
            <LeafletMap />

        </div>
    );
};

export default About;