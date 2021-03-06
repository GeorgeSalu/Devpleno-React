import React from 'react'
import {connect} from 'react-redux'
import ActionCreators from '../../../redux/actionCreators'
import {Link} from 'react-router-dom'
import {Menu, Dropdown, Image} from 'semantic-ui-react'

const Header = props => {
  return (
    <Menu>
      <Menu.Item ><Image src={'/logo.png'} size='small' />Corridas Online <b>Restrito</b></Menu.Item>
      <Menu.Item as={Link} to='/restrito'>Home</Menu.Item>
      <Menu.Item as={Link} to='/restrito/runs'>Corridas</Menu.Item>
      <Menu.Menu position='right'>
        <Dropdown item text={props.auth.user.name}>
          <Dropdown.Menu>
            {
              props.auth.user.role === 'admin' && <Dropdown.Item as={Link} to='/admin/home'>Modo: Admin</Dropdown.Item>
            }
            <Dropdown.Item as={Link} to='/restrito/my-account'>Minha conta</Dropdown.Item>
            <Dropdown.Item as={Link} to='/restrito/change-pass'>Alterar senha</Dropdown.Item>
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