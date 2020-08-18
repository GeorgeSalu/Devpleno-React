import React,{Component} from 'react'
import ActionCreators from '../../redux/actionCreators'
import {connect} from 'react-redux'
import {Table, Button} from 'semantic-ui-react'

const Duration = props => {
  const { duration } = props
  const pad = num => num.toString().padStart(2, '0')
  let durationStr = ''
  const hour = Math.floor(duration/360)
  if(hour > 0) {
    durationStr = hour + ':'
  }
  const minutes = Math.floor((duration - (hour*360))/60)
  durationStr+=minutes.toString().padStart(2, '0')
  const seconds = (duration - hour*360 - minutes*60)
  durationStr += ':'+pad(seconds)
  return <span>{durationStr}</span>
}

const Distance = ({ distance, metric }) => {
  let distanceStr = ''

  if(metric === 'metric') {
    distanceStr = distance + 'km'
  } else {
    const distanceMi = distance * 0.6213
    distanceStr = distanceMi.toFixed(2) + 'mi'
  }
  return <span>{distanceStr}</span>
}

class Runs extends Component {

  componentDidMount() {
    this.props.load()
  }

  renderRun(run) {
    return (
      <Table.Row>
        <Table.Cell>
          { run.friendly_name }
        </Table.Cell>
        <Table.Cell>
          <Duration duration={run.duration} />  
        </Table.Cell>
        <Table.Cell>
          <Distance distance={ run.distance } metric={'metric'} />
        </Table.Cell>
        <Table.Cell>
          { run.created }
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
        <Button onClick={() => this.props.create(run)}>created</Button>
        <Table>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Duração</Table.HeaderCell>
          <Table.HeaderCell>Distancia</Table.HeaderCell>
          <Table.HeaderCell>Data</Table.HeaderCell>

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
    runs: state.runs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: () => dispatch(ActionCreators.getRunsRequest()),
    create: (run) => dispatch(ActionCreators.createRunRequest(run))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Runs)