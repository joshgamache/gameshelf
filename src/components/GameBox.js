import React from 'react';

const GameBox = (props) => {
  // takes the x, y, z  dimensions of the box and organizes them into a logical set. width is smallest, height is mid, depth is max. 
  const shapeArray = [props.dimensions.x, props.dimensions.y, props.dimensions.z].sort();

  
  return (
    <svg viewBox={"0 0 " + shapeArray[0] + " " + shapeArray[1]} >
      <rect width={shapeArray[0]} height={shapeArray[1]} strokeOpacity="0.5" />
    </svg>
  )
};


export default GameBox;