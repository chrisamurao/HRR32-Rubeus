import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import ZipForm from './components/ZipForm.jsx'


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
      tier: 'state'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleSubmit(inputZip, inputRegion) {
    event.preventDefault();
    console.log('current state:', inputZip, inputRegion);

    axios.post('/saveUser', {
      zip: inputZip,
      region: inputRegion
    })
    .then(response => {
      if (typeof(response.data) === 'String') {
        console.log(response.data);
      } else {
        this.setState({ data: response.data })
      }
    })
  }

  setUsername (event) {
    this.setState({
      username: event.target.value
    })
  }

  setPassword (event) {
    this.setState({
      password: event.target.value
    })
  }

  handleLogin (event) {
    console.log('hello')
    console.log(this.state.username, this.state.password)
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
      })
    .then(function (response) {
      console.log(response);
    })
  }



  render () {
    return (
      <div style={styles.master}>
        <h1 style={styles.headers}>App v1</h1>
        <ZipForm onSubmit={(zip, region) => {this.handleSubmit(zip, region)}}/>


        <input value={this.state.username} type="text" onChange={this.setUsername}/>
          <br></br>
        <input value={this.state.password} type="text" onChange={this.setPassword}/>
          <br></br>
        <button onClick={this.handleLogin}>login</button>


      <ListView data={this.state.data} state={this.state.state}/>
      </div>
    )
  }
}

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    var listOfReps = [];
    for (var i = 0; i < this.props.data.length; i++){
      listOfReps.push(
        <div>
          <p>{this.props.data[i].title}</p>
          <p>{this.props.data[i].name}</p>
          <p>{this.props.data[i].party}</p>
          <br></br>
          <br></br>
        </div>
      )
    }
    return listOfReps;
  }
}




ReactDOM.render(<App/>, document.getElementById('app'));