import { call, put } from 'redux-saga/effects'
import {
  registerError,
  userRegistered,
  usersFailed,
  usersLoaded,
} from '../../reducers/userReducer'
import { requestGetUsers, requestRegisterUser } from '../requests/users'

export function* handleGetUsers(action) {
  try {
    const { data } = yield call(requestGetUsers, action.limit)
    yield put(usersLoaded(data))
  } catch (error) {
    console.log(error)
    yield put(usersFailed(error.response.data.message))
  }
}

export function* handleRegisterUser(action) {
  const { username, email, age } = action
  try {
    const { data } = yield call(requestRegisterUser, username, email, age)
    yield put(userRegistered(data))
  } catch (error) {
    console.log(error)
    yield put(registerError(error.response.data.message))
  }
}
