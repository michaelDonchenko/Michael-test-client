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
import Paginate from '../../components/Paginate'

const Users = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const state = useSelector((state) => state.user)

  const { loading, error, usersObject } = state
  const { users, pages } = usersObject

  const [values, setValues] = useState({
    limit: 5,
    sort: 'createdAt',
    order: -1,
    page: 1,
  })

  const handlePageChange = (event, value) => {
    setValues({ ...values, page: value })
  }

  const { limit, sort, order, page } = values

  useEffect(() => {
    dispatch(loadUsers(limit, sort, order, page))
  }, [page])

  if (loading) {
    return <Loader />
  }

  return (
    <Typography component='div' className={classes.flexCentered}>
      <div className={classes.table}>
        <Toolbar component={Paper}>
          <Typography
            className={classes.title}
            variant='h6'
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

        <TableContainer component={Paper}>
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
      </div>

      <Paginate
        page={page}
        pages={pages && pages}
        handlePageChange={handlePageChange}
      />
    </Typography>
  )
}

export default Users
