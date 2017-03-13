import React from 'react'

export default (props) => {
  return (
    <footer className="main">
      <div className="container-fluid">
        <p>
          {new Date().getFullYear()}
          <a href="http://sparksolutions.co">Spark Solutions</a>
        </p>
      </div>
    </footer>
  )
}
