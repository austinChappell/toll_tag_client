import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div className="Table">
        {this.props.children}
      </div>
    )
  }
}

export default Table;
