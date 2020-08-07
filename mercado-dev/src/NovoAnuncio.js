import React, {Component} from 'react'

class NovoAnuncio extends Component {
  render() {
    return (
      <div className="container" style={{ paddingTop: '120px' }}>
        <h1>Novo anuncio</h1>
        <form onSubmit={null}>
          <div className="form-group">
            <label htmlFor='nome'>Nome</label>
            <input type='text' className='form-control' id='nome' placeholder='nome'></input>
          </div>
        </form>
      </div>
    )
  }
}

export default NovoAnuncio