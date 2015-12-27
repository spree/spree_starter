import React, { Component, PropTypes } from 'react'

export default class Dummy extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>My name is: {this.props.name}</div>
    )
  }
}
