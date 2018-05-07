import React from 'react';
import { Link } from 'react-router';

const CerealTile = props => {
  return(
    <div className="cereal">
      <h1>{props.name}</h1>
    </div>
  )
}

export default CerealTile;
