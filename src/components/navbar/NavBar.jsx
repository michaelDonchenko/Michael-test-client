import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../styles'
import { yellow } from '@material-ui/core/colors'

const NavBar = () => {
  const classes = styles()
  return (
    <AppBar position='relative' className={classes.navBar}>
      <Toolbar className={classes.toolBar} variant='dense'>
        <NavLink
          to='/register'
          exact
          className={classes.navLink}
          activeStyle={{ color: yellow[500], textDecoration: 'underline' }}
        >
          Register
        </NavLink>
        <NavLink
          to='/users'
          exact
          className={classes.navLink}
          activeStyle={{ color: yellow[500], textDecoration: 'underline' }}
        >
          Users
        </NavLink>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
