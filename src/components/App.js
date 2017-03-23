import React, { Component } from 'react';
import Gameboard from './Gameboard'
import '../stylesheets/index.css'
import { connect } from 'react-redux'
import * as actionCreators from '../ducks/game_data'

class App extends Component {
  componentDidMount() {
    this.props.initializeGame()
  }
  render() {
    return (
      <div className="app-wrapper">
        <div className="header">
          <h2>2048!</h2>
        </div>
        <div className="game">
          <Gameboard />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, actionCreators)(App)
