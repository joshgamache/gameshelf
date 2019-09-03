import React from 'react';

const Box = () => {
  const boxWidth=40,
    boxHeight=10;
  const shelfWidth=500,
    shelfHeight=500;
  const boxLocationX=0,
    boxLocationY=490;

  return (
    <svg width={shelfWidth} height={shelfHeight}>
      <rect x={boxLocationX} y={boxLocationY} width={boxWidth} height={boxHeight}/>
    </svg>
  )
};


export default Box;