import React, {useState, useEffect} from 'react';
import './style.css';
import Api from '../../backend/Api'
/* Icones */

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({user,chalist,show,setShow}) => {
  const addNewChat = async (user2) => {
    await Api.addNewChat(user,user2);

    handleClose();
  }
  
  const handleClose = () => {
    setShow(false);
  }
  
  useEffect(() => {
    const getList = async () =>{
      if(user !== null){
        let results = await Api.getContactList(user.id);
        setList(results);
      }
    }
    getList();
  }, [user])

  const [list, setList] = useState([]);

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
          <div className="newChat--item" key={key} onClick={() => addNewChat(item) }>
            <img className="newChat--itemavatar"src={item.avatar}alt="avatar"/>
            <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
        </div>
      </div>
    );
}
