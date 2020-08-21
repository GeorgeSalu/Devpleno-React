import React,{Component} from 'react'
import ActionCreators from '../../redux/actionCreators'
import {connect} from 'react-redux'
import {Table, Button} from 'semantic-ui-react'

import Duration from '../elements/Duration'
import Distance from '../elements/Distance'
import DateStr from '../elements/DataStr'
import { Link } from 'react-router-dom'

class Runs extends Component {

  componentDidMount() {
    this.props.load()
  }

  renderRun = (run) => {
    return (
      <Table.Row>
        <Table.Cell>
          { run.friendly_name }
        </Table.Cell>
        <Table.Cell>
          <Duration duration={run.duration} />  
        </Table.Cell>
        <Table.Cell>
          <Distance distance={ run.distance } metric={this.props.auth.user.unit} />
        </Table.Cell>
        <Table.Cell>
          <DateStr date={ run.created } timezone={this.props.auth.user.timezone} />
        </Table.Cell>
        <Table.Cell>
          <Button color='red' onClick={() => this.props.remove(run.id)}>Remover</Button>
        </Table.Cell>
      </Table.Row>
    )
  }

  render() {
    const run = {
      friendly_name: 'run de test',
      duration: 100,
      distance: 100,
      created: '2018-01-01 00:00:00'
    }
    return (
      <div>
        <h1>Runs</h1>
        <Button as={Link} to='/restrito/create-run'>created</Button>
        <Table>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Duração</Table.HeaderCell>
          <Table.HeaderCell>Distancia</Table.HeaderCell>
          <Table.HeaderCell>Data</Table.HeaderCell>
          <Table.HeaderCell>Ações</Table.HeaderCell>
          <Table.Body>
            { this.props.runs.data.map(this.renderRun) }
          </Table.Body>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    runs: state.runs,
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: () => dispatch(ActionCreators.getRunsRequest()),
    create: (run) => dispatch(ActionCreators.createRunRequest(run)),
    remove: id => dispatch(ActionCreators.removeRunRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Runs)