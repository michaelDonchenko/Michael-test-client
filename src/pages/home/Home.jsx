import { Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles'

const Home = () => {
  const classes = styles()
  return (
    <Typography component='div' className={classes.flexCentered}>
      <Link className={classes.link} to='/register'>
        <Typography variant='h6' align='center'>
          Would you like to Register a new user?
        </Typography>
      </Link>

      <Link className={classes.link} to='/users'>
        <Typography variant='h6' align='center'>
          Would you like to see all availiable users?
        </Typography>
      </Link>
    </Typography>
  )
}

export default Home
