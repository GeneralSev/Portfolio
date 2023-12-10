
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

// Places I have live for more than 1 year
const lived_at_markers = [
    { id: 1, name: 'Pretoria', lat: -25.7461, lon: 28.1881 },
    { id: 2, name: 'Bonnievale', lat: -33.9744, lon: 19.9962 },
    { id: 3, name: 'Struisbaai', lat: -34.8012, lon: 20.0403 },
    { id: 4, name: 'Stellenbosch', lat: -33.9321, lon: 18.8602 },
    { id: 5, name: 'High Level', lat: 58.5169, lon: -117.1360 },
    { id: 6, name: 'Grande Prairie', lat: 55.1700, lon: -118.7946 },
    { id: 7, name: 'Budapest', lat: 47.4979, lon: 19.0402 },
    { id: 8, name: 'Rotterdam', lat: 51.9225, lon: 4.47917 },
    { id: 9, name: 'The Hague', lat: 52.0705, lon: 4.3007 },
    // Add more locations as needed
];

// Places I have visited where I spent the night and remember something of
const visited_markers = [
    { id: 1, name: 'Beijing', lat: 39.9042, lon: 116.4074 },
    { id: 2, name: 'Xiamen', lat: 24.4798, lon: 118.0894 },
    { id: 3, name: 'Hong Kong', lat: 22.3193, lon: 114.1694 },
    { id: 4, name: 'Tokyo', lat: 35.6895, lon: 139.6917 },
    { id: 5, name: 'Toyama', lat: 36.6959, lon: 137.2137 },
    { id: 6, name: 'Kyoto', lat: 35.0116, lon: 135.7681 },
    { id: 7, name: 'Osaka', lat: 34.6937, lon: 135.5023 },
    { id: 8, name: 'Bangkok', lat: 13.7563, lon: 100.5018 },
    { id: 9, name: 'Phuket', lat: 7.8804, lon: 98.3923 },
    { id: 10, name: 'Cape Town', lat: -33.9249, lon: 18.4241 },
    { id: 11, name: 'Oudtshoorn', lat: -33.5906, lon: 22.2014 },
    { id: 12, name: 'Kruger National Park', lat: -23.9884, lon: 31.5547 },
    { id: 13, name: 'Jerusalem', lat: 31.7683, lon: 35.2137 },
    { id: 14, name: 'Vancouver', lat: 49.2827, lon: -123.1207 },
    { id: 15, name: 'Edmonton', lat: 53.5444, lon: -113.4909 },
    { id: 16, name: 'Calgary', lat: 51.0447, lon: -114.0719 },
    { id: 17, name: 'Banff National Park', lat: 51.4968, lon: -115.9281 },
    { id: 18, name: 'London', lat: 51.509865, lon: -0.118092 },
    { id: 19, name: 'Bath', lat: 51.3758, lon: -2.3599 },
    { id: 20, name: 'Moreton-in-Marsh', lat: 51.9892, lon: -1.7033 },
    { id: 21, name: 'Amsterdam', lat: 52.3676, lon: 4.9041 },
    { id: 22, name: 'Paris', lat: 48.8566, lon: 2.3522 },
    { id: 23, name: 'Rome', lat: 41.9028, lon: 12.4964 },
    { id: 24, name: 'Florence', lat: 43.7696, lon: 11.2558 },
    { id: 25, name: 'Milan', lat: 45.4642, lon: 9.1900 },
    { id: 26, name: 'Zurich', lat: 47.3769, lon: 8.5417 },
    { id: 27, name: 'Frauenfeld', lat: 47.5549, lon: 8.8975 },
    { id: 28, name: 'Innsbruck', lat: 47.2692, lon: 11.4041 },
    { id: 29, name: 'Venice', lat: 45.4408, lon: 12.3155 },
    { id: 30, name: 'Postojna', lat: 45.7817, lon: 14.2167 },
    { id: 31, name: 'Zagreb', lat: 45.8150, lon: 15.9819 },
    { id: 32, name: 'Split', lat: 43.5081, lon: 16.4402 },
    { id: 33, name: 'Dubrovnik', lat: 42.6507, lon: 18.0944 },
    { id: 34, name: 'Zabljak', lat: 43.1540, lon: 19.1217 },
    { id: 35, name: 'Ameland', lat: 53.4381, lon: 5.6616 },
    { id: 36, name: 'Qatar', lat: 25.276987, lon: 51.520008 },
    { id: 37, name: 'Shuswap Lake', lat: 50.9551, lon: -119.3774 },
    { id: 38, name: 'Jasper National Park', lat: 52.8734, lon: -117.9543 },
    { id: 39, name: 'Yellowknife', lat: 62.4540, lon: -114.3718 },
    { id: 40, name: 'Locarno', lat: 46.1717, lon: 8.7827 },
    { id: 41, name: 'Knysna', lat: -34.0357, lon: 23.0465 },
];

const customLivedAtIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [38, 38],
    iconAnchor: [14, 39], // Adjust this to move the marker's point
})

const customVisitedIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/10238/10238346.png",
    iconSize: [4, 4]
})



const mapBounds = [
    [-70, -180], // Southwest corner
    [90, 180],   // Northeast corner
];


const LeafletMap = () => {
    return (

        <MapContainer
            center={[51.9194, 4.3882]}
            zoom={2}
            style={{ height: '650px', width: '60%' }}
            maxBounds={mapBounds}
            maxBoundsViscosity={0.95}
        >
            {/* <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    /> */}

            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />

            {/* <TileLayer
                        url="https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}"
                        attribution='Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.'
                        minZoom='1'
                        maxZoom='8'
                        time=''
                        format='jpg'
                        tilematrixset= 'GoogleMapsCompatible_Level'
                    /> */}

            {visited_markers.map((marker) => (
                <Marker key={marker.id}
                    position={[marker.lat, marker.lon]}
                    icon={customVisitedIcon}
                    zIndexOffset={-1000}>
                    <Popup>{marker.name}</Popup>
                </Marker>
            ))}


            <MarkerClusterGroup>
                {lived_at_markers.map((marker) => (
                    <Marker key={marker.id}
                        position={[marker.lat, marker.lon]}
                        icon={customLivedAtIcon}>
                        <Popup>{marker.name}</Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>



        </MapContainer>
    );
};

export default LeafletMap;