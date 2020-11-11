import React, { Component } from 'react';
import Navbar from '../navbar/navbar'
import Searchbar from '../searchbar/search-bar'

class ChatPage extends Component {
    state = {  }
    render() { 
        return (
          <div className='login-page'>
            <Navbar></Navbar>      
            <Searchbar></Searchbar>    
          </div>
        );
    }
}
 
export default ChatPage;