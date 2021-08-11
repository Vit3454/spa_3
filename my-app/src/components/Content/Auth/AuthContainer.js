import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../../redux/auth-reducer'
import Auth from '../Auth/Auth'

class AuthContainer extends React.Component {
  render() {
    if (this.props.isAuth) return <Redirect to={'/users'} />
    return <Auth {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth,
})

export default connect(mapStateToProps, { login })(AuthContainer)
