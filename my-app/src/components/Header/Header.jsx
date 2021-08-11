import React from 'react'
import s from './Header.module.css'
import os from '../../App.module.css'

const Header = (props) => {
  return (
    <div className={os.mainBlocks + ' ' + s.header}>
      <div className={s.logo}>Logo</div>
      <div className={s.btnExit}>
        {props.isAuth ? <button onClick={props.onExit}>Выход</button> : null}
      </div>
    </div>
  )
}

export default Header
