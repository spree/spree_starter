import React, { PropTypes } from 'react'
import { Alert } from 'react-bootstrap'
import { removeAlert } from 'actions/alert'

const Flash = (props) => {
  const { dispatch, id, message, type } = props

  const handleAlertDismiss = (_) => dispatch(removeAlert(id))

  return (
    <Alert
      bsStyle={type}
      dismissAfter={15000}
      onDismiss={handleAlertDismiss}
    >
      <p dangerouslySetInnerHTML={{ __html: message }} />
    </Alert>
  )
}

Flash.propTypes = {
  id: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  flash: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

Flash.defaultProps = {
  flash: {
    type: 'success'
  }
}

export default Flash
