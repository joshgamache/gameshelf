import React from 'react';

/*
What does this function need to do?
Take in an array of game boxes and the dimensions of the container
Output an object containing two arrays: one with the "fit" game boxes and one with the "remaining" game boxes

-- Is this the best way to handle the sorting?

*/

// shelfBayDimensions = {width, height}

const BoxSizeFitter = (incomingGamesArray, shelfBayDimensions) => {
	// Takes in an array, object with dimensions of container
	const gamesThatFit = [];
	const gamesTooBig = [];

	const shelfHeight = shelfBayDimensions.height;
	let totalSize = shelfBayDimensions.width;
	
	for (const game of incomingGamesArray){

		//TODO: Fix even MORE not-DRY code!
    const dims = {
      "x" : game.size_width,
      "y" : game.size_height,
      "z" : game.size_depth,
      "units" : game.size_units,
    }

    if (dims.units.trim() == "inches"){
      dims.x = parseFloat(dims.x).toFixed(2) * 25.4;
      dims.y *= 25.4;
      dims.z *= 25.4;
      dims.units = "mm";
    }

		const sortedGameShapeArray = [dims.x, dims.y, dims.z].sort((a, b) => a - b);

		// check if a game can fit. If so, add it to the shelf, reduce the shelf size remaining. Otherwise bump it to the too-big array.
		if (sortedGameShapeArray[0] <= totalSize && sortedGameShapeArray[1] <= shelfHeight){
			gamesThatFit.push(game);
			totalSize -= sortedGameShapeArray[0];
		} else {
			gamesTooBig.push(game);
		}
	}

	return {gamesThatFit, gamesTooBig};
}

export default BoxSizeFitter;