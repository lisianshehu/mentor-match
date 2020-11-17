import React, { Component } from 'react';
import './message.css'

class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render () {
    const fromMeMessage = this.props.fromMe ? 'fromMeMessage' : ''

        return (
            <div className={`fromMeMessage ${fromMeMessage}`}></div>
        );
    }
}
 
Message.defaultProps = {
    message: '',
    username: '',
    fromMe: false
  };
  
export default Message;