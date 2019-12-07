import React, { useState } from 'react'
import axios from 'axios'

const NovoGenero = () => {
  const [name, setName] = useState('')
  const onChange = evt => {
    setName(evt.target.value)
  }
  const save = () => {
    axios.post('/api/genres', {
      name,

    })
    .then(res => {
      console.log(res)
    })
  }
  return (
    <div className='container'>
      <h1>Novo Genero</h1>
      <form>
        <div className='form-group'>
          <label for='name'>Nome</label>
          <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome do genero'></input>
        </div>
        <button type='button' onClick={save} className='btn btn-primary'>Salvar Genero</button>
      </form>
    </div>
  )
}

export default NovoGenero
