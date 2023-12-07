import React from 'react';
import { useParams, Link } from 'react-router-dom';

import ventures from '../VentureData';

// Function to get venture details by ID
const getVentureDetails = (id) => {
  return ventures.find((venture) => venture.id === id) || {};
};

const VentureDetails = () => {
  const { id } = useParams();

  // Fetch venture details based on the ID, or use data from a context or state
  const ventureDetails = getVentureDetails(id);

  return (
    <div className='container'>
      <h1>{ventureDetails.title}</h1>
      <br />
      <Link to="/">
        <h2>Home</h2>
      </Link> {/* Add this line for the home button */}
      <br />
      <div>
        {ventureDetails.page_layout !== 'N/A' ? (
          <ventureDetails.page_layout />
        ) : (
          <p>No venture data found</p>
        )}
      </div>
    </div>
  );
};

export default VentureDetails;
