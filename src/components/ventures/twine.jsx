import React from 'react';


const imagePaths = [
    '/images/Twine Start.png',
    '/images/Twine Old man.png',
    '/images/Twine Inventory.png',
    '/images/Twine Combat.png',
];

export const twine_layout = () => (

    <div className='venture-container'>
        <p>
            We have always been interested in games and fantasy worlds. I wanted to take a stab at making something myself,
            so I looked around for a piece of software that I could use to create a text adventure game.
            The program I found is called <a className="external-link" href="https://twinery.org/" target="_blank" rel="noopener noreferrer">Twine</a>.
        </p>
        <br />
        <p>
            As stated on their webpage, it is a open-source tool for telling interactive, nonlinear stories. So I set about learning the software and
            making a few small trial stories for myself using the SugarCube format. Eventually I put together a longer story called Eagles Rest. I could finally put some of the programming logic
            I had learned at university to work in a way that I found entertaining.
        </p>
        <br />
        <p>
            I eventually added a basic combat system, inventory, and managed to create a world that changed as you lived in it. It was a very satisfying project.
            I will admit that it was never really wrapped up nicely, but it was a really fun learning experience. And who knows, maybe one day I will go back to it.
        </p>
        <br />

        <div className="bento-box">
            {imagePaths.map((path, index) => (
                <img key={index} src={process.env.PUBLIC_URL + path} alt={`Twine ${index + 1}`}
                />
            ))}

        </div>


    </div >
);
