import React from "react";
import ShelfBay from "./ShelfBay"
import ControlStub from "./ControlStub"
import BoxSizeFitter from "../components/BoxSizeFitter";


//Use the following code to better handle window sizing, replacing window.innerHeight
//constructor(props) {
//  super(props);
//  this.state = { };
//  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
//}
//
//componentDidMount() {
//  this.updateWindowDimensions();
//  window.addEventListener('resize', this.updateWindowDimensions);
//}
//
//componentWillUnmount() {
//  window.removeEventListener('resize', this.updateWindowDimensions);
//}
//
//updateWindowDimensions() {
//  this.setState({ width: window.innerWidth, height: window.innerHeight });
//}

const scaleFactor = (shelfWidth = 330, containerWidth = 330) =>{
	return shelfWidth <= containerWidth ? 1 : containerWidth / shelfWidth
}

class GameShelf extends React.Component {
  // The following is lifted up from ControlStub, to be used in GameShelf:
  constructor(props) {
    super(props);
    this.state = {...this.props.sizing, 
      windowWidth: 0, 
      windowHeight: 0,
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  handleFormChange(event) {
    const value = event.value;
    const name = event.name;

    this.setState({
      [name] : value
    });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
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

    const FullShelfStylesheet = {
      display:"grid",
      // justifyContent:"center",
      overflowX : "auto",
      gridTemplateColumns: `repeat(${this.state.shelfColumns}, ${this.state.shelfWidth}px)`,
      gridTemplateRows: `repeat(${this.state.shelfRows}, ${this.state.shelfHeight}px)`,
      gap: "5px 5px",
      boxSizing: "border-box",
      width: "100%",
      maxWidth: "914px",
    }

    // Not particularly reactive, but will work for now
    if(this.state.windowWidth < shelfBreakpoints.mobile){
      FullShelfStylesheet.maxWidth = "100%";
      FullShelfStylesheet.width = "632px"
    } else if(this.state.windowWidth >= shelfBreakpoints.tablet && this.state.windowWidth < shelfBreakpoints.desktop){
      FullShelfStylesheet.maxWidth = "100%";
      FullShelfStylesheet.width = "632px"
    } else if(this.state.windowWidth >= shelfBreakpoints.desktop && this.state.windowWidth < shelfBreakpoints.widescreen){
      FullShelfStylesheet.maxWidth = "100%";
      FullShelfStylesheet.width = "770px"
    } else if(this.state.windowWidth >= shelfBreakpoints.widescreen && this.state.windowWidth < shelfBreakpoints.fullhd){
      FullShelfStylesheet.maxWidth = "770px";
      FullShelfStylesheet.width = "100%"
    } else if(this.state.windowWidth >= shelfBreakpoints.fullhd){
      FullShelfStylesheet.maxWidth = "914px";
      FullShelfStylesheet.width = "100%"
    }

    console.log(`${this.state.windowWidth}, ${FullShelfStylesheet.maxWidth}, ${FullShelfStylesheet.width}`)

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
      } else {
        scaleValue = scaleFactor(shelfTotalWidth, 914);
      }

    FullShelfStylesheet.width = `${shelfTotalWidth * scaleValue}px`;
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
