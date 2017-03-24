import React, { Component } from 'react';
import Cell from './Cell'
import * as actionCreators from '../ducks/game_data'
import { connect } from 'react-redux'
import _ from 'lodash'

class Gameboard extends Component {
  generateCells(cells = []) {
    console.log("generating cells", cells)

    return cells.map((cellValue, i) => {
      return (<Cell key={i} value={cellValue} />)
    })
  }

  render() {
    console.log("cellData", this.props.cellData)
    let cells = this.props.cellData.map((cellValue, i) => {
      return (<Cell key={i} cellValue={cellValue} />)
    })

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
