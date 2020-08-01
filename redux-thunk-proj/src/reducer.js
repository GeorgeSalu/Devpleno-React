import { combineReducers } from "redux"

const initial_state = {
  data: [],
  isFetching: false,
  error: false
}

export const ip = (state = initial_state, action) => {
  if(action.type === 'LOAD_DATA_REQUEST') {
    return {
      isFetching: true,
      data: [],
      error: false
    }
  } else if(action.type === 'LOAD_DATA_SUCCESS') {
    return {
      isFetching: false,
      data: action.data,
      error: false
    }
  } else if(action.type === 'LOAD_DATA_ERROR') {
    return {
      isFetching: false,
      data: action.data,
      error: true
    }
  }
  return state
}

export const ua = (state = initial_state, action) => {
  if(action.type === 'LOAD_UA_REQUEST') {
    return {
      isFetching: true,
      data: [],
      error: false
    }
  } else if(action.type === 'LOAD_UA_SUCCESS') {
    return {
      isFetching: false,
      data: action.data,
      error: false
    }
  } else if(action.type === 'LOAD_UA_ERROR') {
    return {
      isFetching: false,
      data: action.data,
      error: true
    }
  }
  return state
}

export default combineReducers({ ip, ua })