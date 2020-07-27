import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      {counter}
      <button data-testid='inc' onClick={() => setCounter(counter+1)}>Inc.</button>
    </div>
  )
}

export default Counter