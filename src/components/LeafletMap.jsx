
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

const markers = [
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

const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [38, 38],
    iconAnchor: [14, 39], // Adjust this to move the marker's point
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

            <MarkerClusterGroup>
                {markers.map((marker) => (
                    <Marker key={marker.id}
                        position={[marker.lat, marker.lon]}
                        icon={customIcon}>
                        <Popup>{marker.name}</Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>


        </MapContainer>
    );
};

export default LeafletMap;