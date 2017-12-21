import React, { Component } from 'react';

function Table(props) {
    return (
      <div className="Table">
        <div className="item header">
          {props.titles.map((title, index) => {
            return (
              <div key={index}>{title}</div>
            )
          })}
        </div>
        {props.data.map((data, index) => {
          return (
            <div className="item" key={index}>
              {props.keys.map((key, index) => {
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

export default Table;
