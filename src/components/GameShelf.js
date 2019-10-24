import React from "react";
import ShelfBay from "./ShelfBay"
import ControlStub from "./ControlStub"
import BoxSizeFitter from "../components/BoxSizeFitter";


// TODO:
// Need to pass in props
// Need to determine logic to decide where games go (ie. alphabetical) and when they go into each individual shelf
// - include logic in this function
const scaleFactor = (shelfWidth = 330, containerWidth = 330) =>{
	return shelfWidth <= containerWidth ? 1 : containerWidth / shelfWidth
}

class GameShelf extends React.Component {
  // The following is lifted up from ControlStub, to be used in GameShelf:
  constructor(props) {
    super(props);
    this.state = {...this.props.sizing};
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

    // Ignore the actual size of the column, use breakpoints instead -- simpler but less responsive
    const shelfBreakpoints = {
      mobile: 768, // 632 for shelf
      tablet: 769, // 632 
      desktop: 1024, // 626 
      widescreen: 1216, // 770
      fullhd: 1408, // 914
    }

    const FullShelfObject = {
      "numShelvesWide" : this.state.shelfColumns,
      "numShelvesTall" : this.state.shelfRows,
      "individualShelfWidth" : this.state.shelfWidth,
      "individualShelfHeight" : this.state.shelfHeight,
      "fullShelfColor" : "DarkGrey",
    }

    // TODO: Make the size of the shelves themselves variable. This may prevent the shelf from overflowing the container.

    // console.log("window is " + window.innerWidth)

    const FullShelfStylesheet = {
      display:"grid",
      // justifyContent:"center",
      overflowX : "auto",
      gridTemplateColumns: `repeat(${this.state.shelfColumns}, ${this.state.shelfWidth}px)`,
      gridTemplateRows: `repeat(${this.state.shelfRows}, ${this.state.shelfHeight}px)`,
      gap: "5px 5px",
      // background: FullShelfObject.fullShelfColor,
      boxSizing: "border-box",
      width: "100%",
      maxWidth: "914px",
    }

    // Not particularly reactive, but will work for now
    if(window.innerWidth <= shelfBreakpoints.mobile){
      FullShelfStylesheet.maxWidth = "632px"
    } else if(window.innerWidth >= shelfBreakpoints.tablet && window.innerWidth <= shelfBreakpoints.desktop){
      FullShelfStylesheet.maxWidth = "632px"
    } else if(window.innerWidth > shelfBreakpoints.desktop && window.innerWidth <= shelfBreakpoints.widescreen){
      FullShelfStylesheet.maxWidth = "626px"
    } else if(window.innerWidth > shelfBreakpoints.widescreen && window.innerWidth >= shelfBreakpoints.fullhd){
      FullShelfStylesheet.maxWidth = "770px"
    } else if(window.inneWidth > shelfBreakpoints.fullhd){
      FullShelfStylesheet.maxWidth = "914px"
    }

    // console.log("maxWidth is " + FullShelfStylesheet.maxWidth)


    const eachShelfStylesheet = {
      boxSizing: "border-box",
      margin: "0",
      padding: "0",
      width: "100%"
    }

    // For scaling the shelf within the container
    let scaleValue = 1;

    const shelfTotalWidth = (parseInt(FullShelfObject.individualShelfWidth) + 20) * FullShelfObject.numShelvesWide;
      if(shelfTotalWidth >= 914){
        scaleValue = scaleFactor(shelfTotalWidth, 914);
        // console.log(`Blarg UP ${shelfTotalWidth}, ${parseInt(FullShelfObject.individualShelfWidth) + 20}, ${this.props.sizeMeSize} ${scaleValue}`);
      } else {
        scaleValue = scaleFactor(shelfTotalWidth, 914);
        // console.log(`Blarg Down ${shelfTotalWidth}, ${parseInt(FullShelfObject.individualShelfWidth) + 20}, ${this.props.sizeMeSize} ${scaleValue}`);
      }

    FullShelfStylesheet.width = `${shelfTotalWidth * scaleValue}px`;
      // console.log(FullShelfStylesheet.width)
    let scaleString = `scale(${scaleValue})`
      // End of scaling section

    const buildEachShelf = () => {
      const numberOfShelvesTotal = FullShelfObject.numShelvesWide * FullShelfObject.numShelvesTall;

      const shelfArray = [];

      let remainingGames = this.props.games;


      for (let i=0; i<numberOfShelvesTotal; i++) {
        const weirdGamesObject = BoxSizeFitter(remainingGames, {width: this.state.shelfWidth, height: this.state.shelfHeight})
        const gamesIntoShelf = weirdGamesObject.gamesThatFit;
        shelfArray.push(<li key={i} style={eachShelfStylesheet}><ShelfBay individualShelfArea={FullShelfObject} gamesToAddToShelf={gamesIntoShelf} removeFromLoading={this.props.removeFromLoading}/></li>)
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
          <div className="container">
              <ControlStub shelf={FullShelfObject} onFormChange={this.handleFormChange} style={{transform: scaleString}}/>
          </div>
          <div id="scaler">
            {buildEachShelf()}
          </div>
      </div>
    )
  }
}

export default GameShelf;