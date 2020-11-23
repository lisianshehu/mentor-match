import React, { Component } from 'react';
import io from 'socket.io-client'

import Navbar from '../navbar/navbar'
import Searchbar from '../searchbar/search-bar'
import ConnectedUserList from '../userlist/userlist'
import ChatInterface from '../chat-interface/chat-interface'
import MessageList from '../message-list/message-list'

import './chat-page.css'

let socket
class ChatPage extends Component {
  constructor(props)
  {
    super(props)
    this.state = {  
      messages: [],
      showChatInterface: false,
      chat_endpoint: 'http://localhost:5000',
      userToChatWith: ''
    }
    
    this.currentUser = localStorage.getItem('user')
    this.sendHandler = this.sendHandler.bind(this)
    this.enableChatInterface = this.enableChatInterface.bind(this)
  }

  componentDidMount()
  {
    console.log("in mount")
    const { chat_endpoint } = this.state
    console.log(chat_endpoint)
    console.log(this.socket)
    socket = io(chat_endpoint, { transport : ['websocket'] })
    console.log(socket)
  }


  componentDidUpdate(prevProps, prevState)
  {
    if (prevState.chat_endpoint != this.state.chat_endpoint)
    {
      console.log("updating")
      socket = io(this.state.chat_endpoint)
    }

    if (socket.connected)
    {
      console.log("receiving message")
      socket.on('message', message => {
        this.setState({messages: [...prevState.messages, message]})
        console.log(message)
        console.log(this.state.messages)
      });
    }
  }

  sendHandler(message)
  {
    console.log("in send handler")
    console.log(message)

    // emit with socket-io
    socket.emit('send_message', { 'current_user': localStorage.getItem('user'), 'target_user': this.state.userToChatWith, 'message' : message })
  }

  enableChatInterface = (userToChatWith) =>
  {
    this.setState({userToChatWith: userToChatWith})
    this.setState({showChatInterface: true})
    this.joinChatRoom(userToChatWith)
  }

  joinChatRoom(userToChatWith)
  {
    console.log(userToChatWith)
    console.log(localStorage.getItem('user'))
    socket.emit('join', { 'current_user': localStorage.getItem('user'), 'target_user': userToChatWith })
  }

  // addMessage(message)
  // {
  //   console.log("In add message")
  //   console.log(message)
  //   console.log(message.fromMe)
  //   const messages = this.state.messages;
  //   messages.push(message);
  //   // console.log(messages);
  //   this.setState({ messages: messages })
  // }


  render() { 
      return (  
        <div className='chat-page'>
          <Navbar></Navbar>
          <div className='chat-outer-container'>
            <ConnectedUserList onClick={this.enableChatInterface}></ConnectedUserList>
            <div className="chat-container">
              <Searchbar></Searchbar>   
              <MessageList messages={this.state.messages} currentUser={this.currentUser}></MessageList>
              <ChatInterface showChatInterface={this.state.showChatInterface} onSend={this.sendHandler}></ChatInterface>
            </div>
          </div>
        </div>
      );
  }
}
 
export default ChatPage;