import React,{Component} from 'react'
import ActionCreators from '../redux/actionCreators'
import {connect} from 'react-redux'
import { Button, Segment, Form} from 'semantic-ui-react'

class CreateAccount extends Component {

  state = {
    passwd: '',
    passwd2: '',
    name: '',
    email: '',
    error: ''
  }

  componentDidMount() {
    this.props.reset()
  }

  handleChange = fieldname => event => {
    this.setState({
      [fieldname]: event.target.value
    })
  }

  handleSave = () => {
    if(this.state.passwd !== this.state.passwd2) {
      this.setState({
        error: 'equal' 
      })
    } else if(this.state.passwd.length < 6) {
      this.setState({
        error: 'length'
      })
    } else {
      this.setState({
        error: ''
      })
      this.props.save({
        passwd: this.state.passwd,
        id: this.props.auth.user.id
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Criar conta</h1>
        {
          this.state.error === 'equal' && <Segment color='red'>A senha e sua confirmação devem ser iguais</Segment>
        }
        {
          this.state.error === 'length' && <Segment color='red'>A senha deve ter mas de 6 caracteres</Segment>
        }
        {
          this.props.auth.saved && <Segment color='green'>Senha alterada com sucesso</Segment>
        }
        {
          !this.props.auth.saved &&
          <Form>
            <input type='email' value={this.state.email} onChange={this.handleChange('email')} />
            <input type='text' value={this.state.name} onChange={this.handleChange('name')} />
            <input type='password' value={this.state.passwd} onChange={this.handleChange('passwd')} />
            <input type='password' value={this.state.passwd2} onChange={this.handleChange('passwd2')} />
            <Button onClick={this.handleSave}>Criar conta</Button>
          </Form>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    save: (user) => dispatch(ActionCreators.updateProfileRequest(user)),
    reset: () => dispatch(ActionCreators.updateProfileReset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)