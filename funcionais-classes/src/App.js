import React from 'react';
import logo from './logo.svg';
import './App.css';

class App2 extends React.Component {
  contador = 1

  increment = () => {
    this.contador = this.contador + 1
  }

  render() {
    return (
      <h1>
        Contador (app2) : {this.contador}
        <button onClick={this.increment}>Increment</button>
      </h1>
    )
  }
}

const App1 = () => {
  let contador = 1
  
  const increment = () => {
    contador = contador + 1
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
