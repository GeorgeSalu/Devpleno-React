import reducer from './reducer'


test('reducer increment', () => {
  const initialState = {
    count: 0
  }
  const action = { type: 'INCREMENT', value: 10 }
  const state = reducer(initialState, action)
  expect(state).toEqual({ count: 10 })
})