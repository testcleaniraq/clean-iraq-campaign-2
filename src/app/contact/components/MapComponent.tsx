'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import L from 'leaflet';
import customIconImage from './pin.png';
import examplePhoto from './exampleClean.jpg'



interface LocationData {
  name: string | null;
  latitude: number;
  longitude: number;
  photos: string[];
}

interface MapProps {
  data: LocationData[];
}
const customIcon = new L.Icon({
    iconUrl: customIconImage.src, // Your custom icon image path
    iconSize: [32, 46], // Size of the icon image
    iconAnchor: [16, 32], // Point of the icon which corresponds to the marker's location
    popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
  });

const MapComponent: React.FC<MapProps> = ({ data }) => {
    
  return (
    
    <MapContainer center={[33, 44]} zoom={6} style={{ width: '75rem', height: '50rem' }} className='rounded-3xl '>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((location, idx) => (
        <Marker key={idx} position={[location.latitude, location.longitude]} icon={customIcon}>
          <Popup>
            <h3>{location.name}</h3>
            <Slider>
              {/* {location.photos.map((photo, idx) => (
                <div key={idx}>
                  <img src={photo} style={{ width: '100%' }} />
                </div>
              ))} */}
              <img src={examplePhoto.src} />
            </Slider>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapComponent;
