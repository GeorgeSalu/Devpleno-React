import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      items: [1,2,3]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ReactCSSTransitionGroup transitionName="anim">
            {this.state.items.map((value) => <div key={value}>{value}</div>)}
          </ReactCSSTransitionGroup>
          <button onClick={
            () => this.setState({ items: [...this.state.items, new Date().getTime()] })}>
              add
          </button>
        </header>
      </div>
    );
  }
}

export default App;
