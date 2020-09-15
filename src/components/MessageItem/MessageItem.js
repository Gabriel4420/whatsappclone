import React from 'react'
import './style.css';

export default ({data}) => {
  return (
    <div className="messageLine" style={{justifyContent: 'flex-start'}}>
        <div className="messageItem">
          <div className="messageText">
            {data.body}
          </div>
          <div className="messageDate">
            19:00
          </div>
        </div>
    </div>
  )
}