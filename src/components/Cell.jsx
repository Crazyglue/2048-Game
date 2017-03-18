import React, { Component } from 'react';

const CELL_PADDING = 20

class Cell extends Component {
  render() {
    var cellWidth = this.props.boardWidth / this.props.gridSize.x
    var innerCellWidth = cellWidth - CELL_PADDING

    return (
      <svg x={this.props.column * cellWidth} y={this.props.row * cellWidth} fill={"white"} stroke={"#343434"}>
        <g>
          <rect style={{backgroundColor: "white"}} width={cellWidth} height={cellWidth} />
          <rect fill="orange" width={innerCellWidth} height={innerCellWidth} x={CELL_PADDING /2} y={CELL_PADDING/2} />
          <text cx={innerCellWidth/2} cy={innerCellWidth/2} fontFamily="Verdana" fontSize="35">
            8
          </text>
        </g>
      </svg>
    );
  }
}

Cell.propTypes = {
  column: React.PropTypes.number.isRequired,
  row: React.PropTypes.number.isRequired,
  boardWidth: React.PropTypes.number.isRequired,
  gridSize: React.PropTypes.object.isRequired,
}

export default Cell;
