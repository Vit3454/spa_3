import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  addNewUser,
  deleteUser,
  search,
  selectUser,
  setUsers,
  updateUser,
} from '../../../redux/users-reducer'
import Users from './Users'

class UsersCountainer extends React.Component {
  componentDidMount() {
    this.props.setUsers(1, this.props.pageSize, this.props.token)
  }

  onChangePage = (pageNumber) => {
    console.log(pageNumber)
    this.props.setUsers(
      pageNumber,
      this.props.pageSize,
      localStorage.getItem('token')
    )
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/'} />
    if (!this.props.users) return <div>users is loading...</div>
    return (
      <Users
        {...this.props}
        onChangePage={this.onChangePage}
        addNewUser={this.props.addNewUser}
        selectUser={this.props.selectUser}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth,
  token: state.authPage.token,
  users: state.usersPage.users,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageSize: state.usersPage.pageSize,
  currentPage: state.usersPage.currentPage,
  portionSize: state.usersPage.portionSize,
  initialValues: state.usersPage.initialValues,
  userId: state.usersPage.userId,
})

export default connect(mapStateToProps, {
  setUsers,
  addNewUser,
  selectUser,
  updateUser,
  search,
  deleteUser,
})(UsersCountainer)
