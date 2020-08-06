import React, {Component} from 'react';
import Footer from './Footer'
import Home from './Home'

class App extends Component {
  render() {    
    return (
      <div className="App">
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
