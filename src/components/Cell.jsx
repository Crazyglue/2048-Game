import React, { Component } from 'react';

const CELL_PADDING = 20

class Cell extends Component {
  render() {
    let cellWidth = this.props.boardWidthPixels / this.props.gridSize.x
    let innerCellWidth = cellWidth - CELL_PADDING

    if (this.props.value > 0) {
      return (
        <svg x={this.props.column * cellWidth} y={this.props.row * cellWidth} fill={"white"} stroke={"#343434"}>
          <g>
            <rect style={{backgroundColor: "white"}} width={cellWidth} height={cellWidth} />
            <rect fill="orange" width={innerCellWidth} height={innerCellWidth} x={CELL_PADDING /2} y={CELL_PADDING/2} rx={20} ry={20} />
            <text fontWeight={"bold"} alignmentBaseline={"middle"} textAnchor={"middle"} x={cellWidth/2} y={cellWidth/2} fontFamily="Tahoma" fontSize="35">
              {this.props.value}
            </text>
          </g>
        </svg>
      )
    }
    else
      return null
  }
}

Cell.propTypes = {
  column: React.PropTypes.number.isRequired,
  row: React.PropTypes.number.isRequired,
  boardWidthPixels: React.PropTypes.number.isRequired,
  gridSize: React.PropTypes.object.isRequired,
  value: React.PropTypes.number.isRequired
}

export default Cell;
