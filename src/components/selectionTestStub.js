import React from "react";

const stubList = (allGames) => {
  return (
    <div>
      <ul>
        {
          allGames.map((keyName, i) => {
            return(<li>{ allGames[keyName].name }</li>);
          })
        }
      </ul>
    </div>
  );
}

export default stubList;