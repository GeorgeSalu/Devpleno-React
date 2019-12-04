import React, { useState } from 'react';

const MostrarVoltas = (props) => {
  return (
    <p>
      {props.voltas} <br/>
      Voltas
    </p>
  )
}

const MostarTempo = (props) => {
  return (
    <p>
      {props.tempo}<br />
      Tempo medio por volta
    </p>
  )
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

function App() {

  const [numVoltas, setNumVoltas] = useState(14)
  const [tempo, setTempo] = useState(0)

  const increment = () => {
    setNumVoltas(numVoltas+1)
  }

  const decrement = () => {
    setNumVoltas(numVoltas-1)
  }

  return (
    <div className="App">
      <MostrarVoltas voltas={numVoltas} />
      <Button text='+' onClick={increment}/>
      <Button text='-' onClick={decrement}/>
      <MostarTempo tempo={tempo} />
      <Button text='Iniciar' />
      <Button text='Reiniciar' />
    </div>
  );
}

export default App;
