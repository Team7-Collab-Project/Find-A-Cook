import React from 'react';
import { GoogleApiWrapper, Map, Marker, GoogleMap, withScriptjs, withGoogleMap } from 'google-maps-react';
import { MOCK_ORIGINS_DATA, MOCK_DESTINATIONS_DATA } from '../data.js'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material';
import Dialogue from '@mui/material';
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Badge,
  Form,
  FormControl,
} from "react-bootstrap";

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
      {/* <Marker position={{ lat: 53.986397, lon: -6.393929 }} /> */}
      <Marker
              title='dkit1'
              position={{ lat: 53.986397, lng: -6.393929 }}
            />
      <Marker
              title='dkit2'
              position={{ lat: 53.984422, lng: -6.395073 }}
            />
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

// class GoogleMapsContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {}
//     }
//     // binding this to event-handler functions
//     this.onMarkerClick = this.onMarkerClick.bind(this);
//     this.onMapClick = this.onMapClick.bind(this);
//   }
//   onMarkerClick = (props, marker, e) => {
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//   }
//   onMapClick = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   }
//   render() {
//     const style = {
//       width: '50vw',
//       height: '75vh',
//       'marginLeft': 'auto',
//       'marginRight': 'auto'
//     }
//     return (
//       <Map
//         item
//         xs = { 12 }
//         style = { style }
//         google = { this.props.google }
//         onClick = { this.onMapClick }
//         zoom = { 14 }
//         initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
//       >
//         <Marker
//           onClick = { this.onMarkerClick }
//           title = { 'Changing Colors Garage' }
//           position = {{ lat: 39.648209, lng: -75.711185 }}
//           name = { 'Changing Colors Garage' }
//         />
//         <Container
//           marker = { this.state.activeMarker }
//           visible = { this.state.showingInfoWindow }
//         >
//           <Container>
//             <TextField
//               variant = 'headline'
//               component = 'h4'
//             >
//               Changing Colors Garage
//             </TextField>
//             <TextField
//               component = 'p'
//             >
//               98G Albe Dr Newark, DE 19702 <br />
//               302-293-8627
//             </TextField>
//           </Container>
//         </Container>
//       </Map>
//     );
//   }
// }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDg5VDMBj3mwQwlkqHb_jrF0Jje9ixtIQ8',
})(MapContainer);
