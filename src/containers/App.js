import React, { Component } from 'react';
import Box from '../components/Box.js';
import './App.css';
import '../App.sass';
import Searchbox from '../components/Searchbox.js';
import GameDisplay from '../components/GameDisplay.js';
import GameList from '../components/GameList.js';
// import ministub from '../assets/ministub.json';
import games from "../assets/stubData.json"

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      gameList: [],
    }
  }

  componentDidMount() {
    this.setState({gameList: games.games});
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value
    });
  }

  render() {
    const {gameList} = this.state;
    return (
      <div className="App">
        <div className="container">
          <GameList games={gameList}/>
          {/* <Searchbox searchChange={this.onSearchChange}/> */}
          {/* shelf display, contains boxes */}
          {/* Game list, contains single game display */}
        </div>
      </div>
    );
  }
}

export default App;