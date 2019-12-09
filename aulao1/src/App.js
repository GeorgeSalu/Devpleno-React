import React, { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(10)

  useEffect(() => {
    console.log('useEffect')
  }, [counter])

  return (
    <div className="App">
      <button onClick={() => setCounter(counter+1)}>incrementar {counter}</button>
      <button onClick={() => setCounter2(counter2+1)}>incrementar {counter2}</button>
    </div>
  );
}

export default App;
