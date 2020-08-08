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
    <div>
      <Router>
        <Header />
        <Route exact path='/' component={Home} />
        <Home />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
