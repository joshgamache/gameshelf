import React from 'react';
import GameDisplay from './GameDisplay.js';

const GameList = ({games, onClick}) => {
  const gameComponents = games.map((game, i) => {
    return (
      <GameDisplay key = {`${game.id}${i}`}
        id = {game.id}
        name = {game.name}
        image = {game.image_url}
        size_x = {game.size_height}
        size_y = {game.size_width}
        size_z = {game.size_depth}
        size_units = {game.size_units}
        onClick = {onClick} 
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

