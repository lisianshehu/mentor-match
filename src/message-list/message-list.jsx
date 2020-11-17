import React, { Component } from 'react';
import Message from '../message/message'

class MessageList extends Component {
    constructor(props)
    {
        super(props)
        this.state = {  
            messages: [],
        }
    }
    render() { 
        console.log(this.props.messages)
        const messages = this.props.messages.map((message, key) => {
            return (
                <Message>
                    key={key}
                    username=(message.username)
                    message=(message.message)
                    fromMe=(message.fromMe)
                </Message>
            );
        });

        return (  
            <div className="message-list">
                { messages }
            </div>
        );
    }
}
 
export default MessageList;