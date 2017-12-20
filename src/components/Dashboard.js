import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import Table from './Table';

class Dashboard extends Component {

  state = {
    events: [],
    tollTagId: null
  }

  componentDidMount() {
    if (this.props.user.isAdmin) {
      window.location = '/admin'
    }
  }

  filterEvents = (id) => {
    const events = this.props.events.filter((event) => {
      return event.toll_tag_id === id;
    })
    this.setState({ events })
  }

  render() {
    return (
      <div className="Dashboard Page">
        <div className="toll-tags">
          {this.props.tollTags.map((tag, index) => {
            return (
              <div className="tag" key={index} onClick={() => this.filterEvents(tag.id)}>
                <div className="details">
                  <h4>{tag.vehicleTag}</h4>
                </div>
                <div className="balance">
                  <span>Remaining Balance: ${tag.remainingBalance}</span>
                </div>
              </div>
            )
          })}
        </div>
        <Table>
          <div className="item header">
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
          {this.state.events.map((event, index) => {
            return (
              <div className="item">
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
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    user: state.user,
    tollTags: state.tollTags
  }
}

export default withRouter(connect(mapStateToProps)(Dashboard));
