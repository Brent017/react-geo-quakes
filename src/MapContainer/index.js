import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
	width: '100%',
	height: '100%'
}

class MapContainer extends Component {
	render(){
		return(
			<div>
			<Map
				google={this.props.google}
				zoom={2}
				style={mapStyles}
				initialCenter={{
					lat: 30.2682, 
					lng: -97.74295
				}}>
				<Marker
					name={'Japan'}
					position={{lat: 141.5361, lng: 37.7344}} />
				<Marker
				 	name={'Thailand'}
					position={{lat: 104.8245, lng: -7.2668}} />
				<Marker

					position={{lat: -72.3, lng: -34.2317}} />
				<Marker
					position={{lat: 121.9473, lng: 24.475}} />
					icon={{
      					url: "../public/images/earthquake",
      					
    }}
			</Map>
			</div>
			);
	}
}


export default GoogleApiWrapper({
	apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(MapContainer);

