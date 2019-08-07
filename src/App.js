import React, { Component } from 'react';
import Quakes from './Quakes/Quakes';
import MapContainer from './MapContainer/index';

class App extends Component {
  constructor(){
    super();

    this.state = {
      quakes: []
    }
  }

  getQuakes = async () => {
    try{
      const quakes = await fetch('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');
      const quakesJson = await quakes.json();
      return quakesJson;
    } catch(err) {
      console.log("getQuakes err: ", err);
      return err;
    }
  }

  getMap = async () => {
    try{
      const map = await fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg&callback=initMap')
    } catch(err) {
      console.log("getMap err: ", err);
      return err;
    }
  }

  componentDidMount() {
    this.getQuakes()
        .then((data) => {
          console.log("data", data);
          console.log("finding title: ", data.features[0].properties.title)
          console.log(this.state.quakes)
          this.setState({
            quakes: data.features
          })
        })
  }

  render() {
    return (
      <div className="app">
        <div className='quake-container'>
          <h1 >Earthquakes from the past week: </h1><br/>
          <Quakes quakes={this.state.quakes}  />
        </div>
        <div className='map-container'>
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default App;
