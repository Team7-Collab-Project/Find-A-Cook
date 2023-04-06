import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  return (
    <Map
      google={props.google}
      style={{width: "50%", height:"50%"}}
      zoom={14}
      initialCenter={{
        lat: 53.982390,
        lng: -6.392318,
      }}
    >
      <Marker position={{ lat: 53.982390, lng: -6.392318 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
})(MapContainer);
