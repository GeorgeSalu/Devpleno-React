import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Counter from  './Counter'

let contaner = null
beforeEach(() => {
  contaner = document.createElement('div')
  document.body.appendChild(contaner)
})

afterEach(() => {
  unmountComponentAtNode(contaner)
  contaner.remove()
  contaner = null
})

it('counts when inc clicked', () => {

  act(() => {
    render(<Counter />, contaner)
  })
  expect(contaner.textContent).toBe('0Inc.')

  const button = document.querySelector('[data-testid=inc]')

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })
  expect(contaner.textContent).toBe('1Inc.')
})