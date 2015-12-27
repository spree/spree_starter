import React, { Component, PropTypes } from 'react'
import { Alert, Input, ButtonInput } from 'react-bootstrap'
import { reduxForm } from 'redux-form'
import { login } from 'actions/login'

export const fields = ['email', 'password']

const submit = (values, dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(
      login(values.email, values.password)
    ).then((action) => {
      if (action.error) {
        reject({ _error: 'bad email / password' })
      } else {
        resolve()
      }
    })
  })
}

export default class LoginForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired,
  }

  render() {
    const { fields: { email, password }, error, handleSubmit, submitting } = this.props

    return (
      <form onSubmit={handleSubmit(submit)}>
        {error && <Alert bsStyle="danger">{error}</Alert>}
        <Input type="email" placeholder="Email" required={true} {...email}/>
        <Input type="password" placeholder="Password" required={true} {...password}/>
        <ButtonInput type="submit" disabled={submitting} onClick={handleSubmit(submit)}>
          Log In
        </ButtonInput>
      </form>
    )
  }
}

export default reduxForm({
  form: 'loginForm',
  fields
})(LoginForm)
