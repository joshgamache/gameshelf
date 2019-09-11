import React from 'react';
import Box from './Box';

const GameDisplay = ({name, id, size_x, size_y, size_z, size_units, image}) => {
  const dimensions = {
    "x" : size_x,
    "y" : size_y,
    "z" : size_z,
  }
  
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
                <strong>{name}</strong> - <small>{size_x} by {size_y} by {size_z} {size_units}</small>
              </p>
            </div>
          </div>
          <Box dimensions = {dimensions}/>
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