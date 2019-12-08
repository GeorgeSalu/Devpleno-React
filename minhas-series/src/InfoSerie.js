import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Badge } from 'reactstrap'

const InfoSerie = ({ match }) => {

  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)
  const [mode, setMode] = useState('INFO')

  const [data, setData] = useState({})
  useEffect(() => {
    axios
      .get('/api/series' + match.params.id)
      .then(res => {
        setData(res.data.data)
      })
  }, [match.params.id])

  // custom header
  const masterHeader = {
    heigth: '50vh',
    minHeight: '500px',
    backgroundImage: `url('${data.background}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  const onChange = evt => {
    setName(evt.target.value)
  }

  const save = () => {
    axios.post('/api/series', {
      name
    })
    .then(res => {
      setSuccess(true)
    })
  }

  if(success) {
    return <Redirect to='/series' />
  }

  return (
    <div>
      <header style={masterHeader}>
        <div className='h-100' style={{ background: 'rgba(0,0,0,0.7)' }}>
          <div className='h-100 container'>
            <div className='row h-100 align-items-center'>
              <div className='col-3'>
                <img className='img-fluid img-thumbnail' src={data.poster}></img>
              </div>
              <div className='col-8'>
                <h1 className='font-weigth-light text-white'>{data.name}</h1>
                <div className='lead text-white'>
                  <Badge color='success'>Assistido</Badge>
                  <Badge color='warning'>Para assistir</Badge>
                  Genero: {data.genre}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      { mode === 'EDIT' &&
        <div className='container'>
          <h1>Nova Serie</h1>

          <form>
            <div className='form-group'>
              <label >Nome</label>
              <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome da Serie'/>
            </div>
            <button type='button' onClick={save} className='btn btn-primary'>Salvar Serie</button>
          </form>
        </div>
      }
    </div>
  )
}

export default InfoSerie
