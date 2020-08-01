import React from 'react';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {reducer} from './reducer'
import Info  from './Info'

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
)

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
