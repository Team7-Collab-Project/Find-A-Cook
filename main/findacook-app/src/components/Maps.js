import React from 'react';
import { GoogleApiWrapper, Map, Marker, GoogleMap, withScriptjs, withGoogleMap } from 'google-maps-react';

const MapContainer = (props) => {
  return (
    <Map
      google={props.google}
      style={{width: "100%", height:"50%"}}
      zoom={14}
      initialCenter={{
        lat: 37.7749,
        lng: -122.4194,
      }}
    >
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'API_KEY_GOES_HERE',
})(MapContainer);
