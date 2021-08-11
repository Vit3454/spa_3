import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import s from './App.module.css'
import AuthContainer from './components/Content/Auth/AuthContainer'
import UsersCountainer from './components/Content/Users/UsersContainer'
import Footer from './components/Footer/Footer'
import HeaderContainer from './components/Header/HeaderContainer'
import { initialize } from './redux/app-reducer'

class App extends React.Component {
  componentDidMount() {
    this.props.initialize()
  }
  render() {
    if (!this.props.initialized) return <div>loading...</div>
    return (
      <div className={s.app}>
        <HeaderContainer />
        <div className={s.mainBlocks + ' ' + s.content}>
          <Route path={'/'} exact render={() => <AuthContainer />} />
          <Route path={'/users'} render={() => <UsersCountainer />} />
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, { initialize })(App)
