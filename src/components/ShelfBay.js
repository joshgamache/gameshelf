import React from 'react';
import {Palette} from 'react-palette'


// TODO:
// Replace local variables with incoming props.
// Will need:
// - Dimensions of the individual shelf (w, h)
// - An array of games to put on that shelf (name, x, y, z, color)
// const determineBoxColour = (imgURL) => {
//   let v = new Vibrant(imgURL)
//   v.getPalette().then((palette) => palette.Vibrant.rgb)
// }



const ShelfBay = (props) => {
  const shelfDimensions = {
    "w" : props.individualShelfArea.individualShelfWidth,
    "h" : props.individualShelfArea.individualShelfHeight,
  }

  const sg = {
    "name" : "Sushi Go!",
    "y" : 106.68,
    "z" : 147.32,
    "x" : 38.1,
    "color" : "red"
  }

  const ctan = {
    "name" : "Catan",
    "x" : 294.64,
    "y" : 241.3,
    "z" : 76.2,
    "color" : "blue"
  }

  const cnames = {
    "name" : "Codenames",
    "x" : 71.12,
    "y" : 160.02,
    "z" : 228.6,
    "color" : "orange"
  }

  const cob = {
    "name" : "Castles of Burgundy",
    "x" : 309.88,
    "y" : 215.9,
    "z" : 71.12,
    "color" : "brown"
  }

  const NF = {
    "name" : "Near and Far",
    "x" : 292.1,
    "y" : 71.12,
    "z" : 292.1,
    "color" : "yellow"
  }

  const gameBoxList = props.gamesToAddToShelf;

  const builtShelfList = gameBoxList.map((game, i) => {
    const sortedShapeArray = [game.size_depth, game.size_width, game.size_height].sort((a, b) => a - b);

    let idKey = `"${i}"`;


    const styleset = {
      display: "flex",
      width: sortedShapeArray[0],
      height: sortedShapeArray[1],
      color:"white",
      background: "green",
      alignItems: "center",
      justifyContent: "center"
    }
    return (// TODO: handle image loading before executing palette
      <li key={idKey} style={styleset}><span style={{transform: "rotate(90deg)"}}>{game.name}</span>
      <Palette src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254990668-51CIdEFrKKL.jpg">
      {({ data, loading, error }) => (
    <div style={{ color: data.vibrant }}>
      {console.log(data.vibrant)}Text with the vibrant color{console.log(error)}
    </div>
  )}
</Palette>
</li>
    )
  });

  const shelfstyleset = {
    display: "flex",
    width: `${shelfDimensions.w}px`,
    height: `${shelfDimensions.h}px`,
    flexWrap: "wrap-reverse",
    alignContent: "flex-start",
    alignItems: "flex-start",
    background: "LightGrey"
  }

  return (
    <ul style={shelfstyleset}>
      {builtShelfList}
    </ul>
  )
}

export default ShelfBay;