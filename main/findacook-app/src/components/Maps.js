import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

const apikey = process.env.REACT_APP_GOOGLE_MAP_KEY;

const MapContainer = (props) => {
  return (
    <Map
      id="googleMap"
      google={props.google}
      style={{width: "1400px",
        height:"500px",
      position: "relative",
      display:"flex"
      }}
      zoom={18}
      initialCenter={{
        lat: 53.98139256616432,
        lng: -6.391474178227545
      }}>
      <Marker position={{ lat: 53.98139256616432, lng: -6.391474178227545 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: apikey,
})(MapContainer);
