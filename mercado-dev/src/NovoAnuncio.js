import React, {Component} from 'react'
import HeaderInterno from './HeaderInterno'
import base,{storage} from './base'

class NovoAnuncio extends Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    
    const file = this.foto.files[0]
    const {name, size} = file
    const ref = storage.ref(name)
    ref
      .put(file)
      .then(img => {
        const novoAnuncio = {
          nome: this.nome.value,
          descricao: this.descricao.value,
          preco: this.preco.value,
          vendedor: this.vendedor.value,
          foto: img.metadata.downloadURLs[0],
          telefone: this.telefone.value
        }
        base.push('anuncios', {
          data: novoAnuncio
        }, (err) => {
          if(err) {
    
          }else {
    
          }
        })
      })

   
    
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <HeaderInterno />
        <div className="container" style={{ paddingTop: '120px' }}>
          <h1>Novo anúncio</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor='nome'>Foto</label>
              <input type='file' className='form-control' id='foto' placeholder='foto' ref={(ref) => this.foto = ref}></input>
            </div>
            <div className="form-group">
              <label htmlFor='nome'>Nome</label>
              <input type='text' className='form-control' id='nome' placeholder='nome' ref={(ref) => this.nome = ref}></input>
            </div>
            <div className="form-group">
              <label htmlFor='descricao'>Descrição</label>
              <input type='text' className='form-control' id='descricao' placeholder='descricao' ref={(ref) => this.descricao = ref}></input>
            </div>
            <div className="form-group">
              <label htmlFor='preco'>Preço</label>
              <input type='text' className='form-control' id='preco' placeholder='preco' ref={(ref) => this.preco = ref}></input>
            </div>
            <div className="form-group">
              <label htmlFor='telefone'>Telefone</label>
              <input type='text' className='form-control' id='telefone' placeholder='telefone' ref={(ref) => this.telefone = ref}></input>
            </div>
            <div className="form-group">
              <label htmlFor='nome'>Vendedor</label>
              <input type='text' className='form-control' id='vendedor' placeholder='vendedor' ref={(ref) => this.vendedor = ref}></input>
            </div>
            <button type='submit' className="btn btn-primary">Salvar anúncio</button>
          </form>
        </div>
      </div>
    )
  }
}

export default NovoAnuncio