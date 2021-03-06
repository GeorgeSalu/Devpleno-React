import React from 'react'
import {connect} from 'react-redux'
import ActionCreators from '../../../redux/actionCreators'
import {Link} from 'react-router-dom'
import {Menu, Dropdown, Image} from 'semantic-ui-react'

const Header = props => {
  return (
    <Menu>
      <Menu.Item ><Image src={'/logo.png'} size='small' />Corridas Online <b>Admin</b></Menu.Item>
      <Menu.Item as={Link} to='/'>Home</Menu.Item>
      <Menu.Item as={Link} to='/admin/users'>Usuarios</Menu.Item>
      <Menu.Item as={Link} to='/admin/runs'>Corridas</Menu.Item>
      <Menu.Menu position='right'>
        <Dropdown item text={props.auth.user.name}>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/restrito'>Modo: usuario</Dropdown.Item>
            <Dropdown.Item>Minha conta</Dropdown.Item>
            <Dropdown.Item>Alterar senha</Dropdown.Item>
            <Dropdown.Item onClick={props.logout}>sair</Dropdown.Item>
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
    signin: (email, passwd) => ActionCreators.signinRequest(email, passwd),
    logout: () => dispatch(ActionCreators.destroyAuthRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)