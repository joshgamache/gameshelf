import React from 'react';
import GameDisplay from './GameDisplay.js';

const GameList = ({games}) => {
  return (
    <div className = "columns is-multiline">
      {
        games.map((game, i) => {
          return ( <
            GameDisplay key = { i }
            id = { games[i].id }
            name = { games[i].name }
            image = { games[i].image_url }
            size_x = { games[i].size_height }
            size_y = { games[i].size_width }
            size_z = { games[i].size_depth }
            size_units = { games[i].size_units }
          />);
        })
      }
    </div>
  )
}

export default GameList;

