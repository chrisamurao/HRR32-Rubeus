import React, { Component } from 'react';

export default class ZipForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       zip: '',
       tier: 'state',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value, 
    });
  }

  onSubmit(e) {
    e.preventDefault();    
    this.props.onSubmit(this.state.zip, this.state.tier);
    this.setState({
      zip: ''
    })
  }
  
  render() {
    return (
      <div style={{border: "2px solid blue"}}>
        <form style={{ display: "inline-block" }}>
          <label>
            Enter a Zip Code:<br></br>
            <input 
              name="zip"
              type="text"
              value={this.state.zip}
              onChange={e => this.handleChange(e)} 
              placeholder="ZIP code" />
          </label>
          <input 
            onClick={e => this.onSubmit(e)}
            type="submit" 
            value="Submit" />
        </form>
        <div
          style={{display: "inline-block"}}
          onClick={() => { this.setState({ tier: 'state' })}}>
          Set State to STATE
        </div>
        <div
          style={{ display: "inline-block" }}
          onClick={() => { this.setState({ tier: 'county' }) }}>
          Set State to COUNTY
        </div>
        {this.state.tier}
      </div>
    )
  }
}
