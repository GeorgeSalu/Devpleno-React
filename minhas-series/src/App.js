import React, { useEffect, useState } from 'react';
import Header from './Header'
import Generos from './Generos'
import NovoGenero from './NovoGenero'
import EditarGenero from './EditarGenero'
import Series from './Series'
import NovaSerie from './NovaSerie'
import axios from 'axios'

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

function App() {

  const [data, setData] = useState({})

  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data)
    })
  }, [])

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/generos' exact component={Generos}/>
          <Route path='/generos/novo' exact component={NovoGenero}/>
          <Route path='/generos/:id' exact component={EditarGenero}/>
          <Route path='/series' exact component={Series}/>
          <Route path='/series/novo' exact component={NovaSerie}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
