import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import { loadUsers } from '../../reducers/userReducer'
import styles from '../../styles'
import Paginate from '../../components/Paginate'
import { DataGrid } from '@material-ui/data-grid'
import { Alert } from '@material-ui/lab'

const Users = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const state = useSelector((state) => state.user)

  const { loading, error, usersObject } = state
  const { users, pages, count } = usersObject

  const [values, setValues] = useState({
    limit: 10,
    sort: 'createdAt',
    order: -1,
    page: 1,
  })

  const handlePageChange = (event, value) => {
    setValues({ ...values, page: value })
  }

  const { limit, sort, order, page } = values

  const columns = [
    { field: 'id', hide: true, width: 130 },
    { field: 'username', headerName: 'User name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'age', headerName: 'Age', width: 130 },
  ]

  let rows = []
  if (users && users.length > 0) {
    users.map((user) =>
      rows.push({
        id: user._id,
        username: user.username,
        email: user.email,
        age: user.age,
      })
    )
  }

  useEffect(() => {
    dispatch(loadUsers(limit, sort, order, page))
  }, [page])

  const displayError = () => {
    if (error) {
      return <Alert severity='error'>{error}</Alert>
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <Typography component='div' className={classes.flexCentered}>
      <div className={classes.table}>
        {displayError()}
        {!error && (
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={limit}
            rowCount={count}
            hideFooter
          />
        )}
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
