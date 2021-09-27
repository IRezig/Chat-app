import React from 'react'
import './InfoBar.css'
import { closeIcon, onlineIcon } from '../../Icons'

export default function InfoBar() {
  return (
    <div className='infoBar'>
      <div className='leftInnerContainer'>
        <img className='onlineIcon' src={onlineIcon} alt='online img' />
        <h3>room</h3>
      </div>
      <div className='rightInnerContainer'>
        <a href='/'>
          <img src={closeIcon} alt='close img' />
        </a>
      </div>
    </div>
  )
}
