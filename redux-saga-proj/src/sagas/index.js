import {takeEvery} from 'redux-saga/effects'
import getIp from './ipSagas'

function *index() {
  console.log('hello from saga')
  yield takeEvery('LOAD_DATA_REQUEST', getIp)
}

export default index