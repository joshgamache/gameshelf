import React from 'react';
import GameBox from './GameBox';

const ShelfBay = () => {
  const shelfDimensions = {
    "w" : 330,
    "h" : 330,
  }

  const box1stub = {
    "x" : 106.68,
    "y" : 147.32,
    "z" : 38.1,
  }

  const box2stub = {
    "x" : 200.66,
    "y" : 299.72,
    "z" : 299.72
  }

  return (
    <div style={{display: "flex", width: shelfDimensions.w, height: shelfDimensions.h, flexWrap: "wrap-reverse", alignContent: "flex-start", alignItems: "flex-start" }}>
      <div style={{display: "flex", width: "50px", height: "80px", color:"white", background: "red"}}>Block 1</div>
      <div style={{display: "flex", width: "50px", height: "30px", color:"white", background: "green"}}>Block 2</div>
      <div style={{display: "flex", width: "50px", height: "50px", color:"white", background: "blue"}}>Block 3</div>
      <div style={{display: "flex", width: "50px", height: "50px", color:"white", background: "blue"}}>Block 4</div>
      <div style={{display: "flex", width: "50px", height: "50px", color:"white", background: "blue"}}>Block 5</div>
      <div style={{display: "flex", width: "50px", height: "50px", color:"white", background: "blue"}}>Block 6</div>
      <div style={{display: "flex", width: "50px", height: "50px", color:"white", background: "blue"}}>Block 7</div>
      <div style={{display: "flex", width: "50px", height: "50px", color:"white", background: "blue"}}>Block 8</div>
    </div>
  )
}

export default ShelfBay;