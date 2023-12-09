import React from 'react';
import { Link } from 'react-router-dom';

import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const markers = [
    { id: 1, name: 'Schiedam', lat: 51.9194, lon: 4.3882 },
    { id: 2, name: 'Cape Town', lat: -33.9249, lon: 18.4241 },
    // Add more locations as needed
];

const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [38, 38]
})

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

                <MapContainer
                    center={[51.9194, 4.3882]}
                    zoom={2}
                    style={{ height: '600px', width: '60%' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {markers.map((marker) => (
                        <Marker key={marker.id}
                            position={[marker.lat, marker.lon]}
                            icon={customIcon}>
                            <Popup>{marker.name}</Popup>
                        </Marker>
                    ))}
                </MapContainer>

            </div>
        </div>
    );
};

export default About;