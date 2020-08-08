import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// functional stateless component
const Component1 = (props) => {
  return <h1>{props.name}</h1>
}

// stateful
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <Component1 name='George' />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
