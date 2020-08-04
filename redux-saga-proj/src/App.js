import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index'
import Info from './info'
import axios from 'axios'
import indexSaga from './sagas/index'


import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)



sagaMiddleware.run(indexSaga)

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
