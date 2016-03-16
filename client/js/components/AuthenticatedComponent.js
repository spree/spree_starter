import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'
import cookies from 'cookies-js'
import { getAccount } from 'reducers/account'

export function requireAuthentication(ChildComponent) {
  class AuthenticatedComponent extends Component {
    static propTypes = {
      account: PropTypes.object.isRequired,
      dispatch: PropTypes.func.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    }

    componentWillMount() {
      this.checkAuth()
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth()
    }

    checkAuth() {
      const { account, dispatch, location, history } = this.props
      const fullPath = history.createPath({
        pathname: location.pathname,
        query: location.query,
        search: location.search
      })
      if (!account.id) {
        dispatch(routerActions.push('/signup'))
        cookies.set('returnTo', fullPath)
      }
    }

    render() {
      const { account } = this.props

      return (
        <div>
          {account.id && <ChildComponent {...this.props}/> || null}
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      account: getAccount(state)
    }
  }

  return connect(mapStateToProps)(AuthenticatedComponent)
}
