import React from 'react';


const GameDisplay = ({name, id, size_x, size_y, size_z, size_units, image}) => {
  return(
    <div className = "box ">
      <article className = "media is-paddingless">
        <div className = "media-left">
          <figure className = "image is-32x32">
            <img src = {image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> - <small>{size_x} by {size_y} by {size_z} {size_units}</small>
            </p>
          </div>
        </div>
      </article>
      
      {/* A block containing */}
        {/* Game image */}
        {/* Game name */}
        {/* Game dimensions */}
        {/* Add to shelf checkbox */}
    </div>
  );
}

export default GameDisplay;