import React, { Component } from 'react';
import './App.css';
import '../App.sass';
// import Searchbox from '../components/Searchbox.js';
import GameList from '../components/GameList.js';
// import ministub from '../assets/ministub.json';
import games from "../assets/stubData.json"
import StubList from "../components/selectionTestStub";
// import SingleShelf from "../components/SingleShelf";
// import ShelfBay from "../components/ShelfBay";
import GameShelf from "../components/GameShelf";


class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      gameList: [],
      allGames: [],
      newGame: {}
    }
  }

  componentDidMount() {
    this.setState({allGames: games.games});
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value
    });
  }

//TODO: I'm pretty sure this is the wrong way to do this...but it works for now. FIX IT!
  toAddClick = (keyID) => {
    const newGameList = this.state.gameList.slice();
    newGameList.push(this.state.allGames.find(({id}) => id === keyID));

    this.setState({
      gameList: newGameList
    })
  }

  render() {
    const {allGames, gameList} = this.state;
    return (
      <div className="App">
        <div className="container">
          <StubList games={allGames} onClick={(gameKeyId) => this.toAddClick(gameKeyId)}/>
          {/* <Searchbox searchChange={this.onSearchChange}/> */}
          {/* shelf display, contains boxes */}
          {/* Game list, contains single game display */}
        </div>
        <div className="section">
          <div className="container">
              <GameList games={gameList}/>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <GameShelf games={gameList}/>
          </div>
        </div>

        {/* <div className="section">
          <div className="container">
            <SingleShelf />
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;