import React from 'react';
import Header from './Header'
import Home from './Home'
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
            <Home />
            <Footer />
        </div>
      </Router>
  );
}

export default App;
