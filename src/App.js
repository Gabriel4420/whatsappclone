import React, {useState, useEffect} from 'react';
import './App.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatListItem from './components/ChatlistItem/ChatlistItem';
import ChatIntro from './components/ChatIntro/ChatIntro';
import ChatWindow from './components/Chat/ChatWindow';

export default () => {
  
  const [chatlist, setChatList] = useState([{chatId:1,title:'fulano de tal', avatar:'https://www.w3schools.com/howto/img_avatar2.png'},
                                            
                                            {chatId:2,title:'fulano de tal', avatar:'https://www.w3schools.com/howto/img_avatar2.png'},
                                            
                                            {chatId:3,title:'fulano de tal', avatar:'https://www.w3schools.com/howto/img_avatar2.png'},
                                            
                                            {chatId:4,title:'fulano de tal', avatar:'https://www.w3schools.com/howto/img_avatar2.png'}]);
  
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="app-window">
        <div className="sidebar">
          <header>
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar" 
            className="header--avatar"/>
            <div className="header--buttons">
              <div className="header--btn">
                  <DonutLargeIcon style={{color:'#919191'}}/>    
              </div>
              <div className="header--btn">
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
              
              <input type="search"  
               placeholder="Procure ou comece uma nova conversa "/>

            </div>
          </div>

          <div className="chatlist">
            {chatlist.map((item, key) => (
              <ChatListItem key={key}
                data = {item}
                active={activeChat.chatId === chatlist[key].chatId}
                onClick={() =>setActiveChat(chatlist[key])}
              />
            ))}
          </div>

        </div>
        
        <div className="contentArea">
          {activeChat.chatId !== undefined &&
            <ChatWindow />
          }
          {activeChat.chatId === undefined &&
            <ChatIntro />
          }
          
        </div>

    </div>
    
  );
}


