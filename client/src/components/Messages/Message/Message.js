import React from 'react'
import ReactEmoji from 'react-emoji'
import './Message.css'

export default function Message({ message: { user, text }, name }) {
  let isSentByCurrentUser = false
  const trimmedName = name.trim().toLowerCase()

  if(trimmedName === user) {
    isSentByCurrentUser = true
  }

  return (
    <>
      {isSentByCurrentUser ?
        <div className='messageContainer justifyEnd'>
          <p className='sendText pr-10'> {trimmedName} </p>
          <div className='messageBox backgroundBlue'>
            <p className='messageText colorWhite'> {ReactEmoji.emojify(text)} </p>
          </div>
        </div>
        :
        <div className='messageContainer justifyStart'>
          <div className='messageBox backgroundLight'>
            <p className='messageText colorDark'> {ReactEmoji.emojify(text)} </p>
          </div>
          <p className='sendText pl-10'> {trimmedName} </p>
        </div>
      }
    </>
  )
}
