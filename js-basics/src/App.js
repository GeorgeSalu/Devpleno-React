import React from 'react';

const App = () => {
  const names = ['tulio', 'faria']
  const namesElements = names.map(name => <p>{name}</p>)
  return (
    <div className="App">
      {namesElements}
    </div>
  );
}

export default App;
