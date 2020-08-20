import React,{Component} from 'react'
import ActionCreators from '../../redux/actionCreators'
import {connect} from 'react-redux'
import { Button, Segment, Form} from 'semantic-ui-react'

import InputMoment from 'input-moment'

class CreateRun extends Component {

  state = {
    friendly_name: '',
      duration: 0,
      distance: 0,
      created: new Date(),
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
    const distance = this.state.distance
    this.props.create({
      friendly_name: this.state.friendly_name,
      duration: this.state.duration,
      distance: this.props.auth.user.unit === 'metric' ? distance : distance * 1.60934,
      created: this.state.created
    })
    
  }

  render() {
    return (
      <div>
        <h1>Criar corrida</h1>
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
            <Form.Field>
              <label>Nome</label>
              <input type='text' value={this.state.friendly_name} onChange={this.handleChange('friendly_name')} />
            </Form.Field>
            <Form.Field>
              <label>Duracao</label>
              <input type='number' value={this.state.duration} onChange={this.handleChange('duration')} />
            </Form.Field>
            <Form.Field>
              <label>Distancia ({this.props.auth.user.unit === 'metric' ? 'km' : 'mi'})</label>
              <input type='number' value={this.state.distance} onChange={this.handleChange('distance')} />
            </Form.Field>
            <Form.Field>
              <label>criacao</label>
              <input type='text' value={this.state.created} onChange={this.handleChange('created')} />
            </Form.Field>
            <Button onClick={this.handleSave}>criar corrida</Button>
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
    create: (run) => dispatch(ActionCreators.createRunRequest(run)),
    reset: () => dispatch(ActionCreators.updateProfileReset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRun)