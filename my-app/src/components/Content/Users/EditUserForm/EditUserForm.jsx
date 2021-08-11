import React from 'react'
import os from '../../../../App.module.css'
import { reduxForm } from 'redux-form'
import Input, { createField } from '../../../FormsControl/FormsControl'
import { maxLength, requireField } from '../../../../validators/validators'

const maxLength15 = maxLength(15)

const EditUserForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={os.form}>
      <h3>Редактировать пользователя</h3>
      {createField(Input, 'first_name', [requireField, maxLength15], 'Имя')}
      {createField(Input, 'last_name', [requireField, maxLength15], 'Фамилия')}
      {createField(Input, 'company', [requireField, maxLength15], 'Компания')}
      {createField(Input, 'phone', [requireField, maxLength15], 'Телефон')}
      {createField(Input, 'email', [requireField, maxLength15], 'Email')}
      {createField(Input, 'address', [requireField, maxLength15], 'Адрес')}
      <div>
        <button>Сохранить</button>
      </div>
    </form>
  )
}

const ReduxEditUserForm = reduxForm({
  form: 'editUserForm',
  enableReinitialize: true,
})(EditUserForm)

export default ReduxEditUserForm
