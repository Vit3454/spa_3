import React from 'react'
import Paginator from '../../Paginator/Paginator'
import ReduxAddNewUserForm from './AddNewUserForm/AddNewUserForm'
import ReduxEditUserForm from './EditUserForm/EditUserForm'
import ReduxSearchForm from './SearchForm/SearchForm'
import User from './User/User'
import s from './Users.module.css'

const Users = (props) => {
  const usersArray = props.users.map((u) => (
    <User
      key={u.id}
      id={u.id}
      first_name={u.first_name}
      last_name={u.last_name}
      company={u.company}
      phone={u.phone}
      email={u.email}
      address={u.address}
      currentPage={props.currentPage}
      pageSize={props.pageSize}
      selectUser={props.selectUser}
      deleteUser={props.deleteUser}
    />
  ))

  const addNewUser = (formData) => {
    props.addNewUser({
      ...formData,
      token: localStorage.getItem('token'),
      currentPage: props.currentPage,
      pageSize: props.pageSize,
    })
  }

  const onSaveChanges = (formData) => {
    props.updateUser({
      ...formData,
      token: localStorage.getItem('token'),
      currentPage: props.currentPage,
      pageSize: props.pageSize,
      userId: props.userId,
    })
  }

  const search = (formData) => {
    props.search(formData.search, props.token)
  }

  return (
    <div className={s.users}>
      <div className={s.tools}>
        <ReduxSearchForm onSubmit={search} />
        <ReduxAddNewUserForm onSubmit={addNewUser} />
        <ReduxEditUserForm
          onSubmit={onSaveChanges}
          initialValues={props.initialValues}
        />
      </div>
      <div className={s.contactList}>
        <Paginator {...props} />
        {usersArray}
      </div>
    </div>
  )
}

export default Users
