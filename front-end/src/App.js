import React, { Component } from 'react';
import DatabaseContainer from './DatabaseContainer/DatabaseContainer'
import MapContainer from './MapContainer/MapContainer'
import 'semantic-ui-css/semantic.min.css'
import './App.css';


export default class App extends Component {
  state = {
    center: {
      lat: 30.267153,
      lng: -97.7430608
    }, 
    zoom: 11
  }
  getCoordinates = (lat, lng) => {
    this.setState({ center: {lat:lat, lng:lng} })
  }

  render() {
    return (
      <div className="App">
      <div className='databaseContainer'>
          <DatabaseContainer getCoordinates={this.getCoordinates} />
        </div>
        <div className='mapContainer'>
          <MapContainer center = {this.state.center} zoom={this.state.zoom} />
        </div>
      </div>
    );
  }
}

