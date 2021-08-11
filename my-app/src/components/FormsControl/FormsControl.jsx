import React from 'react'
import { Field } from 'redux-form'
import s from './FormsControl.module.css'

const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={s.input + ' ' + (hasError ? s.error : null)}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError ? <span>{meta.error}</span> : null}
    </div>
  )
}

export default Input

export const createField = (
  component,
  name,
  validators = [],
  placeholder = ''
) => (
  <Field
    component={component}
    name={name}
    validate={validators}
    placeholder={placeholder}
  />
)
