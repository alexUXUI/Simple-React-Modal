import React from 'react'
import Modal from '../modal.component'
import { mount } from 'enzyme'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('Modal Component testing Suite', () => {

  let MODAL
  let ID = 100

  beforeEach(() => {
    MODAL = mount(
      <Modal 
        id={ID}
        mounted={() => console.log('Component lifecycle hook: mounted')}
        updated={() => console.log('Component lifecycle hook: updated')}
        unmounted={() => console.log('Component lifecycle hook: unmounted')}
      />
    )
  })

  it('It has the right props an open button', () => {
    expect(MODAL.props().id).toBe(100)
    expect(MODAL.props().mounted).toBeDefined()
    expect(MODAL.props().updated).toBeDefined()
    expect(MODAL.props().unmounted).toBeDefined()
  })
})

