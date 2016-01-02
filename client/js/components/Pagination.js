import React from 'react'
import UniversalLink from 'components/UniversalLink'

function createPath(page) {
  return '/products?page=' + page.toString()
}

export default (props) => {
  return (
    <ul className='pagination'>
      <li>
        <UniversalLink to={createPath(1)}>1</UniversalLink>
      </li>
      <li>
        <UniversalLink to={createPath(2)}>2</UniversalLink>
      </li>
    </ul>
  )
}
