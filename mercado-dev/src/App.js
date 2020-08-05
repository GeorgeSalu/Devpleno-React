import React, {Component} from 'react';
import './App.css';
import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import Footer from './Footer'
import LinkCategoria from './LinkCategoria'
import base from './base'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categorias: []
    }
    base.bindToState('categorias', {
      context: this,
      state: 'categorias'
    })
  }

  render() {
    let index = 0
    return (
      <div className="App">
        <HeaderHome />
        <div className="container">
          <div className="row">
            <AnuncioHome />
          </div>
          <h3>Categorias</h3>
          <div className="row">
            { this.state.categorias.map( (cat, indice) => {
              return [
                <LinkCategoria categoria={ cat } key={indice} />,
                ++index%4 === 0 && <div key={'c'+indice} className="w-100"></div>
              ]
            } ) }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
