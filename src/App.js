'use-strict'

import React, { Component } from 'react';
import Game from './components/Game'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>2048!</h2>
        </div>
        <Game />
      </div>
    );
  }
}

export default App;
