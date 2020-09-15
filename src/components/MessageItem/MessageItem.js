import React from 'react'
import './style.css';

export default ({data, user}) => {
  return (
    <div className="messageLine" style={{justifyContent: user.id === data.author? 'flex-end':'flex-start'}}>
        <div className="messageItem" style={{backgroundColor:user.id === data.author ? '#477064':'#fff', color:user.id === data.author? '#fff':'black'}}>
          <div className="messageText" >
            {data.body}
          </div>
          <div className="messageDate" style={{color: user.id === data.author ? '#fff':'black'}}>
            19:00
          </div>
        </div>
    </div>
  )
}