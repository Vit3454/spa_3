import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import appReducer from './app-reducer'
import authReducer from './auth-reducer'
import usersReducer from './users-reducer'

const reducers = combineReducers({
  authPage: authReducer,
  form: formReducer,
  app: appReducer,
  usersPage: usersReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

window.store = store
