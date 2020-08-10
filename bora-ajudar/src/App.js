import React, {Component} from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Sobre from './Sobre'
import Contato from './Contato'
import Campanhas from './Campanhas'
import base from './base';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 1
    }
  }

  componentDidMount() {
    base.syncState('contador', {
      context: this,
      state: 'contador',
      asArray: false
    })
  }

  render() {
    return (
      <Router>
        <div>
            <Header />
            <di><h1>Contador: {this.state.contador}</h1></di>
            <Route exact path='/' component={Home} />
            <Route path='/sobre' exact component={Sobre} />
            <Route path='/contato' exact component={Contato} />
            <Route path='/campanhas' exact component={Campanhas} />
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
