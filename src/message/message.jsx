import React, { Component } from 'react';
import UserList from '../userlist/userlist';
import './message.css'


class Message extends Component {
    render () {
    console.log(this.props.fromMe);
    const fromMe = false;

        return (
            fromMe ? (
                <div className="message-container justifyEnd">
                    <div className="message-box backgroundBlue">
                         <p className="message-text colorWhite">{this.props.message}</p>
                    </div> 
                </div> )
                :
                (
                <div className="message-container justifyStart">
                    <div className="message-box backgroundLight">
                        <p className="message-text colorDark">{this.props.message}</p>
                    </div> 
                </div>
                ) 
        );
    }
}
 
// Message.defaultProps = {
//     message: '',
//     username: '',
//     fromMe: false
//   };
  
export default Message;