import React from 'react';
import './style.css';
import Api from '../../backend/Api';

export default ({onReceive}) => {

  const handleFacebookLogin = async () => {
    
    let result= await Api.fbPopup();
    
    if(result){
      onReceive(result.user);
    }else{
      alert('Error');
    }

  }
  return (
    
    <div className="Login">
      <div className="Login--title">
        <h2>Whatsapp Clone</h2>
      </div>
      <div className="section-mkt">
      
        <img src="https://www.isbrasil.info/blog/_images/blog/destaques/2018/06/27/5-estrategias-de-marketing-no-whatsapp_234ae6502b5d14be0914db354e9de86b.jpg" alt=""/>
      </div>
      <div className="Login--button">
        <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn--face" 
        onClick={handleFacebookLogin}>
        Login with Facebook </a>
      </div>
    </div>
  )
}