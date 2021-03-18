import { takeLatest, takeEvery } from 'redux-saga/effects'
import { LOAD_USERS, REGISTER_REQUEST } from '../actions/actionTypes'
import { handleGetUsers, handleRegisterUser } from './handlers/users'

export function* watcherSaga() {
  yield takeLatest(LOAD_USERS, handleGetUsers)
  yield takeEvery(REGISTER_REQUEST, handleRegisterUser)
}

export default watcherSaga
