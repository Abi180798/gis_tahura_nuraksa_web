import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class TahuraMaps extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={18}
        initialCenter={{
          lat: -8.519655,
          lng: 116.283235,
        }}
      >

        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>

        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyB2FWzBn8Hek-Nek2chhoC-oiHgaAQdLRw")
})(TahuraMaps)