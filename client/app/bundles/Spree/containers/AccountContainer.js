import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchAccount } from '../actions/account'
import { getAccount } from '../reducers/account'
import { fetchAuthenticityToken } from '../actions/authenticityToken'
import { getAuthenticityToken } from '../reducers/authenticityToken'
import Account from '../components/Account'

class AccountContainer extends Component {
  static propTypes = {
    account: PropTypes.object,
    authenticityToken: PropTypes.object
  }

  componentWillMount() {
    if(!this.props.account.isFetching) {
      this.props.dispatch(fetchAccount())
    }
    if(!this.props.authenticityToken.isFetching) {
      this.props.dispatch(fetchAuthenticityToken())
    }
  }

  render() {
    const { account, authenticityToken } = this.props

    if(!account.data) {
      return false
    }

    return (
      <Account {...account.data.attributes} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: getAccount(state),
    authenticityToken: getAuthenticityToken(state)
  }
}

export default connect(mapStateToProps)(AccountContainer)
