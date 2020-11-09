import React, { Component } from 'react';
import Navbar from '../navbar/navbar'

class ChatPage extends Component {
    state = {  }
    render() { 
        return (
          <div className='login-page'>
            <Navbar></Navbar>
            <h1>Chat Page</h1>
          </div>
        );
    }
}
 
export default ChatPage;