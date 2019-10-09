import React from 'react';
import GameBox from './GameBox';
// import {Palette} from 'react-palette'
// import { usePalette } from 'react-palette'
import ImagePalette from 'react-image-palette'

import * as Vibrant from 'node-vibrant'

const corsUrl = "https://cors-anywhere.herokuapp.com/"; //Used to allow cross-origin requests. Try and replace this with something sustainable in the future. 

const GameDisplay = ({name, id, size_x, size_y, size_z, size_units, image, deleteClick}) => {
    const dims = {
      "x" : size_x,
      "y" : size_y,
      "z" : size_z,
      "units" : size_units,
    }

    if (dims.units && dims.units.trim() == "inches"){
      dims.x = (parseFloat(dims.x) * 25.4).toFixed(0);
      dims.y = (parseFloat(dims.y) * 25.4).toFixed(0);
      dims.z = (parseFloat(dims.z) * 25.4).toFixed(0);
      dims.units = "mm";
    }

  const defaultPalette = {
    backgroundColor: "hsl(204, 86%, 53%)",
    color: "#fff",
    alternativeColor: "hsl(171, 100%, 41%)",
  }

  // const SomeComponent = ({ image }) => (
  //   <ImagePalette image={image} crossOrigin={true}>
  //     {({ backgroundColor, color, alternativeColor }) => (
  //       <div style={{ backgroundColor, color }}>
  //         This div has been themed based on
  //         <span style={{ color: alternativeColor }}>a box image</span>
  //       </div>
  //     )}
  //   </ImagePalette>
  // )
  

// Pulls data from image to determine vibrant color. Gives CORS errors, need to fix.
  // const { data } = usePalette(image);
// TODO: Streamline colour finding process. Maybe have a helper perform this when games are added to list?
  return(
    <div className = "column is-half">
      <div className = "box is-fullwidth is-outlined game-container">
        <article className = "media">
          <div className = "media-left">
            <figure className = "image is-48x48">
              <img src = {image} className = "scale-width" alt={"Game box for " + name}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content is-size-6">
              <p>
                <strong>{name}</strong><br/><small>{dims.x ? `${dims.x} by ${dims.y} by ${dims.z} ${dims.units}` : "No dimensions available"}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
          {dims.units &&
              <ImagePalette image={corsUrl + image} crossOrigin defaults={defaultPalette}>
                {({ backgroundColor, color }) => (
                  <svg height="48" viewBox="0 0 100 100" style={{paddingRight:"4px"}} >
                    <rect height="1000" width="1000" fill={backgroundColor} />
                    <svg viewBox={"0 0 330 330"} >
                      <GameBox dimensions = {dims} boxColor = {color} />
                    </svg>
                  </svg>
                )}
              </ImagePalette>
            }
            <button className="delete" /> {/* FIX */}
          </div>
        </article>
        {/* A block containing */}
          {/* Game image */}
          {/* Game name */}
          {/* Game dimensions */}
          {/* Add to shelf checkbox */}
      </div>
    </div>
  );
}

export default GameDisplay;