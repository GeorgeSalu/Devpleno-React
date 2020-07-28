import React, { useState } from 'react';
import './App.css';
import InputMask from 'react-text-mask'

const InputCEP = (props) => {
  const mask = [/\d/, /\d/, '.',/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/];
  return (
    <InputMask
        guide
        mask={mask} {...props} />
  )
}

const InputCPF = (props) => {
  const mask = [/\d/,/\d/, /\d/, '.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'-',/\d/,/\d/];
  return (
    <InputMask
        guide
        mask={mask} {...props} />
  )
}

function App() {
  const [cep, setCEP] = useState('')
  const [cpf, setCPF] = useState('')
  return (
    <div >
      <InputCEP onChange={evt => setCEP(evt.target.value)} />
      CEP: {cep}
      <InputCPF onChange={evt => setCPF(evt.target.value)} />
      CPF: {cpf}
    </div>
  );
}

export default App;
