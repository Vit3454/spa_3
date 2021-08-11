import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './Auth.module.css'
import os from '../../../App.module.css'
import Input, { createField } from '../../FormsControl/FormsControl'
import { maxLength, requireField } from '../../../validators/validators'

const maxLength10 = maxLength(15)

const AuthForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={os.form}>
      <h3>Авторизация</h3>
      <p>login: bruno@email.com</p>
      <p>password: bruno</p>
      {createField(Input, 'login', [requireField, maxLength10], 'email')}
      {createField(Input, 'password', [requireField, maxLength10], 'password')}
      <div>
        <button>Войти</button>
      </div>
    </form>
  )
}

const ReduxAuthForm = reduxForm({ form: 'authForm' })(AuthForm)

const Auth = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.login, formData.password)
  }

  return (
    <div className={s.auth}>
      <div>
        <ReduxAuthForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default Auth
