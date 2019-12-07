import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Generos = () => {
  const [data, setData] = useState([])
    
  useEffect(() => {
    axios
      .get('/api/genres')
      .then(res => {
        setData(res.data.data)
      })
  }, [])

  const rederizaLinha = record => {
    return (
      <tr key={record.id}>
        <th>{record.id}</th>
        <td>{record.name}</td>
        <td><button>+</button></td>
      </tr>
    )
  }

  return (
    <div>
      <h1>Generos</h1>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Nome</th>
            <th scope='col'>Acoes</th>
          </tr>
        </thead>
        <tbody>
          {data.map(rederizaLinha)}
        </tbody>
      </table>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  )
}

export default Generos