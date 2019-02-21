import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ image }) => <div><img class='mapIcon' src={image}></img></div>;

export default class SimpleMap extends Component {
  state = {
    locations: []
  }

  async componentDidMount () {
    try{
        let locations = await fetch ('http://localhost:9000/locations') 
        console.log(locations)
        let locationsJSON = await locations.json()
        this.setState({
            locations: locationsJSON
          })
        // await this.props.getMovieData(this.state.locations)
        return locationsJSON
    }
    catch(error){
      console.log("Hello")
        console.log(error.stack)
        return error
      }
}

  render() {
    console.log(this.props.center)
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg' }}
          zoom={this.props.zoom}
          center={this.props.center}
        >
        {
        this.state.locations.map(location=>{
          return (
          <AnyReactComponent
          lat={location.latitude}
          lng={location.longitude}
          image={'./image/pin.png'}
        />
          )
        })
      }
        </GoogleMapReact>
      </div>
    );
  }
}
