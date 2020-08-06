import React, {Component} from 'react';
import HeaderHome from './HeaderHome'
import Footer from './Footer'
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
