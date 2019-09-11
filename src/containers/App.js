import React, { Component } from 'react';
import './App.css';
import '../App.sass';
// import Searchbox from '../components/Searchbox.js';
import GameList from '../components/GameList.js';
// import ministub from '../assets/ministub.json';
import games from "../assets/stubData.json"
import StubList from "../components/selectionTestStub";

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
          <StubList games={gameList}/>
          {/* <Searchbox searchChange={this.onSearchChange}/> */}
          {/* shelf display, contains boxes */}
          {/* Game list, contains single game display */}
        </div>
      </div>
    );
  }
}

export default App;