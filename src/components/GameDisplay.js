import React from 'react';
import GameBox from './GameBox';

const GameDisplay = ({name, id, size_x, size_y, size_z, size_units, image}) => {
  const dims = {
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
          <svg height="48" viewBox="0 0 100 100">
            <rect height="1000" width="1000" fill="SkyBlue"/>
            <svg viewBox={"0 0 330 330"} >
              <GameBox dimensions = {dims}/>
            </svg>
          </svg>
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