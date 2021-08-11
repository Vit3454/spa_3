import { usersAPI } from '../components/api/usersAPI'

const SET_IS_AUTH = 'AUTH_REDUCER/SET_IS_AUTH'
const SET_TOKEN = 'AUTH_REDUCER/SET_TOKEN'

const initialState = {
  isAuth: false,
  token: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.authStatus,
      }

    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      }

    default:
      return state
  }
}

export default authReducer

export const setIsAuth = (authStatus) => ({ type: SET_IS_AUTH, authStatus })
export const setToken = (token) => ({ type: SET_TOKEN, token })

// thunk

export const login = (login, password) => (dispatch) => {
  usersAPI.auth(login, password).then((data) => {
    if (data.statusCode === 1) {
      localStorage.setItem('token', data.access_token)
      dispatch(setToken(data.access_token))
      dispatch(setIsAuth(true))
    } else {
      console.log(data.error)
    }
  })
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('token')
  dispatch(setToken(null))
  dispatch(setIsAuth(false))
}
