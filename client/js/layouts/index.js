import React from 'react'
import HeaderContainer from 'containers/HeaderContainer'
import Footer from 'components/Footer'
import Flashes from 'containers/Flashes'

export default (props) => {
  return (
    <div>
      <HeaderContainer />
      <Flashes fixed={true}/>
      <main id="page">
        <div className="container-fluid">
          {props.children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
