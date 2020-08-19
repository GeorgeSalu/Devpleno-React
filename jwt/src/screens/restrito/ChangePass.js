import React,{Component} from 'react'
import ActionCreators from '../../redux/actionCreators'
import {connect} from 'react-redux'
import { Button} from 'semantic-ui-react'

class ChangePass extends Component {

  state = {
    passwd: '',
    passwd2: ''
  }

  handleChange = fieldname => event => {
    this.setState({
      [fieldname]: event.target.value
    })
  }

  handleSave = () => {
    this.props.save({
      passwd: this.state.passwd,
      id: this.props.auth.user.id
    })
  }

  render() {
    
    return (
      <div>
        <h1>Alterar Senha</h1>
        <input type='password' value={this.state.passwd} onChange={this.handleChange('passwd')} />
        <input type='password' value={this.state.passwd2} onChange={this.handleChange('passwd2')} />

        <Button onClick={this.handleSave}>Alterar Senha</Button>
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
    save: (user) => dispatch(ActionCreators.updateProfileRequest(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePass)