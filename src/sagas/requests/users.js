import axios from 'axios'

export const requestGetUsers = (limit, sort, order, page) => {
  return axios.request({
    method: 'get',
    url: `http://localhost:8000/api/users?limit=${limit}&sort=${sort}&order=${order}&page=${page}`,
  })
}

export const requestRegisterUser = (username, email, age) => {
  return axios.request({
    method: 'post',
    url: `http://localhost:8000/api/register`,
    data: {
      username,
      email,
      age,
    },
  })
}
