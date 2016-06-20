require('isomorphic-fetch')

export function checkStatus(response) {
  if (response.ok) {
    return response
  }

  if (response.body) {
    return response.json().then(err => {
      const error = new Error(response.statusText)
      error.error = err
      error.error.error = err.errors || err.error
      error.response = response

      return Promise.reject(error)
    })
  }

  return Promise.reject(response)
}

export function parseJSON(response) {
  return response.json()
}
