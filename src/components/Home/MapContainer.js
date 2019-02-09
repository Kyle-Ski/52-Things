import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
/* 
NOTES:
1. I need to load the map with one marker (the activity to do for the week)
2. Show the infomarker for the one marker
3. have options for directions 
*/
export class MapContainer extends Component {

    state = {
        infoVis: false,
        activeMarker: {}
    }

    onInfoWindowClose = () => {
        this.setState({infoVis: false})
    }

    onMarkerClick=(marker, e)=>{
        console.log(marker)
        // this.setState({infoVis: true, activeMarker: marker})
    }
    render() {
        return (
            <Map google={this.props.google} zoom={14} initialCenter={{lat: 39.7, lng: -105}} /*onReady*/>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow 
                    marker={this.state.activeMarker}
                    onClose={this.onInfoWindowClose}
                    visible={true}
                >
                    <div>
                        <h1>hi</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_API_KEY)
})(MapContainer)