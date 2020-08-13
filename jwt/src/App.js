import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import './App.css';

import store from './redux'
import {Provider} from 'react-redux'
import Header from './Header';
import { 
  Route, 
  BrowserRouter as Router 
} from 'react-router-dom'

const Home = props => <h1>Home</h1>
const Admin = props => <h1>Admin</h1>
const Restrito = props => <h1>Restrito</h1>
const Login = props => <h1>Login</h1>

class App extends Component {

  async componentDidMount() {
    let token = localStorage.getItem('token')
    if(!token) {
      const login = await axios.post('http://localhost:3001/users/login', {
        email: 'tuliofaria@devpleno.com',
        passwd: 'abc123'
      })
      token = login.data.token
      localStorage.setItem('token', token)
    } 
    const decoded = jwtDecode(token)
    console.log(decoded)
  
    const user = await axios.get('http://localhost:3001/users/me', {
      headers: {
        Authorization: 'Bearer '+token
      }
    })
    console.log(user)
  }

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
