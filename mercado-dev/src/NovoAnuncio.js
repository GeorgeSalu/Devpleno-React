import React, {Component} from 'react'
import HeaderInterno from './HeaderInterno'

class NovoAnuncio extends Component {
  render() {
    return (
      <div>
        <HeaderInterno />
        <div className="container" style={{ paddingTop: '120px' }}>
          <h1>Novo anuncio</h1>
          <form onSubmit={null}>
            <div className="form-group">
              <label htmlFor='nome'>Nome</label>
              <input type='text' className='form-control' id='nome' placeholder='nome'></input>
            </div>
            <div className="form-group">
              <label htmlFor='descricao'>Desricao</label>
              <input type='text' className='form-control' id='descricao' placeholder='descricao'></input>
            </div>
            <div className="form-group">
              <label htmlFor='preco'>preco</label>
              <input type='text' className='form-control' id='preco' placeholder='preco'></input>
            </div>
            <div className="form-group">
              <label htmlFor='telefone'>Telefone</label>
              <input type='text' className='form-control' id='telefone' placeholder='telefone'></input>
            </div>
            <div className="form-group">
              <label htmlFor='nome'>Vendedor</label>
              <input type='text' className='form-control' id='vendedor' placeholder='vendedor'></input>
            </div>
            <button type='submit' className="btn btn-primary">Salvar</button>
          </form>
        </div>
      </div>
    )
  }
}

export default NovoAnuncio