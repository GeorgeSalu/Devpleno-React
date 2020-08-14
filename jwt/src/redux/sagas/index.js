import { takeLatest } from 'redux-saga/effects'
import {Types} from '../actionCreators'

function* login(action) {
  console.log(action)
}

export default function* rootSaga() {
  console.log('root saga')
  takeLatest(Types.SIGNIN_REQUEST, login)
}