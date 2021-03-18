import { Typography } from '@material-ui/core'
import React, { useState } from 'react'
import RegisterForm from '../../components/auth/RegisterForm'
import styles from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../reducers/userReducer'

const Register = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const state = useSelector((state) => state.user)
  console.log(state)

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

  return (
    <Typography component='div' className={classes.flexCentered}>
      <Typography variant='h4' align='center'>
        Register a new user
      </Typography>

      <RegisterForm
        values={values}
        handleChange={handleChange}
        handleRegister={handleRegister}
      />
    </Typography>
  )
}

export default Register
