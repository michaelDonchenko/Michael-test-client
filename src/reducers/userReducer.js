import {
  LOAD_USERS,
  REGISTER_REQUEST,
  USERS_LOADED,
  REGISTER_SUCCESS,
  USERS_FAILED,
  REGISTER_ERROR,
} from '../actions/actionTypes'

//get users
export const loadUsers = (limit, sort, order, page) => ({
  type: LOAD_USERS,
  limit,
  sort,
  order,
  page,
})
export const usersLoaded = (usersObject) => ({
  type: USERS_LOADED,
  usersObject,
})
export const usersFailed = (error) => ({ type: USERS_FAILED, error })

//register a new user
export const registerUser = (username, email, age) => ({
  type: REGISTER_REQUEST,
  username,
  email,
  age,
})
export const userRegistered = (registerResponse) => ({
  type: REGISTER_SUCCESS,
  registerResponse,
})
export const registerError = (registerError) => ({
  type: REGISTER_ERROR,
  registerError,
})

//initial state
const initialState = {
  usersObject: {},
  loading: false,
  registerResponse: null,
  error: false,
  registerError: false,
}

//cases
export default (state = initialState, action) => {
  switch (action.type) {
    //get users
    case LOAD_USERS:
      return { ...state, loading: true }

    case USERS_LOADED:
      const { usersObject } = action
      return { ...state, usersObject, loading: false }

    case USERS_FAILED:
      const { error } = action
      return { ...state, usersObject: {}, loading: false, error }

    //register new user
    case REGISTER_REQUEST:
      return { ...state, loading: true }

    case REGISTER_SUCCESS:
      const { registerResponse } = action
      return {
        ...state,
        loading: false,
        registerError: false,
        registerResponse,
      }

    case REGISTER_ERROR:
      const { registerError } = action
      return {
        ...state,
        loading: false,
        registerResponse: false,
        registerError,
      }

    default:
      return state
  }
}
