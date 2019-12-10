import React from 'react';
import Header from './Header'
import Table from './elements/table/index'

const App = () => {
  const names = ['tulio', 'faria']
  const namesElements = names.map(name => <p>{name}</p>)
  return (
    <div className="App">
      {namesElements}
      <Header.Header2 />
      <Table />
    </div>
  );
}

export default App;
