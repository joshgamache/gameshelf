import React, { Component } from 'react';
import Box from '../components/Box.js';
import './App.css';
import Searchbox from '../components/Searchbox.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      gameList: []
    }
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Searchbox searchChange={this.onSearchChange}/>
        <Box />
      </div>
    );
  }
}

export default App;
