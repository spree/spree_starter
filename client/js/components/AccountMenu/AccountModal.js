import React, { Component, PropTypes } from 'react'
import { Modal } from 'react-bootstrap'
import LoginForm from 'components/LoginForm'

export default class AccountModal extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = { selectedForm: 'login' }
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton={true} />
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>
    )
  }
}
