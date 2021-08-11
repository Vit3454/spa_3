import React from 'react'
import s from './Footer.module.css'
import os from '../../App.module.css'

const Footer = (props) => {
  return (
    <div className={os.mainBlocks + ' ' + s.footer}>
      <h3>Footer</h3>
    </div>
  )
}

export default Footer
