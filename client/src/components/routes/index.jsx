import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TownHallContainer from '../townhall/TownHallContainer.jsx';
import MapContainer from '../MapContainer.jsx';
import ZipForm from '../ZipForm.jsx';
import LoginForm from '../LoginForm.jsx';
import Chat from '../Chat.jsx';

const Routes = (props) => (
  <Router>
    <div>
    <nav className="navbar navbar-expand-lg navbar-light  bg-light">
      <ul className="navbar-nav mr-auto">
        <li><Link to="/zip" className="navbar-brand">Imperio v0.9.1</Link></li>
        <li><Link to="/townhall" className="nav-link">Town Hall</Link></li>
        <li><Link to="/map" className="nav-link">Map</Link></li>
        <li><Link to="/chat" className="nav-link">Chat</Link></li>
        <li><Link to="/login" className="nav-link">Login</Link></li>
      </ul>
    </nav>

    <Switch>
      <Route path="/map" component={MapContainer} />
      <Route path="/townhall" component={TownHallContainer} />
      <Route path="/zip" component={ZipForm} />
      <Route path="/login" component={LoginForm} />
      <Route path="/chat" component={Chat} />
    </Switch>

    </div>
  </Router>

)
//<Route exact path="/" component={App} />

export default Routes;

{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <ul className="navbar-nav mr-auto">
    <li><Link to={'/'} className="nav-link"> Home </Link></li>
    <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
    <li><Link to={'/about'} className="nav-link">About</Link></li>
    <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
  </ul>
</nav> */}