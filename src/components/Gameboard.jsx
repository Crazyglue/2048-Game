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

    cells = this.props.cellData.map((cellValue, i) => {
      let column = Math.floor(i % this.state.gridSize.x) // x
      let row = Math.floor(i / this.state.gridSize.y) // y
      console.log("row", row)
      console.log("column", column)
      return (<Cell key={i} column={column} row={row} boardWidthPixels={BOARD_WIDTH} gridSize={this.state.gridSize} value={cellValue} />)
    })

    return cells
  }

  render() {
    let cells = this.generateCells()

    console.log("cellData", this.props.cellData)

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
    cellData: state.gameData.cellData
  }
}

export default connect(mapStateToProps, actionCreators)(Gameboard);
