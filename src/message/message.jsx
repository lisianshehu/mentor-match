import React, { Component } from 'react';
import UserList from '../userlist/userlist';
import './message.css'


const Message = ({ message, currentUser}) =>{

    console.log("in message")
    console.log(message)
    let sentFromMe = false
    let messageText = message.message
    let user = message.user
    console.log(messageText)
    console.log(user)
    if (currentUser === user)
    {
        sentFromMe = true
    }

    return (
        sentFromMe ? (
            <div className="message-container justifyEnd">
                <div className="message-box backgroundBlue">
                     <p className="message-text colorWhite">{messageText}</p>
                </div> 
            </div> )
            :
            (
            <div className="message-container justifyStart">
                <div className="message-box backgroundLight">
                    <p className="message-text colorDark">{messageText}</p>
                </div> 
            </div>
            ) 
    );

}
 

export default Message;