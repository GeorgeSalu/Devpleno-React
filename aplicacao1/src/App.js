import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


// stateful
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }

    setInterval(() => {
      this.setState({ counter: this.state.counter+1 })
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            {this.state.counter}
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
