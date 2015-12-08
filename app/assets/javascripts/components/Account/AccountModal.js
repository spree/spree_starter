import React, { Component, PropTypes } from 'react'
import { Modal, Button } from 'react-bootstrap'
import LoginForm from './LoginForm'

export default class AccountModal extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedForm: 'login' }
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

AccountModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired
}
