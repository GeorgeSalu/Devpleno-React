import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderHome />
        <AnuncioHome />
      </div>
    );
  }
}

export default App;
