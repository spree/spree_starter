import { React, ReactDOM, expect, TestUtils } from '../test/libs/testHelper'

import Dummy from '../js/components/Dummy'

const {
  renderIntoDocument,
  findRenderedDOMComponentWithTag
} = TestUtils

describe('Dummy', () => {

  it('renders a Dummy', () => {
    const component = renderIntoDocument(
      <Dummy
        name="John Doe"
      />
    )
    const domComponent = findRenderedDOMComponentWithTag(component, 'div')
    const text = ReactDOM.findDOMNode(domComponent)
    expect(text.textContent).to.include('John Doe')
  })

})
