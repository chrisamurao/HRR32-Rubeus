import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ZipForm from './components/ZipForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import ListView from './components/ListView.jsx';
import MapContainer from './components/MapContainer.jsx';
import TownHallContainer from './components/townhall/TownHallContainer.jsx';
import './App.css';
import Routes from './components/routes/index.jsx';

const styles = {
  master: {
    alignContent: "center",
    fontFamily: "Verdana, Geneva, sans-serif"
  },
  headers: {
    backgroundColor: "red",
    alignContent: "center",
    color: "white",
    margin: 0,
    padding: 10
  },
  zip: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: 40,
    paddingTop: 100
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      tier: 'state',
      currentView: ''
    }
  }

  render () {
    return <div style={styles.master}>
        <div className="nav" style={styles.headers}>
          <h1>App v1.1</h1>
          <a href="auth/google">Login with Google</a>
        </div>
        <Routes />
      </div>;
  }
}

{/* <TownHallContainer />
  <MapContainer />
  <ZipForm />
  <LoginForm />
  <ListView data={this.state.data} /> */}





ReactDOM.render(<App/>, document.getElementById('app'));