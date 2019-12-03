import React, { useState } from 'react';
import './App.css';

function App() {
  const [i, setI] = useState(1)

  const increment = () => {
    setI(i+1)
  }

  return (
    <div className="App">
      <h1>Hello DevPleno {i}</h1>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
