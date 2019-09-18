import React from 'react';

const GameBox = (props) => {
  // takes the x, y, z  dimensions of the box and organizes them into a logical set. width is smallest, height is mid, depth is max. 
  const shapeArray = [props.dimensions.x, props.dimensions.y, props.dimensions.z].sort((a, b) => a - b);

  
  return (
      <rect y={330 - shapeArray[1]} width={shapeArray[0]} height={shapeArray[1]} />
  )
};


export default GameBox;