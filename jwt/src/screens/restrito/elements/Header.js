import React from 'react'
import {connect} from 'react-redux'
import ActionCreators from '../../../redux/actionCreators'

import {Link} from 'react-router-dom'
import {Menu, Dropdown} from 'semantic-ui-react'

const Header = props => {
  return (
    <Menu>
      <Menu.Item>Corridas Online <b>Admin</b></Menu.Item>
      <Menu.Item as={Link} to='/restrito'>Home</Menu.Item>
      <Menu.Item as={Link} to='/restrito/runs'>Corridas</Menu.Item>
      <Menu.Menu position='right'>
        <Dropdown item text={props.auth.user.name}>
          <Dropdown.Menu>
            <Dropdown.Item>Minha contsta</Dropdown.Item>
            <Dropdown.Item>Alterar senha</Dropdown.Item>
            <Dropdown.Item>sair</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signin: (email, passwd) => ActionCreators.signinRequest(email, passwd)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)