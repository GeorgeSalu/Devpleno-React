import React, {Component} from 'react';
import './App.css';
import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderHome />
        <div className="container">
          <AnuncioHome />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
