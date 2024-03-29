/* Lib padrão react */
import React, {useState, useEffect} from 'react';
/* Link CSS */
import './App.css';
/* Componentes de icones */
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
/* Componentes de tela */
import ChatListItem from '../components/ChatlistItem/ChatlistItem';
import ChatIntro from '../components/ChatIntro/ChatIntro';
import ChatWindow from '../components/Chat/ChatWindow';
import NewChat from '../components/NewChat/NewChat';
import Login from '../components/Login/Login';
import Api from '../backend/Api'

export default () => {

  /* Lista de usuários */
  const [chatlist, setChatList] = useState([]);
  /* Verifica qual chat está ativo  */
  const [activeChat, setActiveChat] = useState({});
  /* Informações do usuario logado */
  const [user, setUser] = useState(null);
  const [showNewChat, setShowNewChat] = useState(false);
  
  useEffect(() => {
    if(user !== null){
      let unsub = Api.onChatList(user.id, setChatList);
      return unsub;
    }
  }, [user]);
  
  const handleNewChat = () => {
    setShowNewChat(true);
  }

  const handleLoginData = async (u) => {
      let newUser = {
        id:u.uid,
        name:u.displayName,
        avatar:u.photoURL
      }
      await Api.addUser(newUser);
      setUser(newUser);
  }

  if(user === null) {
    return (<Login onReceive={handleLoginData} />);
  }

  

  return (
    /* Div Principal */
    <div className="app-window">
        <div className="sidebar">
          <NewChat chatlist={chatlist} user={user} show={showNewChat} setShow={setShowNewChat} />
          <header>
            
            <img src={user.avatar} alt="avatar" 
            className="header--avatar"/>
            
            <div className="header--buttons">
              
              <div className="header--btn">
                  <DonutLargeIcon style={{color:'#919191'}}/>    
              </div>
              
              <div onClick={handleNewChat} className="header--btn">
                  <ChatIcon style={{color:'#919191'}}/>    
              </div>
              
              <div className="header--btn">
                  <MoreVertIcon style={{color:'#919191'}}/>    
              </div>

            </div>

          </header>

          <div className="search">
            
            <div className="search--input">

                <SearchIcon fontSize="small" style={{color:'#919191'}}/>
              <input type="search" placeholder="Procure ou comece uma nova conversa"/>

            </div>

          </div>

          <div className="chatlist">
            {/*Mapeando e passando as props para o chatListItem */}
            {chatlist.map((item, key) => (
              <ChatListItem key={key}
                data = {item}
                active={activeChat.chatId === chatlist[key].chatId}
                onClick={() => setActiveChat(chatlist[key])}/>
            ))}

          </div>

        </div>
        
        <div className="contentArea">
          
          {activeChat.chatId !== undefined &&
            <ChatWindow user={user} 
                        data= {activeChat}  />
          }
          {activeChat.chatId === undefined &&
            <ChatIntro />
          }
          
        </div>

    </div>
  );
}


