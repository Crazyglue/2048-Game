import React, { Component } from 'react';
import Cell from './Cell'

const BOARD_WIDTH = 600

class Gameboard extends Component {
  constructor() {
    super()

    this.state = {
      gridSize: { x: 4, y: 4 }
    }
  }

  generateCells() {
    let cells = []
    for (var i = 0; i < this.state.gridSize.x; i++) {
      for (var j = 0; j < this.state.gridSize.x; j++) {
        let cell = (<Cell column={j} row={i} boardWidth={BOARD_WIDTH} gridSize={this.state.gridSize} />)
        cells.push(cell)
      }
    }

    return cells
  }

  render() {
    let cells = this.generateCells()

    return (
      <svg width={BOARD_WIDTH} height={BOARD_WIDTH}>
        <g>
          <rect width={BOARD_WIDTH} height={BOARD_WIDTH} />
          {cells}
        </g>
      </svg>
    );
  }
}

export default Gameboard;
