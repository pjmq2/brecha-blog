import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapStyles = {
    width: '90%',
    height: '80%'
}

class Mapa extends React.Component {

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={16}
                style={MapStyles}
                initialCenter={{ lat: 25.647631, lng: -100.290343 }}
            >
                <Marker title={'Casa de los Siervos'} position={{ lat: 25.645420, lng: -100.290706 }} />
                <Marker title={'TEC de Monterrey'} position={{ lat: 25.648304, lng: -100.289941 }} />
                </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDaBDB8jiFL56bL15dhCRHJg2LCvAk5GdI"
})(Mapa);