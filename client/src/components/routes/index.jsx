import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import App from '../../index.jsx';
import TownHallContainer from '../townhall/TownHallContainer.jsx';
import MapContainer from '../MapContainer.jsx';
import ZipForm from '../ZipForm.jsx';

const Routes = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/townhall">TownHall</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <Link to="/login">Login/Signup</Link>
        </li>
        <li>
          <Link to="/zip">Zip</Link>
        </li>
      </ul>
      <Route path="/map" component={MapContainer} />
      <Route path="/townhall" component={TownHallContainer} />
      <Route path="/zip" component={ZipForm} />


    </div>
  </BrowserRouter>

)
//<Route exact path="/" component={App} />

export default Routes;