import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { sampleSubmit } from 'actions/index'

import styles from '../styles'

class HelloWorld extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.onClickSubmit = this.onClickSubmit.bind(this)
  }

  handleInputChange (event) {
    this.setState({
      name: event.target.value
    })
  }

  onClickSubmit (e) {
    e.preventDefault()

    this.props.sampleSubmit(this.state.name)
  }

  render () {
    return (
      <React.Fragment>
        <div className={styles.container}>
          Greeting: {this.props.name}
        </div>
        <input type='text'
               value={this.state.name}
               onChange={this.handleInputChange}
        />
        <button onClick={this.onClickSubmit}>
          save name
        </button>
      </React.Fragment>
    )
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
}

const mapStateToProps = state => ({
  name: state.sampleReducer.name
})

const mapDispatchToProps = {
  sampleSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld)
