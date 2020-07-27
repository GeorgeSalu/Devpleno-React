import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import Hello from './Hello'

let container = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

