import React from 'react';
import './style.css';

export default ({onClick, active, data}) => {
  return (
    <div className={`chatListItem ${active? 'active':''}`} onClick={onClick}>
        <img className="chatListItem--avatar" src={data.image} alt="avatar"/>
         <div className="chatListItem--lines">
             <div className="chatListItem--line">
                <div className="chatListItem--name">
                  {data.title}
                </div>
                <div className="chatListItem--date">
                  02:00
                </div>
             </div>

             <div className="chatListItem--line">
                <div className="chatListItem--lastMsg">
                  <p>{data.lastMsg}</p>
                </div>               
             </div>
         </div>
    </div>
  );
}