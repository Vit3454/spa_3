import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000/',
})

export const usersAPI = {
  auth: (login, password) => {
    return instance
      .post('auth/login', {
        email: login,
        password: password,
      })
      .then((response) => {
        const data = {
          statusCode: 1,
          access_token: response.data.access_token,
        }
        return data
      })
      .catch((error) => {
        const data = {
          statusCode: 0,
          error: '401 Unauthorized',
        }
        return data
      })
  },

  getUsers: (currentPage, pageSize, token) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }

    return instance
      .get(`users?_page=${currentPage}&_limit=${pageSize}`, config)
      .then((response) => {
        const data = {
          statusCode: 1,
          users: response.data,
          totalUsersCount: response.headers['x-total-count'],
        }
        return data
      })
      .catch((error) => {
        const data = {
          statusCode: 0,
          error: '401 Unauthorized',
        }
        return data
      })
  },

  addNewUser: (
    first_name,
    last_name,
    company,
    phone,
    email,
    address,
    token
  ) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
    return instance
      .post(
        'users',
        {
          first_name,
          last_name,
          company,
          phone,
          email,
          address,
        },
        config
      )
      .then((response) => {
        const data = {
          statusCode: 1,
        }
        return data
      })
      .catch((error) => {
        const data = {
          statusCode: 0,
          error: '401 Unauthorized',
        }
        return data
      })
  },

  updateUser: (
    userId,
    first_name,
    last_name,
    company,
    phone,
    email,
    address,
    token
  ) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
    return instance
      .patch(
        `users/${userId}`,
        {
          first_name,
          last_name,
          company,
          phone,
          email,
          address,
        },
        config
      )
      .then((response) => {
        const data = {
          statusCode: 1,
        }
        return data
      })
      .catch((error) => {
        const data = {
          statusCode: 0,
          error: '401 Unauthorized',
        }
        return data
      })
  },

  search: (val, token) => {
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
    return instance
      .get(`users?q=${val}`, config)
      .then((response) => {
        const data = {
          statusCode: 1,
          users: response.data,
        }
        return data
      })
      .catch((error) => {
        const data = {
          statusCode: 0,
          error: '401 Unauthorized',
        }
        return data
      })
  },

  deleteUser: (userId, token) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
    return instance
      .delete(`users/${userId}`, config)
      .then((response) => {
        const data = {
          statusCode: 1,
        }
        return data
      })
      .catch((error) => {
        const data = {
          statusCode: 0,
        }
        return data
      })
  },
}
