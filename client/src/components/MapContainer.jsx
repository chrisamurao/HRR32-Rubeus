import React, { Component } from 'react';
import USAMap from 'react-usa-map';

export default class MapContainer extends Component {

  mapHandler = (event) => {
    console.log('event.target.dataset.name is', event.target.dataset.name);
    console.log('event.target.dataset is', event.target.dataset);

  };

  statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };

  render() {
    
    return (
      <div style={{border: "dotted blue 2px"}}>
        <USAMap 
          onClick={this.mapHandler}
          customize={this.statesCustomConfig()} />
      </div>
    )
  }
}