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
        <Table events={this.state.events} />
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
