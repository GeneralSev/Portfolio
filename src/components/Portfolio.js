import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import VentureCard from './VentureCard'

import '../App.css';

const Portfolio = () => {

    const [ventures, setVentures] = useState([]);

    const getVentures = async (title) => {
        const yourData = require('../ventures.json')
        setVentures(yourData.ventures);
    };

    useEffect(() => {
        getVentures(); // Call getVentures when the component mounts
    }, []); // The empty dependency array ensures that it runs only once on mount


    return (
        <div className='portfolio'>
            <h1>Johannes Fourie Portfolio</h1>

            {ventures?.length > 0
                ? (
                    <div className='container'>
                        {ventures.map((venture) => (
                            <Link key={venture.id} to={`/venture/${venture.id}`}>
                                <VentureCard venture={venture} />
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No ventures found</h2>
                    </div>
                )
            }

        </div>
    );
}

export default Portfolio