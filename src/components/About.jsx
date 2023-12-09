import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='portfolio'>
            <h1>About Me</h1>

            {/* Add Link to About page */}
            <div className='nav-links'>
                <Link to="/">Home</Link>
            </div>

            <p>
                {/* Add your about content here */}
                Welcome to my portfolio! I am passionate about...
            </p>
        </div>
    );
};

export default About;