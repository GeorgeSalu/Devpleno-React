import React from 'react'
import { connect } from 'react-redux'

export class Info extends React.Component {
  render() {
    return <span>Info</span>
  }
}

export default connect()(Info)