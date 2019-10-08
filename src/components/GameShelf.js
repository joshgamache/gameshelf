import React from "react";
import ShelfBay from "./ShelfBay"
import ControlStub from "./ControlStub"
import GameList from "./GameList";
import BoxSizeFitter from "../components/BoxSizeFitter";

// TODO:
// Need to pass in props
// Need to determine logic to decide where games go (ie. alphabetical) and when they go into each individual shelf 
// - include logic in this function

class GameShelf extends React.Component {
  // The following is lifted up from ControlStub, to be used in GameShelf:
  constructor(props) {
    super(props);
    this.state = {
      shelfWidth : 330,
      shelfHeight : 330,
      shelfColumns : 1,
      shelfRows : 1,
    };

    this.handleFormChange = this.handleFormChange.bind(this);
  }
  
  handleFormChange(event) {
    const value = event.value;
    const name = event.name;

    this.setState({
      [name] : value
    });
  }


  render() {
    const FullShelfObject = {
      "numShelvesWide" : this.state.shelfColumns,
      "numShelvesTall" : this.state.shelfRows,
      "individualShelfWidth" : this.state.shelfWidth,
      "individualShelfHeight" : this.state.shelfHeight,
      "fullShelfColor" : "DarkGrey",
    }
    
    const FullShelfStylesheet = {
      display:"grid",
      justifyContent:"center",
      gridTemplateColumns: `repeat(${this.state.shelfColumns}, ${this.state.shelfWidth}px)`,
      gridTemplateRows: `repeat(${this.state.shelfRows}, ${this.state.shelfHeight}px)`,
      gap: "20px 20px",
      background: FullShelfObject.fullShelfColor,
    }
    
    const buildEachShelf = () => {
      const numberOfShelvesTotal = FullShelfObject.numShelvesWide * FullShelfObject.numShelvesTall;
      
      const shelfArray = [];

      let remainingGames = this.props.games;


      for (let i=0; i<numberOfShelvesTotal; i++) {
        const weirdGamesObject = BoxSizeFitter(remainingGames, {width: this.state.shelfWidth, height: this.state.shelfHeight})
        const gamesIntoShelf = weirdGamesObject.gamesThatFit;
        shelfArray.push(<li key={i}><ShelfBay individualShelfArea={FullShelfObject} gamesToAddToShelf={gamesIntoShelf}/></li>)
        remainingGames = weirdGamesObject.gamesTooBig;
      }
    

      return (
        <ul style={FullShelfStylesheet}>
          {shelfArray}
        </ul>
      )
    }

    // const test = () => {
    //   console.log(BoxSizeFitter(this.props.games, {width: this.state.shelfWidth, height: this.state.shelfHeight}))
    // }


    return (
      <div className="box">
        <div>{/* {test()} */}
          <div className="container">
              <ControlStub shelf={FullShelfObject} onFormChange={this.handleFormChange} />
            </div>
            {buildEachShelf()}
        </div>
      </div>
    )
  }
}

export default GameShelf;