import React from 'react';
import Header from './Header'
import Table from './elements/table/index'

const App = () => {
  const names = ['tulio', 'faria']
  const namesElements = names.map(name => <p>{name}</p>)
  return React.createElement('div', { className: 'App' }, [
    React.createElement('h1', null, 'hello DevReactJs'),
    React.createElement('h2', null, 'start editing')
  ])
}

export default App;
