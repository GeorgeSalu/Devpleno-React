import React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'

describe('<Counter />', () => {
  it('mounts', () => {
    const props = {
      counter = 10,
      increment: () => 0,
      decrement: () => 0
    }
    const wrapper = shallow(<Counter {...props} />)
    expect(wrapper.length).toEqual(1)
  })
  it('calls increment', () => {
    const props = {
      counter = 10,
      increment: jest.fn(),
      decrement: jest.fn()
    }
    const wrapper = shallow(<Counter {...props} />) 
    wrapper.find('.increment').simulate('click')
    expect(props.increment.mock.calls.length).toEqual(1)
  })
})