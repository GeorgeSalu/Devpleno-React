import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    let token = localStorage.getItem('token')
    if(!token) {
      const login = await axios.post('http://localhost:3001/users/login', {
        email: 'tuliofaria@devpleno.com',
        passwd: 'abc123'
      })
      token = login.data.token
      localStorage.setItem('token', token)
    } else {
      const decoded = jwtDecode(token)
      console.log(decoded)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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
    );
  }
}

export default App;
