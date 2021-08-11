import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../redux/auth-reducer'
import Header from './Header'

const HeaderContainer = (props) => {
  const onExit = () => {
    props.logout()
  }

  return <Header {...props} onExit={onExit} />
}

const mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth,
})

export default connect(mapStateToProps, { logout })(HeaderContainer)
