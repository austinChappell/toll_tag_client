import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div className="Table">
        <div className="event header">
          <div className="title">
            Location
          </div>
          <div className="date">
            Date
          </div>
          <div className="charge">
            Amount
          </div>
        </div>
        {this.props.events.map((event, index) => {
          return (
            <div className="event">
              <div className="title">
                {event.location}
              </div>
              <div className="date">
                {event.created_at}
              </div>
              <div className="charge">
                ${event.charge}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Table;
