import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

class App2 extends React.Component {
  contador = 1

  state = {
    contador: 1
  }

  increment = () => {
    this.setState({ contador: this.state.contador + 1 })
  }

  render() {
    return (
      <h1>
        Contador (app2) : {this.state.contador}
        <button onClick={this.increment}>Increment</button>
      </h1>
    )
  }
}

const App1 = () => {
  const [contador, setContador] = useState(1)
  
  const increment = () => {
    setContador(contador + 1)
  }
  
  return (
    <h1>
      Contador (app1) : {contador} 
      <button onClick={increment}>Increment</button>
    </h1>
  )
}

function App() {
  return (
    <div className="App">
      <App1 />
      <App2 />
    </div>
  );
}

export default App;
