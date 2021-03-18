import axios from 'axios'

export const requestGetUsers = (limit) => {
  return axios.request({
    method: 'get',
    url: `http://localhost:8000/api/users?limit=${limit}`,
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
