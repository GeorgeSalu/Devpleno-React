import React, { useState } from 'react';

const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue)
  const increment = () => {
    setCounter(counter+1)
  }
  return [counter, increment]
}

function App() {
  const [counter, increment] = useCounter(0)
  const [counter2, increment2] = useCounter(10)

  return (
    <div className="App">
      <button onClick={increment}>incrementar {counter}</button>
      <button onClick={increment2}>incrementar {counter2}</button>
    </div>
  );
}

export default App;
