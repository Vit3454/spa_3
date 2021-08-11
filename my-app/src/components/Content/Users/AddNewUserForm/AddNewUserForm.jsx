import React from 'react'
import os from '../../../../App.module.css'
import { Field, reduxForm } from 'redux-form'
import Input, { createField } from '../../../FormsControl/FormsControl'
import { maxLength, requireField } from '../../../../validators/validators'

const maxLength15 = maxLength(15)

const AddNewUserForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={os.form}>
      <h3>Добавить нового пользователя</h3>
      {createField(Input, 'first_name', [requireField, maxLength15], 'Имя')}
      {createField(Input, 'last_name', [requireField, maxLength15], 'Фамилия')}
      {createField(Input, 'company', [requireField, maxLength15], 'Компания')}
      {createField(Input, 'phone', [requireField, maxLength15], 'Телефон')}
      {createField(Input, 'email', [requireField, maxLength15], 'Email')}
      {createField(Input, 'address', [requireField, maxLength15], 'Адрес')}
      <div>
        <button>Добавить</button>
      </div>
    </form>
  )
}

const ReduxAddNewUserForm = reduxForm({ form: 'addNewUserForm' })(
  AddNewUserForm
)
export default ReduxAddNewUserForm
