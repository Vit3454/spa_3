import { reset } from 'redux-form'
import { usersAPI } from '../components/api/usersAPI'
import { setIsAuth, setToken } from './auth-reducer'

const SET_USERS = 'USERS_REDUCER/SET_USERS'
const SET_TOTAL_USERS_COUNT = 'USERS_REDUCER/SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'USERS_REDUCER/SET_CURRENT_PAGE'
const GET_EDIT_DATA = 'USERS_REDUCER/GET_EDIT_DATA'
const CLEAR_DATA = 'USERS_REDUCERS/CEAR_DATA'

const initialState = {
  users: null,
  totalUsersCount: null,
  pageSize: 10,
  currentPage: 1,
  portionSize: 5,
  userId: null,
  initialValues: {
    first_name: null,
    last_name: null,
    company: null,
    phone: null,
    email: null,
    address: null,
  },
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }

    case GET_EDIT_DATA:
      const user = state.users.find((u) => u.id === action.userId)
      return {
        ...state,
        userId: action.userId,
        initialValues: {
          ...state.initialValues,
          first_name: user.first_name,
          last_name: user.last_name,
          company: user.company,
          phone: user.phone,
          email: user.email,
          address: user.address,
        },
      }

    case CLEAR_DATA:
      return {
        ...state,
        userId: null,
        initialValues: {
          ...state.initialValues,
          first_name: null,
          last_name: null,
          company: null,
          phone: null,
          email: null,
          address: null,
        },
      }

    default:
      return state
  }
}

export default usersReducer

const setUsersInState = (users) => ({ type: SET_USERS, users })
const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
})
const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})
const getEditData = (userId) => ({ type: GET_EDIT_DATA, userId })
const clearData = () => ({ type: CLEAR_DATA })

// thunk

export const setUsers = (currentPage, pageSize, token) => (dispatch) => {
  usersAPI.getUsers(currentPage, pageSize, token).then((data) => {
    if (data.statusCode === 1) {
      dispatch(setUsersInState(data.users))
      dispatch(setTotalUsersCount(data.totalUsersCount))
      dispatch(setCurrentPage(currentPage))
    } else {
      dispatch(setToken(null))
      dispatch(setIsAuth(false))
      console.log(data.error)
    }
  })
}

export const addNewUser =
  ({
    first_name,
    last_name,
    company,
    phone,
    email,
    address,
    token,
    currentPage,
    pageSize,
  }) =>
  (dispatch) => {
    usersAPI
      .addNewUser(first_name, last_name, company, phone, email, address, token)
      .then((data) => {
        if (data.statusCode === 1) {
          dispatch(setUsers(currentPage, pageSize, token))
          dispatch(reset('addNewUserForm'))
        } else {
          dispatch(setToken(null))
          dispatch(setIsAuth(false))
          console.log(data.error)
        }
      })
  }

export const selectUser = (userId) => (dispatch) => {
  dispatch(getEditData(userId))
}

export const updateUser =
  ({
    userId,
    first_name,
    last_name,
    company,
    phone,
    email,
    address,
    currentPage,
    pageSize,
    token,
  }) =>
  (dispatch) => {
    usersAPI
      .updateUser(
        userId,
        first_name,
        last_name,
        company,
        phone,
        email,
        address,
        token
      )
      .then((data) => {
        if (data.statusCode === 1) {
          dispatch(setUsers(currentPage, pageSize, token))
          dispatch(clearData())
        } else {
          dispatch(setToken(null))
          dispatch(setIsAuth(false))
          console.log(data.error)
        }
      })
  }

export const search = (val, token) => (dispatch) => {
  usersAPI.search(val, token).then((data) => {
    if (data.statusCode === 1) {
      dispatch(setUsersInState(data.users))
      dispatch(reset('searchForm'))
    } else {
      dispatch(setToken(null))
      dispatch(setIsAuth(false))
      console.log(data.error)
    }
  })
}

export const deleteUser =
  (userId, currentPage, pageSize, token) => (dispatch) => {
    usersAPI.deleteUser(userId, token).then((data) => {
      if (data.statusCode === 1) {
        dispatch(setUsers(currentPage, pageSize, token))
      } else {
        dispatch(setToken(null))
        dispatch(setIsAuth(false))
        console.log(data.error)
      }
    })
  }
