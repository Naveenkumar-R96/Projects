import React from 'react'
import './ChatBox.css'
const ChatBox = ({onStartChat}) => {
  return (
    <div className='start-page'>
      <button className='start-page-btn' onClick={onStartChat}>Chat AI</button>
    </div>
  )
}

export default ChatBox
