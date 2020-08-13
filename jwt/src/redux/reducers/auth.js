import { createReducer } from 'reduxsauce'
import {Types} from '../actionCreators'
import { act } from 'react-dom/test-utils'

export const INITIAL_STATE = {
  isAuthing: false,
  isAuth: false,
  isSigningin: false,
  user: {},
  error: false,
  errorMessage: ''
}

export const signinRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningin: true,
    error: false,
    errorMessage: ''
  }
}

export const signinSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningin: false,
    isAuth: true,
    user: action.user
  }
}

export const signinFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningin: false,
    error: true,
    errorMessage: action.error
  }
}