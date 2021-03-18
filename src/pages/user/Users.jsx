import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers } from '../../reducers/userReducer'

const Users = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.user)
  console.log(state)

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

  return (
    <div>
      <h1>Users</h1>
    </div>
  )
}

export default Users
