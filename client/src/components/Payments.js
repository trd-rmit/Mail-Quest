import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Payments extends Component {
  render() {
    const REACT_APP_STRIPE_PUBLISHABLE_KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    console.log(REACT_APP_STRIPE_PUBLISHABLE_KEY)
    return (
        <StripeCheckout
            name="Two Rupees Please"
            description='Love!'
            amount={500}
            token={token => this.props.handleToken(token)}
            stripeKey={REACT_APP_STRIPE_PUBLISHABLE_KEY}
        >
            <button className='btn'>Add Credits</button>
        </StripeCheckout>
    )
  }
}

export default connect(null, actions)(Payments)