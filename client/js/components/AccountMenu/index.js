import React, { Component, PropTypes } from 'react'
import AccountModal from './AccountModal'

import css from './Account.scss'

export default class AccountMenu extends Component {
  static propTypes = {
    email: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = { showModal: false }
  }

  openModal(e) {
    this.setState({ showModal: true })
    e.preventDefault()
  }

  hideModal() {
    this.setState({ showModal: false })
  }

  render() {
    const { account } = this.props
    if (!account.email) {
      return (
        <a href="#" onClick={this.openModal.bind(this)}>
          {I18n.t('spree.login')}
          <AccountModal show={this.state.showModal} onHide={this.hideModal.bind(this)} />
        </a>
      )
    } else {
      return (
        <a href={Routes.spree_account_path()}>{I18n.t('spree.account')}</a>
      )
    }
  }
}
