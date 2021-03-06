import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// variaveis
console.log(variavel1)
var variavel1 = 10
console.log(variavel1)

let variavel2 = 10
console.log(variavel2)

const variavel3 = 10
console.log(variavel3)

//funcoes
console.log(soma(1,2))
function soma(a, b) {
  return a + b
}

const funcSoma = soma
console.log(funcSoma(4,3))

const soma2 = function soma2(a, b) {
  return a + b
}
console.log(soma(1,2))

//arrow
const soma3 = (a, b) => {
  return a + b
}
console.log(soma3(1,3))

//high-order functions , objects e vetores
const a = 'tulio'
const str = `ola ${a}`
console.log(str)

const obj = {
  name: 'tulio',
  lastname: 'faria'
}

console.log(obj.name)
console.log(obj['name'])

const keys = Object.keys(obj)
console.log(keys)

// high order functions
keys.forEach(item => {
  console.log(item)
})

const value = keys.map(item => {
  return obj[item]
})

console.log(value)

//destructing assignament
const objc = {
  name: 'tulio',
  lastname: 'faria',
  address: {
    city: 'pouso alegre'
  }
}

const getName = ({ name }) => {
  return name
}

console.log(getName(objc))

const { name } = objc
console.log(name)

const [i1, i2] = keys
console.log(i1, i2)
