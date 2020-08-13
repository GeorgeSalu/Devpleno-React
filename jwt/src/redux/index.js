import {
  createStore,
  applyMiddleware
} from 'redux'

import crateSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import reducers from './reducers'

const sagaMiddleware = crateSagaMiddleware()
export default createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(sagas)