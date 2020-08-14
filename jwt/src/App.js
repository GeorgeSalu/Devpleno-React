import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import store from './redux'
import {Provider} from 'react-redux'
import Header from './Header';
import { 
  Route, 
  BrowserRouter as Router 
} from 'react-router-dom'

import Home from './screens/Home'
import Admin from './screens/admin'
import Restrito from './screens/restrito'
import Login from './screens/Login'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <Route exact path='/' component={Home} />
              <Route path='/admin' component={Admin} />
              <Route path='/restrito' component={Restrito} />
              <Route path='/login' component={Login} />
              <Header />
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
