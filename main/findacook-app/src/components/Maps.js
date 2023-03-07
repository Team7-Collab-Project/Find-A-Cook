import React from 'react';
import { GoogleApiWrapper, Map, Marker, GoogleMap, withScriptjs, withGoogleMap } from 'google-maps-react';
import { MOCK_ORIGINS_DATA, MOCK_DESTINATIONS_DATA } from '../data.js'
import PropTypes from 'prop-types'

export const MAP_SETTINGS = {
  DEFAULT_MAP_OPTIONS: {
    scrollwheel: false,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  },
  DEFAULT_CENTER: { lat: 37.7749, lng: -122.4194 },
  DEFAULT_ZOOM: 4,
  MARKER_SIZE: 35,
  PIXEL_OFFSET: {
    MARKER: {
      X: 0,
      Y: -35,
    },
  },
  DIRECTIONS_OPTIONS: { suppressMarkers: true, preserveViewport: true },
}

const MapContainer = (props) => {
  return (
    <Map
      google={props.google}
      style={{width: "100%", height:"50%"}}
      zoom={17}
      initialCenter={{
        lat: 53.982273,
        lng: -6.392152,
      }}
    >
      <Marker position={{ lat: 53.982273, lng: -6.392152 }} />
    </Map>
  );
};

MapContainer.propTypes = {
  origins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      coordinates: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
  destinations: PropTypes.arrayOf(
    PropTypes.shape({
      coordinates: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBdNIx8TnfbUN2vwpVJ2L1CFMY6iXevf9Y',
})(MapContainer);
