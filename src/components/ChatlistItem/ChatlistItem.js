import React from 'react';
import './style.css';

export default () => {
  return (
    <div className="chatListItem">
        <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar"/>
         <div className="chatListItem--lines">
             <div className="chatListItem--line">
                <div className="chatListItem--name">
                  Amanda 
                </div>
                <div className="chatListItem--date">
                  02:00
                </div>
             </div>

             <div className="chatListItem--line">
                <div className="chatListItem--lastMsg">
                  <p>Boa noite, gostosão </p>
                </div>               
             </div>
         </div>
    </div>
  );
}