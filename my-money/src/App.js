import React, { useEffect, useState } from 'react';
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

function App() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
  }, [])

  if(loading) {
    return <p>Loading....</p>
  }

  return (
    <div className="App">
      <h1>MyMoney</h1>
      { JSON.stringify(data) }
    </div>
  );
}

export default App;
