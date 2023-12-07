import React from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      <h2>{ventureDetails.title}</h2>
      <p>{ventureDetails.description}</p>
      {/* Display additional details and images */}
    </div>
  );
};

export default VentureDetails;
