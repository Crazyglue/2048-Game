import React, { Component } from 'react';
import Cell from './Cell'
import * as actionCreators from '../ducks/game_data'
import { connect } from 'react-redux'

class Gameboard extends Component {
  generateCells() {
    let cells = []

    cells = this.props.cellData.map((cellValue, i) => {
      return (<Cell key={i} value={cellValue} />)
    })

    return cells
  }

  render() {
    let cells = this.generateCells()

    console.log("cellData", this.props.cellData)

    return (
      <div className="gameboard">
        <div className="gameboard__grid">
        </div>
        <div className="gameboard__cells">
          {cells}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cellData: state.gameData.cellData
  }
}

export default connect(mapStateToProps, actionCreators)(Gameboard);
