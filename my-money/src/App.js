import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios'

/*
axios
  .get('https://mymoney-7fd2e.firebaseio.com/')
  .then(res => {
    console.log(res.data)
  })

axios
  .post('https://mymoney-7fd2e.firebaseio.com/')
  .then(res => {
    console.log(res.data)
  })
*/

const url = 'https://mymoney-7fd2e.firebaseio.com/movimentacoes.json'

const reducer = (state, action) => {
  if(action.type === 'REQUEST') {
    return {
      ...state,
      loading: true
    }
  }
  return state
}

const useGet = url => {
  const [data, dispatch] = useReducer(reducer, {
    loading: true,
    data: {}
  })

  useEffect(() => {
    dispatch({ type: 'REQUEST' })
    axios
      .get(url)
      .then(res => {
        dispatch({ type: 'SUCCESS', data: res.data })
      })
  }, [])

  return data
}

function App() {

  const data = useGet(url)

  return (
    <div className="App">
      <h1>MyMoney</h1>
      { JSON.stringify(data) }
    </div>
  );
}

export default App;
