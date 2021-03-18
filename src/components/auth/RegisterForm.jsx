import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core'
import React from 'react'
import styles from '../../styles'

const RegisterForm = ({ values, handleChange, handleRegister, loading }) => {
  const classes = styles()
  let ages = []

  const { username, email, age } = values

  for (let i = 18; i <= 120; i++) {
    ages.push(i)
  }

  return (
    <form onSubmit={handleRegister} className={classes.flexCentered}>
      <TextField
        className={classes.textField}
        size='small'
        variant='outlined'
        value={username}
        onChange={handleChange}
        label='Username'
        name='username'
        autoFocus
      >
        Username
      </TextField>

      <TextField
        size='small'
        className={classes.textField}
        variant='outlined'
        value={email}
        onChange={handleChange}
        label='Email'
        name='email'
      >
        Email
      </TextField>

      <FormControl size='small' className={classes.ageField}>
        <InputLabel id='age'>Age</InputLabel>
        <Select labelId='age' name='age' value={age} onChange={handleChange}>
          {ages &&
            ages.length > 0 &&
            ages.map((age) => (
              <MenuItem key={String(age)} value={age}>
                {age}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      <Button
        type='submit'
        variant='contained'
        color='primary'
        className={classes.button}
        disabled={loading}
      >
        {loading ? 'Loading..' : 'Add user'}
      </Button>
    </form>
  )
}

export default RegisterForm
