import React, {useState} from 'react';
import './style.css';

/* Icones */

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({user,chalist,show,setShow}) => {
  const handleClose = () => {
    setShow(false);
  }
  const [list, setList] = useState([{
    id:123, avatar:'https://www.w3schools.com/howto/img_avatar2.png', name:'Gabriel Rodrigues'
  },{
    id:123, avatar:'https://www.w3schools.com/howto/img_avatar2.png', name:'Gabriel Rodrigues'
  },{
    id:123, avatar:'https://www.w3schools.com/howto/img_avatar2.png', name:'Gabriel Rodrigues'
  },{
    id:123, avatar:'https://www.w3schools.com/howto/img_avatar2.png', name:'Gabriel Rodrigues'
  }])
    return (
      <div className="newChat" style={{left: show?0:-415}}>
        <div className="newChat--head">
            <div className="newChat--backbutton">
              <ArrowBackIcon style={{color:'#ffff'}} 
                onClick={handleClose}
              /> 
            </div>
            <div className="newChat--headtitle">
              Nova Conversa
            </div>
        </div>
        <div className="newChat--list">
        {list.map((item, key) =>(
          <div className="newChat--item" key={key}>
            <img className="newChat--itemavatar"src={item.avatar}alt="avatar"/>
            <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
        </div>
      </div>
    );
}
