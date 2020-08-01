import React from 'react'
import { connect } from 'react-redux'
import { loadData } from './actions'

export class Info extends React.Component {

  componentDidMount() {
    this.props.loadData()
  }

  render() {
    if(this.props.isFetching) {
      return <span>Loading....</span>
    }
    return <span>Info: {JSON.stringify(this.data)}</span>
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)