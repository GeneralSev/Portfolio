import React from 'react'

// resizing images here https://redketchup.io/image-resizer

const VentureCard = ({ venture }) => {
    return (
    <div className='venture-card'>
        <div>
            <p>{venture.date}</p>
        </div>
        <div>
            <img src={venture.coverImage !== 'N/A' ? venture.coverImage : 'https://via.placeholder.com/400'} 
            alt={venture.title}/>
        </div>
        <div>
            <span>{venture.type}</span>
            <h3>{venture.title}</h3>
        </div>
    </div>)
}

export default VentureCard