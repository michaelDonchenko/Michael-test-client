import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import { loadUsers } from '../../reducers/userReducer'
import styles from '../../styles'
import FilterListIcon from '@material-ui/icons/FilterList'

const Users = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const state = useSelector((state) => state.user)

  const { loading, error, usersObject } = state
  const { users } = usersObject

  const [values, setValues] = useState({
    limit: '',
    sort: '',
    order: '',
    page: '',
  })

  const { limit, sort, order, page } = values

  useEffect(() => {
    dispatch(loadUsers(limit, sort, order, page))
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <Typography component='div' className={classes.flexCentered}>
      <Toolbar component={Paper}>
        <Typography
          className={classes.title}
          variant='h5'
          id='tableTitle'
          component='div'
        >
          Users
        </Typography>

        <Tooltip title='Filter list'>
          <IconButton aria-label='filter list'>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>

      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label='users'>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.length > 0 && !error ? (
              users.map((user) => (
                <TableRow key={user.username}>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.age}</TableCell>
                </TableRow>
              ))
            ) : (
              <Typography variant='h5' align='center'>
                No users found...
              </Typography>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Typography>
  )
}

export default Users
