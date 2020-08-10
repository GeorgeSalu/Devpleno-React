import React from 'react';
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

function App() {
  return (
    <Router>
      <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/sobre' exact component={Sobre} />
          <Route path='/contato' exact component={Contato} />
          <Route path='/campanhas' exact component={Campanhas} />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
