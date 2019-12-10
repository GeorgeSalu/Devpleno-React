import React from 'react';
import Header from './Header'

const App = () => {
  const names = ['tulio', 'faria']
  const namesElements = names.map(name => <p>{name}</p>)
  return (
    <div className="App">
      {namesElements}
      <Header />
    </div>
  );
}

export default App;
