import React from 'react';

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {reducer} from './reducer'

const store = createStore(
  reducer
)

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      react
    </div>
    </Provider>
  );
}

export default App;
