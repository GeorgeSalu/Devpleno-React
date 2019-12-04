import React, { useState, useEffect } from 'react';

const MostrarVoltas = (props) => {
  return (
    <p>
      {props.voltas} <br/>
      Voltas
    </p>
  )
}

const MostarTempo = (props) => {
  const tempo = props.tempo
  const minutos = Math.round(tempo / 60)
  const segundos = tempo % 60
  return (
    <p>
      {`${minutos}:${segundos}`}<br />
      Tempo medio por volta
    </p>
  )
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

function App() {

  const [numVoltas, setNumVoltas] = useState(14)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    let timer = null
    if(running ) {
      timer = setInterval(() => {
        setTempo(old => old+1)
      }, 1000)
    }
    return () => {
      if(timer) { // truthy valor que é convertido para verdadeiro
        clearInterval(timer)
      }
    }
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
  }

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
      <Button text='Iniciar' onClick={toggleRunning} />
      <Button text='Reiniciar' />
    </div>
  );
}

export default App;
