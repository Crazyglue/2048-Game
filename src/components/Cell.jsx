import React, { Component } from 'react';

class Cell extends Component {
  render() {
    let style = {}
    
    return (
      <div className="cell__wrapper" style={style}>
        <p className="cell__value">{this.props.cellValue}</p>
      </div>
    )
  }
}

Cell.propTypes = {
  cellValue: React.PropTypes.number.isRequired
}

export default Cell;
