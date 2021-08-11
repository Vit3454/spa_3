import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLength, requireField } from '../../../../validators/validators'
import Input, { createField } from '../../../FormsControl/FormsControl'
import os from '../../../../App.module.css'

const maxLength15 = maxLength(15)

const SearchForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={os.form}>
      {createField(Input, 'search', [maxLength15], 'Введите имя')}
      <div>
        <button>Поиск</button>
      </div>
    </form>
  )
}

const ReduxSearchForm = reduxForm({ form: 'searchForm' })(SearchForm)

export default ReduxSearchForm
