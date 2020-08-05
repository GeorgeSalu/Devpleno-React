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
    this.remove = this.remove.bind(this)
  }

  remove(index) {
    let newItem = [...this.state.items]
    newItem.splice(index, 1)
    this.setState({items: newItem})
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
          <ReactCSSTransitionGroup transitionName="anim" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {this.state.items.map((value, index) => 
              <div key={value}>
                {value}
                <button onClick={() => this.remove(index)}>x</button>
              </div>
            )}
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
