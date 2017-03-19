'use-strict'

import React, { Component } from 'react';
import Game from './components/Game'
import './App.css';
import { connect } from 'react-redux'
import * as actionCreators from './ducks/game_data'

class App extends Component {
  componentDidMount() {
    this.props.initializeGame()
  }
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

const mapStateToProps = (state) => {
  return {
    gameData: state.game_data
  }
}

export default connect(mapStateToProps, actionCreators)(App)
