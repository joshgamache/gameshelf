import React, { Component } from 'react';
import './App.css';
import '../App.sass';
import Searchbox from '../components/Searchbox.js';
import GameList from '../components/GameList.js';
import games from "../assets/stubData.json" // for basic testing
import sGames from "../assets/bgaSearchStub.json" // for search testing
import Header from "../containers/Header"
import SearchColumn from "../containers/SearchColumn"
import MainColumn from "../containers/MainColumn"
import SearchResults from '../components/SearchResults';

// const stubSearchURI = "http://localhost:3000/stubData.json"; // Use this as a test ONLY when BGA is unreachable
const searchURI = "https://api.boardgameatlas.com/api/search?client_id=" + process.env.REACT_APP_BGA_APIKEY;

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      gameList: [],
      allGames: [],
      newGame: {},
      searchResults: [],
      loadingList: [],
      unableToAddToShelf: [],
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

  toAddFromSearchClick = (keyID) => {
    const newGame = this.state.searchResults.find(({id}) => id === keyID);
    const newGameList = this.state.gameList.slice();
    let updateLoadingList = this.state.loadingList.slice();
    let updateUnableToAddToShelf = this.state.unableToAddToShelf.slice();

    if(!newGameList.some((element) => element.id === newGame.id)) {
      newGameList.push(newGame);
      if(newGame.size_depth || newGame.size_height || newGame.size_height){
        updateLoadingList.push(keyID)
      } else {
        updateUnableToAddToShelf.push(keyID)
      }
      this.setState({
        loadingList: updateLoadingList,
        gameList: newGameList,
        unableToAddToShelf: updateUnableToAddToShelf,
      })
    }
  }

  removeGameFromLoadingList = (keyID) => {
    let updateLoadingList = this.state.loadingList.slice();
    updateLoadingList = updateLoadingList.filter((element) => element === keyID);
    setTimeout(()=> {
      this.setState({
        loadingList: updateLoadingList,
      })
    }, 250);
  }
  
  toDeleteFromList = (gameListKey) => {
    let updateGameList = this.state.gameList.filter(element => element.id !== gameListKey)

    if(updateGameList !== -1) {
      this.setState({gameList : updateGameList});
    }
  }


  searchBGAapi = (event) => {
    event.preventDefault(); // prevents the form from submitting when button is clicked, we don't want a page reload

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
    const {gameList, searchResults, loadingList, unableToAddToShelf} = this.state;
    return (
      <div className="App">
        <Header/>
        <section className="section">
          <div className="container">
            <div className="columns is-desktop">
            <SearchColumn>
              <Searchbox searchChange={this.onSearchChange} executeSearch={this.searchBGAapi}/>
              {searchResults !== "" &&
                <div className="container">
                  <SearchResults games={searchResults} loadingList={loadingList} canNotAdd={unableToAddToShelf} onClick={(gameKeyId) => this.toAddFromSearchClick(gameKeyId)} />
                </div>
              }
            </SearchColumn>
            <MainColumn passThru={gameList} removeFromLoading={this.removeGameFromLoadingList}>
              <GameList games={gameList} loadingList={loadingList} onClick={(gameListKey) => this.toDeleteFromList(gameListKey)} />
            </MainColumn>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
