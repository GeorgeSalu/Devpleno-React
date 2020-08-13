import { createActions } from 'reduxsauce'

export const {
  Types,
  Creators
} = ({
  signinRequest: ['email', 'passwd'],
  signinSuccess: ['user'],
  signinFailure: ['error'],

  authRequest: null,
  authSuccess: ['user'],
  authFailure: null
})

export default Creators