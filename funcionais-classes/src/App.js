import React from 'react';
import logo from './logo.svg';
import './App.css';

class App2 extends React.Component {
  render() {
    return (
      <h1>App2</h1>
    )
  }
}

const App1 = () => {
  return <h1>Contador</h1>
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
