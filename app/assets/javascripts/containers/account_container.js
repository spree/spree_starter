import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchAccount } from '../actions/account_actions'
import { getAccount } from '../reducers/account_reducers'
// import Account from '../components/account'

class AccountContainer extends Component {

  componentDidMount() {
    if(!this.props.account.isFetching) {
      this.props.dispatch(fetchAccount())
    }
  }

  render() {
    return (
      <div />
    )
  }
}

AccountContainer.propTypes = {
  account: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    account: getAccount(state)
  }
}

export default connect(mapStateToProps)(AccountContainer)
