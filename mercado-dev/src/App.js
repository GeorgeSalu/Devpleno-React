import React, {Component} from 'react';
import './App.css';
import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import Footer from './Footer'
import LinkCategoria from './LinkCategoria'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderHome />
        <div className="container">
          <div className="row">
            <AnuncioHome />
          </div>
          <h3>Categorias</h3>
          <LinkCategoria categoria={{ categoria: 'bicicleta', 'icon': 'fa-lightbulb-o' }} />

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
