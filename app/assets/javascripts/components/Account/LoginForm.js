import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { fetchAccount } from '../../actions/account'

export default class LoginForm extends Component {
  handleClick() {
    this.props.dispatch(fetchAccount())
  }

  render() {
    return (
      <Button onClick={this.handleClick.bind(this)} />
    )
  }
}

export default connect()(LoginForm)
