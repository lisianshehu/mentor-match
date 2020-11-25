import React, { Component } from 'react';
import './chat-interface.css'

class ChatInterface extends Component {
    constructor(props) {
        super(props)
        this.state = {
           message: '',
        }
    }

    chatStyles = 
    {
        backgroundColor: "#98fb98"
    };

    handleSend(e)
    {
        e.preventDefault();
        this.props.onSend(this.state.message)
        this.setState({message: ''})
        console.log("message sent");
    }

    onMessageChange(event)
    {
        this.setState({message: event.target.value})
    }

    render() { 
        console.log(this.props.showChatInterface);

        return (  
            <form className="message-bar" onSubmit={this.handleSend.bind(this)} method="POST">
                    
                    <input className="input-message" type="text" value={this.state.message} placeholder="Message" id="message" onChange={this.onMessageChange.bind(this)} disabled={!this.props.showChatInterface}></input>
                    <button disabled={!this.props.showChatInterface} type="submit" className="send-button">Send</button>
            </form>
        );
    }
}
 
export default ChatInterface;