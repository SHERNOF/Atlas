// import React from 'react'
// import './map.scss'
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;


// export default function MapComponent() {
    
//     return (
//         <div apiKey={"AIzaSyDoGsja3fLf24gsg0LLiiiY6WHCPMwsh0U"} >
            
//         </div>
//     )
// }


import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './map.scss'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class MapComponent extends Component {
    static defaultProps = {
        center: {
          lat: -25.2744,
          lng: 133.7751
        },
        zoom: 4.5
      };
    render() {
        return (
            // <div className="myMap" style={{ height: '65%', width: '50%' }}>

<div className="myMap" >
  {/* <h1>Equipment Tracker</h1> */}
            <GoogleMapReact className="myMap"
              bootstrapURLKeys={{ key: "AIzaSyDoGsja3fLf24gsg0LLiiiY6WHCPMwsh0U" }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={-25.2744}
                lng={133.7751}
                text="SHERNOF"
              />
            </GoogleMapReact>
          </div>
        );
    }
}

export default MapComponent;