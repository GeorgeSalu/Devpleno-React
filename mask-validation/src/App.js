import React from 'react';
import './App.css';
import InputMask from 'react-text-mask'

function App() {
  return (
    <div >
      <InputMask
        guide
        mask={[/\d/, /\d/, /\d/]} />
    </div>
  );
}

export default App;
