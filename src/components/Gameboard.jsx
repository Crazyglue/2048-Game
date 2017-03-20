import React, { Component } from 'react';
import Cell from './Cell'
import * as actionCreators from '../ducks/game_data'
import { connect } from 'react-redux'

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
    let size = this.state.gridSize.x * this.state.gridSize.y

    for (var i = 0; i < size; i++) {
      let column = Math.floor(i % this.state.gridSize.x) // x
      let row = Math.floor(i / this.state.gridSize.y) // y
      console.log("row", row)
      console.log("column", column)
      let cell = (<Cell key={i} column={column} row={row} boardWidth={BOARD_WIDTH} gridSize={this.state.gridSize} />)
      cells.push(cell)
    }

    // for (var i = 0; i < this.state.gridSize.x; i++) {
    //   for (var j = 0; j < this.state.gridSize.y; j++) {
    //     if (this.props.gameData.cellData[i * j])
    //     let cell = (<Cell key={`${i} ${j}`} column={j} row={i} boardWidth={BOARD_WIDTH} gridSize={this.state.gridSize} />)
    //     cells.push(cell)
    //   }
    // }

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

const mapStateToProps = (state) => {
  return {
    cellData: state.game_data
  }
}

export default connect(mapStateToProps, actionCreators)(Gameboard);
