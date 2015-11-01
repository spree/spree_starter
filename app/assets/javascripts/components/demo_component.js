import React, { Component } from 'react';
import message from '../message/message';
import AnotherComponent from './another_component';

class DemoComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>
          {message}
        </p>
        <p>
          {this.props.message}
        </p>
        <AnotherComponent />
      </div>
    )
  }
}

export default DemoComponent;
