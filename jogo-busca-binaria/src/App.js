import React, { useState } from 'react';

import './App.css';

// elemento
// JSX
const elemento = <div><h2>Ola DevPleno</h2></div>
const elemento2 = React.createElement('div', null, React.createElement('h2', null, 'Ola DevPleno'))

// componete: functional component
function App() {
  const [i, setI] = useState(1)

  const increment = () => {
    setI(i+1)
  }

  return (
    <div className="App">
      <h1>Hello DevPleno {i}</h1>
      <button onClick={increment}>Incrementar</button>
      <h2>Elementos</h2>
      {elemento}
      {elemento2}
    </div>
  );
}

export default App;
