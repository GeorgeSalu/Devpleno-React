import React from 'react';
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers/index'
import Info from './infor'

const store = createStore(reducers)

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
