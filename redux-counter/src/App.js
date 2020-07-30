import React, {Component} from 'react'
import Counter from './Counter'
import DisplayCounter from './DisplayCounter'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './reducer'
import logger from 'redux-logger'

let store = createStore(
  counterReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
)

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div>
          <Counter />
          <DisplayCounter />
        </div>
      </Provider>
    )
  }
}

export default App