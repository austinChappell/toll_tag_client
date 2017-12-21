import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div className="Table">
        <div className="item header">
          {this.props.titles.map((title, index) => {
            return (
              <div key={index}>{title}</div>
            )
          })}
        </div>
        {this.props.data.map((data, index) => {
          return (
            <div className="item" key={index}>
              {this.props.keys.map((key, index) => {
                return (
                  <div key={index}>{data[key]}</div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Table;
