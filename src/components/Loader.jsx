import { CircularProgress } from '@material-ui/core'
import React from 'react'

const Loader = () => {
  return (
    <div
      style={{ display: 'flex', margin: '25px auto', justifyContent: 'center' }}
    >
      <CircularProgress />
    </div>
  )
}

export default Loader
