import React,{Component} from 'react'
import ActionCreators from '../../redux/actionCreators'
import {connect} from 'react-redux'
import { Button, Segment, Form} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class EditUser extends Component {

  state = {
    name: '',
    email: '',
    role: '',
    error: ''
  }

  componentDidMount() {
    this.props.reset()
    this.props.load(this.props.match.params.id)
  }

  static getDerivedStateFromProps(newProps, prevState) {
    if(newProps.users && newProps.users.user) {
      const user = {}
      const u = newProps.users.user
      if(u.name !== prevState.name) {
        user.name = newProps.users.user.name
      }
      if(u.email !== prevState.email) {
        user.email = newProps.users.user.email
      }
      if(u.role !== prevState.role) {
        user.role = newProps.users.user.role
      }
      return user
    }
    return null
  }

  handleChange = fieldname => event => {
    this.setState({
      [fieldname]: event.target.value
    })
  }

  handleSave = () => {
    this.props.save({
      id: this.props.match.params.id,
      name: this.state.name,
      email: this.state.email
    })
  }

  render() {
    return (
      <div>
        <h1>Criar corrida</h1>
        {
          this.props.users.saved && <Segment color='green'>Corrida criada com sucesso</Segment>
        }
        {
          !this.props.users.saved &&
          <Form>
            <Form.Field>
              <label>Nome</label>
              <input type='text' value={this.state.name} onChange={this.handleChange('name')} />
            </Form.Field>
            <Form.Field>
              <label>E-mail</label>
              <input type='email' value={this.state.email} onChange={this.handleChange('email')} />
            </Form.Field>
            <div>
              <Button onClick={this.handleSave}>Salvar usuario</Button>
            </div>
          </Form>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    save: (user) => dispatch(ActionCreators.updateUserRequest(user)),
    reset: () => dispatch(ActionCreators.updateUserReset()),
    load: id => dispatch(ActionCreators.getUserRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)