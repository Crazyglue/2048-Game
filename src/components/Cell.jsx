import React, { Component } from 'react';

class Cell extends Component {
  render() {
    let style = {}

    if (this.props.value < 1)
      style = { display: "none" }

    return (
      <div className="cell__wrapper" style={style}>
        <p>{this.props.value}</p>
      </div>
    )
  }
}

Cell.propTypes = {
  value: React.PropTypes.number.isRequired
}

export default Cell;
