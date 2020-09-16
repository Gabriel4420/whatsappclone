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
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
    </div>
  )
}