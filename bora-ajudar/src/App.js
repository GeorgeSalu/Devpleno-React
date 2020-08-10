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
import Admin from './Admin'
import Login from './Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Header />
            <Route exact path='/' component={Home} />
            <Route path='/sobre' exact component={Sobre} />
            <Route path='/contato' exact component={Contato} />
            <Route path='/campanhas' exact component={Campanhas} />
            <Route path='/admin' exact component={Admin} />
            <Route path='/login' exact component={Login} />
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
