import React, { Component } from 'react';
import Navbar from '../navbar/navbar'
import Searchbar from '../searchbar/search-bar'
import UserList from '../userlist/userlist'

class ChatPage extends Component {
    state = {  }
    render() { 
        return (
          <div className='chat-page'>
            <Navbar></Navbar>      
            <Searchbar></Searchbar>   
            <UserList></UserList> 
          </div>
        );
    }
}
 
export default ChatPage;