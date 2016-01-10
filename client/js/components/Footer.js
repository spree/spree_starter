import React from 'react'

export default (props) => {
  return (
    <footer className="main">
      <div className="container-fluid">
        <p>
          &copy;
          {new Date().getFullYear()}
          &nbsp;
          <a href="http://sparksolutions.co">Spark Solutions</a>
        </p>
      </div>
    </footer>
  )
}
