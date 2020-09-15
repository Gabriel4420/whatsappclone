/* Biblioteca Padrão React */
import React, {useState} from 'react';
/* Link CSS */
import './style.css';
/* Componentes da mensagem do corpo */
import MessageItem from '../MessageItem/MessageItem';
/* Componentes da barra de emoji */
import EmojiPicker from 'emoji-picker-react';
/* Componentes de Icones */
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

export default () => {

  let recognition = null;
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition;
  
  if(SpeechRecognition !== undefined){
    recognition = new SpeechRecognition();
  }

  const [emojiOpen,setEmojiOpen] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [list, setlist] = useState([{body:'bla bla bla'},{body:'bla bla '},{body:'bla bla bla bla'}]);

  const handleEmojiClick = (e, emojiObject) => {
    setText( text + emojiObject.emoji)
  }
  
  const handleSendClick = () => {

  }
  
  const handleMicClick = () => {
    
    if(recognition !== null){

      recognition.onstart = () => {
        setListening(true);
      }
      recognition.onend = () => {
        setListening(false);
      }
      recognition.onresult = (e) => {
          setText(e.results[0][0].transcript);
      }

      recognition.start();
    }  
  }

  const handleOpenEmoji = () => {
    setEmojiOpen(true);  
  }

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  }

  return (
      <div className="chatWindow">
        <div className="chatWindow--header">
            <div className="chatWindow--headerInfo">
              <img className="chatWindow--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar"/>
              <div className="chatWindow--name">Gabriel Rodrigues</div>
            </div>
            <div className="chatWindow--headerbuttons">
              <div className="chatWindow--btn">
                <SearchIcon style={{color:'#919191'}}/>
              </div>
              <div className="chatWindow--btn">
                <AttachFileIcon style={{color:'#919191'}}/>
              </div>
              <div className="chatWindow--btn">
                <MoreVertIcon style={{color:'#919191'}}/>
              </div>
            </div>
        </div>

         <div className="chatWindow--body">
              {list.map((item,key) => (
                  <MessageItem key={key}
                    data={item}
                   />
              ))}
         </div>

         <div className="chatWindow--emojiArea"  style={{height:emojiOpen? '300px':'0'}}>
           <EmojiPicker disableSearchBar disableSkinTonePicker 
             onEmojiClick={handleEmojiClick}
           />
         </div>

          <div className="chatWindow--footer">

            <div className="chatWindow--pre">
              
              <div className="chatWindow--btn" onClick={handleCloseEmoji}
              style={{height:emojiOpen? 40:0}}>
                <CloseIcon style={{color:'#ff0000'}}/>
              </div>
              <div className="chatWindow--btn" onClick={handleOpenEmoji}>
                <InsertEmoticonIcon style={{color: emojiOpen?'#009688':'#919191'}} />
              </div>
              
            </div>

            <div className="chatWindow--inputarea">
              <input className="chatWindow--input" type="text"
                placeholder="Digite uma mensagem"
                value={text}
                onChange={e =>setText(e.target.value)}
              />
            </div>
  
            <div className="chatWindow--pos">
              {text === '' &&
                <div onClick={handleMicClick} className="chatWindow--btn">
                  <MicIcon style={{color: listening? '#126ece':'#919191'}}/>
                </div>
              }
              {text !== '' &&
              <div onClick={handleSendClick} className="chatWindow--btn">
                <SendIcon style={{color:'#919191'}}/>
              </div>
              }
            </div>

          </div>
      </div>
  );
}