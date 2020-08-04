const initial_state = {
  data: [],
  isFetching: false,
  error: false
}

const ua = (state = initial_state, action) => {
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