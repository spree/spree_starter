import { React, ReactDOM, expect, TestUtils } from 'libs/testHelper';

import Dummy from './Dummy';

const {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  scryRenderedComponentsWithType,
} = TestUtils;

describe('Dummy', () => {

  it('renders a Dummy', () => {
    const component = renderIntoDocument(
      <Dummy
        name='John Doe'
      />
    )
    const domComponent = findRenderedDOMComponentWithTag(component, 'div');
    const text = ReactDOM.findDOMNode(domComponent)
    expect(text.textContent).to.include('John Doe');
  });

});
