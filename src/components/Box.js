import React from 'react';

const Box = (props) => {
  const boxLocationX=0,
    boxLocationY=0;

  return (
    <svg>
      <rect x={boxLocationX} y={boxLocationY} width={props.dimensions.z} height={props.dimensions.x}/>
    </svg>
  )
};


export default Box;