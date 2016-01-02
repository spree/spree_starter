import React from 'react'
import HeaderContainer from 'containers/HeaderContainer'
import Footer from 'components/Footer'

export default (props) => {
  return (
    <div>
      <HeaderContainer />
      <main id="page">
        <div className="container-fluid">
          {props.children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
