import React from 'react'
import s from './User.module.css'

const User = (props) => {
  const selectUser = (id) => {
    props.selectUser(id)
  }

  const deleteUser = (userId) => {
    console.log(userId)
    props.deleteUser(
      userId,
      props.currentPage,
      props.pageSize,
      localStorage.getItem('token')
    )
  }

  return (
    <div className={s.user}>
      <div>
        <span className={s.desc}>Имя: </span>
        {props.first_name}
      </div>
      <div>
        <span className={s.desc}>Фамилия: </span>
        {props.last_name}
      </div>
      <div>
        <span className={s.desc}>Компания: </span>
        {props.company}
      </div>
      <div>
        <span className={s.desc}>Телефон: </span>
        {props.phone}
      </div>
      <div>
        <span className={s.desc}>Email: </span>
        {props.email}
      </div>
      <div>
        <span className={s.desc}>Адрес: </span>
        {props.address}
      </div>
      <div>
        <button
          onClick={() => {
            selectUser(props.id)
          }}
        >
          Редактировать
        </button>
        <button
          onClick={() => {
            deleteUser(props.id)
          }}
        >
          Удалить
        </button>
      </div>
    </div>
  )
}

export default User
