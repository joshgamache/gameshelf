import React from "react";
import ShelfBay from "./ShelfBay"

// TODO:
// Need to pass in props
// Need to determine logic to decide where games go (ie. alphabetical) and when they go into each individual shelf 
// - include logic in this function

const GameShelf = () => {
  const FullShelfObject = {
    "numShelvesWide" : 3,
    "numShelvesTall" : 3,
    "individualShelfWidth" : 330,
    "individualShelfHeight" : 330,
    "fullShelfColor" : "black",
  }

  const FullShelfStylesheet = {
    display:"grid",
    gridTemplateColumns: "330px 330px 330px",
    gridTemplateRows: "330px 330px 330px",
    gridGap: "20px 20px",
    background: FullShelfObject.fullShelfColor,
  }

  return (
    <ul style={FullShelfStylesheet}>
      <li><ShelfBay /></li>
      <li><ShelfBay /></li>
      <li><ShelfBay /></li>
      <li><ShelfBay /></li>
      <li><ShelfBay /></li>
      <li><ShelfBay /></li>
      <li><ShelfBay /></li>
      <li><ShelfBay /></li>
      <li><ShelfBay /></li>
    </ul>
  )
}

export default GameShelf;