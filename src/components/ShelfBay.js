import React from 'react';
// import {Palette} from 'react-palette'
import ImagePalette from 'react-image-palette'


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

  const gameBoxList = props.gamesToAddToShelf;

  const getColors = (urlForImage) => {
    
  }

  const builtShelfList = gameBoxList.map((game, i) => {
    const sortedShapeArray = [game.size_depth, game.size_width, game.size_height].sort((a, b) => a - b);

    let idKey = `"${i}"`;

    const defaultPalette = {
      backgroundColor: "hsl(204, 86%, 53%)",
      color: "#fff",
      alternativeColor: "hsl(171, 100%, 41%)",
    }

    return (// TODO: handle image loading before executing palette
      // I'm certainly not doing the styles right either
      <ImagePalette image={game.image_url} crossOrigin="anonymous" defaults={defaultPalette}>
        {({ backgroundColor, color, alternativeColor }) => (
            <li key={idKey} className="individual-board-game-box" style={{ width: sortedShapeArray[0], height: sortedShapeArray[1], background: backgroundColor, borderWidth: "1px", borderStyle: "solid", borderColor: alternativeColor}}><span style={{color: color}} className="gameBoxName title is-4">{game.name}</span>
            </li> 
        )}
      </ImagePalette>
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