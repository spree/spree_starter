import React from 'react';

import message from '../message/message';

class DemoComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {message}
        {this.props.message}
      </div>
    )
  }
}

export default DemoComponent;
