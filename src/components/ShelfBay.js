import React from 'react';
import GameBox from './GameBox';

const ShelfBay = () => {
  const shelfDimensions = {
    "w" : 330,
    "h" : 330,
  }

  const box1stub = {
    "name" : "Sushi Go!",
    "x" : 106.68,
    "y" : 147.32,
    "z" : 38.1,
  }

  const box2stub = {
    "name" : "Catan",
    "x" : 200.66,
    "y" : 299.72,
    "z" : 299.72
  }

  return (
    <ul style={{display: "flex", width: shelfDimensions.w, height: shelfDimensions.h, flexWrap: "wrap-reverse", alignContent: "flex-start", alignItems: "flex-start", background: "grey" }}>
      <li style={{display: "flex", width: box1stub.z, height: box1stub.x, color:"white", background: "red", alignItems: "center", justifyContent: "center"}}><span style={{transform: "rotate(90deg)"}}>{box1stub.name}</span></li>
      <li style={{display: "flex", width: box2stub.x, height: box2stub.y, color:"white", background: "green", alignItems: "center", justifyContent: "center"}}><span style={{transform: "rotate(90deg)"}}>{box2stub.name}</span></li>
    </ul>
  )
}

export default ShelfBay;