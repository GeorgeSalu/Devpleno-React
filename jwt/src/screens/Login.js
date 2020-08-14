import React,{Component} from 'react'

class Login extends Component {

  state = {
    form: {
      email: '',
      passwd: ''
    }
  }

  handleChange = fieldname => event =>{
    const form = {
      ...this.state.form
    }
    form[fieldname] = event.target.value
    this.setState({ form })
  }

  login = () => {
    console.log(this.state.form)
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type='text' value={this.state.form.email} onChange={this.handleChange('email')} />
        <input type='text' value={this.state.form.passwd} onChange={this.handleChange('passwd')} />
        <button onClick={this.login}>Logar</button>
      </div>
    )
  }
}

export default Login