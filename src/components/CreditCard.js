import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import StripeCheckout from 'react-stripe-checkout';

class CreditCard extends Component {

  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  render() {
    return (
      <div className="CreditCard">
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_nwLJfzIJWiexkUXqO53XMswp"
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default withRouter(connect(mapStateToProps)(CreditCard));
