import React, { Component } from 'react';
import USAMap from 'react-usa-map';
import './Map.css';
import axios from 'axios';
import ListView from './ListView.jsx'


export default class MapContainer extends Component {

  constructor(props){
    super(props);
    this.state ={
      selectedState: '',
      data: '',
    }
  }

  mapDimensions() {
    return {
      height: 593,
      width: 959,
    }
  }


  mapHandler = (event) => {
    console.log('event.target.dataset.name is', event.target.dataset.name);
    console.log('event.target.dataset is', event.target.dataset);
    this.setState({selectedState: event.target.dataset.name})

    axios.post('/reps', {
      location: event.target.dataset.name,
      region: 'state'
    })
    .then(response => {
      if (typeof(response.data) === 'String') {
        console.log(response.data);
      } else {
        console.log(response.data);
        this.setState({ data: response.data })
      }
    })
  };

  statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        // fill: "#CC0000",

      }
    };
  };

  render() {
    
    return (
      <div style={{border: "dotted blue 2px"}}>
        <div>
          This is the MapContainer Component. Enter a title here.
          <ul>
            User Stories
            <li>When I click a state, I see the representatives for that state</li>
            <li>When I hover over a state, I see the color red/blue according to their reps</li>
            <li></li>
            </ul>
        </div>
        <USAMap 
          onClick={this.mapHandler}
          customize={this.statesCustomConfig()}
          title={"Choose your state"} 
          width={this.mapDimensions().width * .8}
          height={this.mapDimensions().height * .8}
        />
          You Chose {this.state.selectedState}
        <ListView data={this.state.data}/>
      </div>
    )
  }
}