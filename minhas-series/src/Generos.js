import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Generos = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('/api/genres')
      .then(res => {
        setData(res.data.data)
      })
  }, [])

  const deleteGenero = id => {
    axios.delete('/api/genres/'+id)
      .then(res => {
        const filtrado = data.filter(item => item.id !== id)
        setData(filtrado)
      })
  }

  const rederizaLinha = record => {
    return (
      <tr key={record.id}>
        <th>{record.id}</th>
        <td>{record.name}</td>
        <td>
          <button onClick={() => deleteGenero(record.id)} className='btn btn-danger'>remover</button>
          <Link to={'/generos/' + record.id} className='btn btn-info'>Editar</Link>
        </td>

      </tr>
    )
  }

  if(data.length === 0) {
    return (
      <div className='container'>
        <h1>Generos</h1>
        <Link to='/generos/novo' className='btn btn-primary'>Novo Genero</Link>
        <div className='alert alert-warning' role='alert'>
          Voce nao possui generos criados.
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <h1>Generos</h1>
      <Link to='/generos/novo' className='btn btn-primary'>Novo Genero</Link>
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
    </div>
  )
}

export default Generos
