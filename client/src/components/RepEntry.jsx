import React from 'react';

const RepEntry = props => (
  <div>
    <p>{props.rep.name}</p>
    <p>{props.rep.title}</p>
    <p>Party: {props.rep.party}</p>
    <br></br>
    <br></br>
  </div>
)

export default RepEntry;