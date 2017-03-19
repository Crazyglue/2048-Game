import React, { Component } from 'react';
import Gameboard from './Gameboard'

class Game extends Component {
  render() {
    return (
      <div style={{marginTop: 50}}>
        <Gameboard />
      </div>
    );
  }
}

export default Game;
