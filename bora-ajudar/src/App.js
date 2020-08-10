import React from 'react';
import Header from './Header'
import Home from './Home'
import Sobre from './Sobre'
import Contato from './Contato'
import Footer from './Footer'
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Router path='/sobre' exact component={Sobre} />
          <Router path='/contato' exact component={Contato} />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
