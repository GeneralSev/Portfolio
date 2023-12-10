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

            <div className='container'>

                <div> Welcome to my portfolio! I am passionate about...</div>

            </div>
            <br />
            <LeafletMap />

        </div>
    );
};

export default About;