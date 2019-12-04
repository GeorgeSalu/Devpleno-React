import React from 'react';

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

const Button = (props) => <button>{props.text}</button>

function App() {
  return (
    <div className="App">
      <MostrarVoltas voltas='15' />
      <Button text='+' />
      <Button text='-' />
      <MostarTempo tempo='01:35' />
      <Button text='Iniciar' />
      <Button text='Reiniciar' />
    </div>
  );
}

export default App;
