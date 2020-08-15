import React,{Component} from 'react'
import ActionCreators from '../../redux/actionCreators'
import {connect} from 'react-redux'

class Runs extends Component {

  componentDidMount() {
    this.props.load()
  }

  renderRun(run) {
    return (
      <tr>
        <td>
          { run.friendly_name }
        </td>
        <td>
          { run.duration }
        </td>
        <td>
          { run.distance }
        </td>
        <td>
          { run.created }
        </td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <h1>Runs</h1>
        <table>
          { this.props.runs.data.map(this.renderRun) }
        </table>
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
    load: () => dispatch(ActionCreators.getRunsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Runs)