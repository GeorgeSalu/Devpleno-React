import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index'
import Info from './info'
import axios from 'axios'

import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

import {put} from 'redux-saga/effects'
import {loadDataSuccess} from './actions'

function *ola() {
  console.log('hello from saga')
  const dados = yield axios.get('http://httpbin.org/ip')
  console.log(dados)
  yield put(loadDataSuccess(dados.data.ip))
}
sagaMiddleware.run(ola)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Info />
      </div>
    </Provider>
  );
}

export default App;
