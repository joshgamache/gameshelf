import React, { Component } from 'react';
import './App.css';
import '../App.sass';
import Searchbox from '../components/Searchbox.js';
import GameList from '../components/GameList.js';
import games from "../assets/stubData.json" // for basic testing
import sGames from "../assets/bgaSearchStub.json" // for search testing
import StubList from "../components/selectionTestStub";
import Header from "../containers/Header"
import SearchColumn from "../containers/SearchColumn"
import MainColumn from "../containers/MainColumn"
import SearchResults from '../components/SearchResults';
import { arrayExpression } from '@babel/types';

// const stubSearchURI = "http://localhost:3000/stubData.json"; // Use this as a test ONLY when BGA is unreachable
const searchURI = "https://www.boardgameatlas.com/api/search?client_id=" + process.env.REACT_APP_BGA_APIKEY;

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      gameList: [],
      allGames: [],
      newGame: {},
      searchResults: [],
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

  // TODO: Dedup this, there shouldn't be two functions doing esentially the same thing!

  toAddFromSearchClick = (keyID) => {
    const newGame = this.state.searchResults.find(({id}) => id === keyID);
    const newGameList = this.state.gameList.slice();
    newGameList.push(newGame);


    // const updatedList = this.state.list.concat(response.result);
    this.setState({
      gameList: newGameList
    })
  }

  toDeleteFromList = (gameListKey) => {
    let updateGameList = this.state.gameList.filter(element => element.id !== gameListKey)

    if(updateGameList !== -1) {
      this.setState({gameList : updateGameList});
    }
  }

  // this.todos = this.todos.filter(function (candidate) {
  //   return candidate !== todo;
  // });

  searchBGAapi = (event) => {
    event.preventDefault(); // prevents the form from submitting when button is clicked, we don't want a page reload

    // let searchList = [];
    const newItem = this.state.searchField;

    // Check if there's anything in the input first
    if (newItem !== "") {
      const searchByName = `${searchURI}&name=${newItem}`;
      // const searchByName = searchURI; // Used when testing stub ONLY
      // console.log(searchByName);
      fetch(searchByName)
        .then(response => response.json())
        .then(
          json => {
            // console.log(json)
            this.setState({
              searchResults : json.games
            })
          }
        )
        .catch(error=>console.log(error))
      }
      //Do this just to try and load more games into the set for testing.
      this.setState({searchResults : sGames.games })
    //fetch the search results from BoardGame Atlas, return an array of names and keys.

  }

  render() {
    const {gameList, searchResults} = this.state;
    return (
      <div className="App">
        <Header/>
        <section className="section">
          <div className="container">
            <div className="columns">
            <SearchColumn>
              <Searchbox searchChange={this.onSearchChange} executeSearch={this.searchBGAapi}/>
              {searchResults !== "" &&
                <div className="container">
                  <SearchResults games={searchResults} onClick={(gameKeyId) => this.toAddFromSearchClick(gameKeyId)} />
                </div>
              }
            </SearchColumn>
            <MainColumn passThru={gameList}>
              <GameList games={gameList} onClick={(gameListKey) => this.toDeleteFromList(gameListKey)} />
            </MainColumn>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;