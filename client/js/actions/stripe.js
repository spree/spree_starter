import {
  CREATE_STRIPE_TOKEN_REQUEST, CREATE_STRIPE_TOKEN_SUCCESS,
  CREATE_STRIPE_TOKEN_FAILURE
} from 'constants'
import * as api from 'libs/apiHelper'
import { addAlert } from 'actions/alert'
import { getDefaultPaymentMethod } from 'reducers/defaultPaymentMethod'
import Big from 'big.js'
const url = 'https://api.stripe.com/v1/tokens'

function createStripeTokenRequest() {
  return {
    type: CREATE_STRIPE_TOKEN_REQUEST
  }
}

function createStripeTokenSuccess() {
  return {
    type: CREATE_STRIPE_TOKEN_SUCCESS
  }
}

function createStripeTokenFailure(error) {
  return {
    type: CREATE_STRIPE_TOKEN_FAILURE,
    error
  }
}

export function createStripeToken(values = {}) {
  return (dispatch, getState) => {
    const { expiry, name, number, verification_value } = values
    const [expMonth, expYear] = (expiry || '').split('/')
    const cart = getState().cart
    const { currency, total } = cart
    const { key } = getDefaultPaymentMethod(getState())

    const body = {
      currency,
      key,
      amount: new Big(total).times(100).toString(),
      card: {
        name,
        number,
        cvc: verification_value,
        exp_month: expMonth,
        exp_year: expYear
      }
    }

    dispatch(createStripeTokenRequest())

    return fetch(url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: jQuery.param(body)
      }
    )
      .then(api.checkStatus)
      .then(api.parseJSON)
      .then(response => {
        dispatch(createStripeTokenSuccess())
        return Promise.resolve(response)
      })
      .catch(error => {
        const stripeError = error.error.error
        dispatch(createStripeTokenFailure(stripeError))
        dispatch(addAlert(stripeError))
      })
  }
}
