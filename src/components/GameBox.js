import React from 'react';

const GameBox = (props) => {
  return (
      <rect width={props.dimensions.z} height={props.dimensions.x} strokeOpacity="0.5" />
  )
};


export default GameBox;