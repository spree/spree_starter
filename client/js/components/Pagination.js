import React from 'react'
import { Pagination } from 'react-bootstrap'
import { routerActions } from 'react-router-redux'

export default (props) => {
  const { location, history, pagination, dispatch } = props

  const handleSelect = (event, pageNumber) => {
    const newLocation = location
    newLocation.query.page = pageNumber.eventKey.toString()
    const newPath = history.createPath({
      pathname: newLocation.pathname,
      query: newLocation.query
    })
    dispatch(routerActions.push(newPath))
  }

  if (!pagination || !pagination.totalPages || parseInt(pagination.totalPages) === 1) {
    return <div />
  }

  return (
    <div>
      <Pagination
        prev={true}
        next={true}
        first={true}
        last={true}
        ellipsis={true}
        items={parseInt(pagination.totalPages)}
        maxButtons={5}
        activePage={parseInt(location.query.page) || 1}
        onSelect={handleSelect}
      />
    </div>
  )
}
