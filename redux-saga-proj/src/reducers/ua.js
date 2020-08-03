const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: false
}

const ua = (state = INITIAL_STATE, action) => {
  if(action.type === 'LOAD_DATA_REQUEST') {
    return {
      isFetching: true,
      data: [],
      error: false
    }
  }
  return state
}

export default ua