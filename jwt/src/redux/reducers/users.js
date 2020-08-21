import { createReducer } from 'reduxsauce'
import {Types} from '../actionCreators'

export const INITIAL_STATE = {
  isLoading: false,
  data: [],
  isSaving: false
}

export const getUsersRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: true
  }
}

export const getUsersSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
    data: action.users
  }
}

export const getUsersFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false
  }
}

export const HANDLERS = {
  [Types.GET_USERS_REQUEST]: getUsersRequest,
  [Types.GET_USERS_SUCCESS]: getUsersSuccess,
  [Types.GET_USERS_FAILURE]: getUsersFailure

}

export default createReducer(INITIAL_STATE, HANDLERS)