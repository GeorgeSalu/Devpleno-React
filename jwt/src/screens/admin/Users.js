import React,{Component} from 'react'
import ActionCreators from '../../redux/actionCreators'
import {connect} from 'react-redux'
import {Table, Button} from 'semantic-ui-react'

class Users extends Component {

  componentDidMount() {
    this.props.load()
  }

  renderUser = (user) => {
    return (
      <Table.Row key={user.id}>
        <Table.Cell>
          { user.name }
        </Table.Cell>
        <Table.Cell>
          { user.email }  
        </Table.Cell>
        <Table.Cell>
          { user.role }
        </Table.Cell>
        <Table.Cell>
          <Button color='red' onClick={() => this.props.remove(user.id)}>Remover</Button>
        </Table.Cell>
      </Table.Row>
    )
  }

  render() {
    return (
      <div>
        <h1>Usuarios</h1>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nome</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Tipo</Table.HeaderCell>
              <Table.HeaderCell>Ações</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { this.props.users.data.map(this.renderUser) }
          </Table.Body>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    runs: state.runs,
    auth: state.auth,
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: () => dispatch(ActionCreators.getUsersRequest()),
    create: (run) => dispatch(ActionCreators.createRunRequest(run)),
    remove: id => dispatch(ActionCreators.removeUserRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)