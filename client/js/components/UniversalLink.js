import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

// this whole component is an ugly hack for classic rails views with multiple
// providers without react router

class UniversalLink extends Component {
  render() {
    const { routing, children, to } = this.props
    if (routing && routing.location) {
      return <Link {...this.props}>{children}</Link>
    } else {
      return <a {...this.props} href={to}>{children}</a>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    routing: state.routing
  }
}

export default connect(mapStateToProps)(UniversalLink)
