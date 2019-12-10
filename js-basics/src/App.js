import React from 'react';

const App = () => {
  const names = ['tulio', 'faria']

  return (
    <div className="App">
      {
        names.map(name => <p>{name}</p>)
      }
    </div>
  );
}

export default App;
