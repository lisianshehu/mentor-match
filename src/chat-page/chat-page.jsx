import React, { Component } from 'react';
import io from 'socket.io-client'

import Navbar from '../navbar/navbar'
import ChatInterface from '../chat-interface/chat-interface'
import MessageList from '../message-list/message-list'
import history from '../history'


import './chat-page.css'

let socket
class ChatPage extends Component {
  constructor(props)
  {
    super(props)
    this.state = {  
      messages: [],
      showChatInterface: true,
      chat_endpoint: 'http://localhost:5000',
      userToChatWith: '',
      message: ''
    }
    
    this.currentUser = localStorage.getItem('user')
    this.sendHandler = this.sendHandler.bind(this)
    this.enableChatInterface = this.enableChatInterface.bind(this)
  }

  componentDidMount()
  {
    const { chat_endpoint } = this.state
    socket = io(chat_endpoint, { transport : ['websocket'] })
    console.log(history.location.state.userToChatWith)
    this.joinChatRoom(history.location.state.userToChatWith)
    console.log(socket)
  }


  componentDidUpdate(prevProps, prevState)
  {
    console.log("in component did update")
    if (prevState.chat_endpoint !== this.state.chat_endpoint)
    {
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

  sendHandler(message, e)
  {
    e.preventDefault()
    
    this.setState({message : message})
    // emit with socket-io
    socket.emit('send_message', { 'current_user': localStorage.getItem('user'), 'target_user': this.state.userToChatWith, 'message' : message })
    this.setState({message : ''})
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
    this.setState({userToChatWith: userToChatWith})
    console.log(localStorage.getItem('user'))
    socket.emit('join', { 'current_user': localStorage.getItem('user'), 'target_user': userToChatWith })
  }

  render() { 
      console.log(this.state.userToChatWith)
      console.log(this.state.messages)
      return (  
        <div className='chat-page'>
          <Navbar></Navbar>
          <div className='chat-outer-container'>
            <div className="chat-container">
              <MessageList messages={this.state.messages} currentUser={this.currentUser}></MessageList>
              <ChatInterface showChatInterface={this.state.showChatInterface} onSend={this.sendHandler}></ChatInterface>
            </div>
          </div>
        </div>
      );
  }
}
 
export default ChatPage;