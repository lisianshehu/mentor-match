import React, { Component } from 'react';
import io from 'socket.io-client'

import Navbar from '../navbar/navbar'
import Searchbar from '../searchbar/search-bar'
import ConnectedUserList from '../userlist/userlist'
import ChatInterface from '../chat-interface/chat-interface'
import MessageList from '../message-list/message-list'

import './chat-page.css'

const ENDPOINT = 'http://127.0.0.1:5000/api/chat/'

let socket;

class ChatPage extends Component {
  constructor(props)
  {
    super(props)
    this.state = {  
      messages: [],
      showChatInterface: false
    }
    this.sendHandler = this.sendHandler.bind(this)
    this.enableChatInterface = this.enableChatInterface.bind(this)

    // add socketio server connection

    // add listening of messages from server 
  }

  sendHandler(message)
  {
    console.log("in send handler")
    const messageObject = {
      username: localStorage.getItem('user'),
      message,
      fromMe: true
    };

    console.log(messageObject)

    // emit with socket io

    this.addMessage(messageObject);
  }

  enableChatInterface()
  {
    console.log("enable chatting")
    this.setState({showChatInterface: true})
    console.log(this.state.showChatInterface)
  }

  addMessage(message)
  {
    console.log("In add message")
    console.log(message)
    const messages = this.state.messages;
    messages.push(message);
    console.log(messages);
    this.setState({ messages })
  }


  render() { 
      return (  
        <div className='chat-page'>
          <Navbar></Navbar>
          <div className='chat-outer-container'>
            <ConnectedUserList onClick={this.enableChatInterface}></ConnectedUserList>
            <div className="chat-container">
              <Searchbar></Searchbar>   
              <MessageList messages={this.state.messages}></MessageList>
              <ChatInterface showChatInterface={this.state.showChatInterface} onSend={this.sendHandler}></ChatInterface>
            </div>
          </div>
        </div>
      );
  }
}
 
export default ChatPage;