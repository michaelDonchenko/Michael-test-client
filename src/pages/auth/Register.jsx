import { Typography } from '@material-ui/core'
import React, { useState } from 'react'
import RegisterForm from '../../components/auth/RegisterForm'
import styles from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../reducers/userReducer'
import { Alert } from '@material-ui/lab'

const Register = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const state = useSelector((state) => state.user)

  const { registerResponse, registerError, loading } = state

  const [values, setValues] = useState({
    username: '',
    email: '',
    age: '',
  })

  const { username, email, age } = values

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    dispatch(registerUser(username, email, age))
  }

  const displaySuccess = () => {
    if (registerResponse && registerResponse.success) {
      return <Alert severity='success'>{registerResponse.message}</Alert>
    }
  }

  const displayError = () => {
    if (typeof registerError === 'string') {
      return <Alert severity='error'>{registerError}</Alert>
    }

    if (typeof registerError === 'object') {
      return (
        <Alert severity='error'>
          <ul>
            {registerError.map((err) => (
              <li>{err.msg}</li>
            ))}
          </ul>
        </Alert>
      )
    }
  }

  return (
    <Typography component='div' className={classes.flexCentered}>
      <Typography variant='h5' align='center'>
        Register a new user
      </Typography>

      <RegisterForm
        values={values}
        handleChange={handleChange}
        handleRegister={handleRegister}
        loading={loading}
      />

      {displaySuccess()}
      {displayError()}
    </Typography>
  )
}

export default Register
