import React, { useState } from 'react'

const NovoGenero = () => {
  return (
    <div className='container'>
      <h1>Novo Genero</h1>
      <form>
        <div className='form-group'>
          <label for='name'>Nome</label>
          <input type='text' className='form-control' id='name' placeholder='Nome do genero'></input>
        </div>
        <button type='button' className='btn btn-primary'>Salvar Genero</button>
      </form>
    </div>
  )
}

export default NovoGenero
