import React, { Component } from 'react'
import {auth} from './base'

class Login extends Component {
  constructor(props) {
    super(props)

    this.email = null
    this.passwd = null

    this.state = {
      isLoggedIn: false,
      error: false,
      isLogging: false
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    this.setState({ isLogging: true , error: false})
    auth.signInWithEmailAndPassword(this.email.value, this.passwd.value)
      .then((user) => {
        console.log('logged in', user)

      })
      .catch(error => {
        console.log('erro', error)
        this.setState({
          error: true,
          isLogging: false
        })
      })
  }

  render() {
    return (
      <div>
        <input type='email' ref={ref => this.email = ref} />
        <input type='passwd' ref={ref => this.passwd = ref}/>
        { this.state.error && <p>E-mail ou senha inválidos</p> }
        <button disabled={this.state.isLogging} onClick={this.handleLogin} >
          Entrar
        </button>
      </div>
    )
  }
}

export default Login