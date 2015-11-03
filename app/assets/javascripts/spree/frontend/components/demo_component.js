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
        <p>
          <a href={Routes.spree_root_path()}>Link to home page</a>
        </p>
      </div>
    )
  }
}

export default DemoComponent;
