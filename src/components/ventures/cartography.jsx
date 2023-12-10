import React from 'react';

const imagePaths = [
    '../images/Cartography Forest path.png',
    '../images/Cartography Forest camp night.png',
    '../images/Cartography Port Warehouse.png',
    '../images/Cartography Cart attack.png',
];


export const cartography_layout = () => (

    <div className='venture-container'>
        <p>
            In the exploration of my interests, I found myself captivated by the world of cartography.
            I would spend hours pouring over the smallest details on maps. Historical maps, fantasy maps, video game maps,
            any type that caught my interest. As a child I would often draw maps or village/castle layouts from a birds eye view.
        </p>
        <br />
        <p>
            Eventually I decided I would try my hand at making a proper fantasy map of my own as a creative outlet.
            I decided to set it in a fantasy world me and my brother dreamed up in our childhood, called <strong>Tor Kalva</strong>.
        </p>
        <br />
        <p>
            After days of research into map making, I decided to take a leap and started making
            my own in a program called <a className="external-link" href="https://inkscape.org/" target="_blank" rel="noopener noreferrer">Inkscape</a>.
            It was just a first attempt, but I ended up using it in some of my other hobby projects.
            I am pretty happy with the final product!
        </p>

        <img className='venture-image'
            src="../images/Cartography Tor Kalva.png"  // Replace with the actual image path
            alt="Tor Kalve Map"
        />

        <p>
            Later on I started playing DnD with some online friends during Corona. I ended up making some maps for our gaming sessions in a program
            called <a className="external-link" href="https://dungeondraft.net/" target="_blank" rel="noopener noreferrer">Dungeondraft</a>. I reckon I will continue making maps in the future for whatever other nerdy activities I end up doing.
        </p>
        <br />

        <div className="bento-box">
            {imagePaths.map((path, index) => (
                <img key={index} src={path} alt={`Dungeondraft MapImage ${index + 1}`}
                />
            ))}

        </div>

    </div>
);
