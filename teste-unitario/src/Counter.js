import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(old => old + 1)
  }

  return (
    <div>
      {counter}
      <button data-testid='inc' onClick={increment}>
        Inc.
      </button>
    </div>
  )
}

export default Counter