import React from 'react';
import GameDisplay from './GameDisplay.js';

const toRemoveClick = (e) => {
  console.log(e);
}


const GameList = ({games}) => {
  const gameComponents = games.map((game, i) => {
    return (
      <GameDisplay key = {i}
        id = {game.id}
        name = {game.name}
        image = {game.image_url}
        size_x = {game.size_height}
        size_y = {game.size_width}
        size_z = {game.size_depth}
        size_units = {game.size_units}
        deleteClick={toRemoveClick}
      />
    )
  });

  return (
    <div className = "columns is-multiline is-fullwidth">
      {gameComponents}
    </div>
  )
}

export default GameList;

