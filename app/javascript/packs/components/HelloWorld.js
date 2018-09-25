import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { nameSubmit } from 'actions/index'

import '../styles/hello-world'

class HelloWorld extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.onClickSubmit = this.onClickSubmit.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  onClickSubmit(e) {
    e.preventDefault()

    this.props.nameSubmit(this.state.name)
  }

  render() {
    return (
      <React.Fragment>
        <div className="hello-world-text">
          <div>I'm sample react/redux component</div>
          <div>Greetings: {this.props.name}</div>
        </div>
        <form onSubmit={this.onClickSubmit} className="hello-world-form">
          <input
            type="text"
            className="hello-world-input"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <button onClick={this.onClickSubmit} className="hello-world-button">
            save name
          </button>
        </form>
      </React.Fragment>
    )
  }
}

HelloWorld.propTypes = {
  name: PropTypes.string,
  nameSubmit: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  name: state.sampleReducer.name
})

const mapDispatchToProps = {
  nameSubmit
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorld)
