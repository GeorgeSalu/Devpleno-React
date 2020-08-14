import React,{Component} from 'react'
import ActionCreators from '../../redux/actionCreators'
import {connect} from 'react-redux'

class Runs extends Component {

  componentDidMount() {
    this.props.load()
  }

  render() {
    return <h1>Runs</h1>
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