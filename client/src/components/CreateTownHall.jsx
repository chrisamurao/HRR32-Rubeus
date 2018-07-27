import React, { Component } from 'react';
import OfficialCreateTownHall from './OfficialCreateTownHall.jsx';
import UserCreateTownHall from './UserCreateTownHall.jsx';

export default class CreateTownHall extends Component {

  constructor(props){
    super(props);
    this.state = {
      userType : 'official'
    }
  }

  renderView() {
    // if (this.state.userType === 'user') {
    //   return <UserCreateTownHall />
    // } else if (this.state.userType === 'official') {
    //   return <OfficialCreateTownHall />
    // }
    return (
      <div>
        <UserCreateTownHall />
        <OfficialCreateTownHall />
      </div>
    )
  }

  render() {
    return (
      <div>
        This is the Town Hall Component.
        {this.renderView()}
      </div>
    )
  }
}