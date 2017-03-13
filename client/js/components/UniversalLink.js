import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getRoutingLocation } from 'libs/reactRouterReduxHelper'

// this whole component is an ugly hack for classic rails views with multiple
// providers without react router

const UniversalLink = (props) => {
  const { routing, children, to } = props

  if (getRoutingLocation(routing)) {
    return <Link to={to}>{children}</Link>
  }

  return <a href={to}>{children}</a>
}

UniversalLink.propTypes = {
  children: PropTypes.node,
  routing: PropTypes.object,
  to: PropTypes.string
}

const mapStateToProps = state => ({ routing: state.routing })

export default connect(mapStateToProps)(UniversalLink)
