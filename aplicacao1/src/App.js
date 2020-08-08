import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'

const Home = props => <h1>Seja bem vindo</h1>
const Sobre = props => <h1>Sobre a instituição</h1>

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
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
              {this.state.counter}
            </p>
            <Link to='/'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
            <Counter counter={this.state.counter} />
            <Route path='/' exact component={Home} />
            <Route path='/sobre' exact component={Sobre} />
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
      </Router>
    );
  }
}

export default App;
