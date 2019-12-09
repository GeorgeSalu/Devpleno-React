import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <button onClick={() => setCounter(counter+1)}>incrementar {counter}</button>
    </div>
  );
}

export default App;
