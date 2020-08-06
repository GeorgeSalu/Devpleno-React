import React, {Component} from 'react';
import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import Footer from './Footer'
import LinkCategoria from './LinkCategoria'
import base from './base'
import Home from './Home'

class App extends Component {


  render() {
    
    return (
      <div className="App">
        <HeaderHome />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
