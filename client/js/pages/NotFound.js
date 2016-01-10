import React from 'react'
import UniversalLink from 'components/UniversalLink'

export default () => {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        <UniversalLink to="/">
          Go back to home page
        </UniversalLink>
      </p>
    </div>
  )
}
