export const loadDataRequest = () => {
  return {
    type: 'LOAD_DATA_REQUEST'
  }
}

export const loadDataSuccess = (data) => {
  return {
    type: 'LOAD_DATA_SUCCESS',
    data
  }
}