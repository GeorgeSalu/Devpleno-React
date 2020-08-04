import React, { Component } from 'react'
import { loadDataRequest } from './actions'
import { connect } from 'react-redux'

class Info extends Component {
  render() {
    return (
      <p>
        Info : <button onClick={() => this.props.loadData()}>Load</button>
      </p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.ip.isFetching,
    data: state.ip.data,
    error: state.ip.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadDataRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)