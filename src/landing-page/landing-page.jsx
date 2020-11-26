import React, { Component } from 'react';
import history from '../history'

import Navbar from '../navbar/navbar'
import Searchbar from '../searchbar/search-bar'
import ConnectedUserList from '../userlist/userlist'
import ChatInterface from '../chat-interface/chat-interface'
import MessageList from '../message-list/message-list'

class LandingPage extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            userToChatWith: '',
            showChatInterface: false
        }

    this.enableChatInterface = this.enableChatInterface.bind(this)

    }


    enableChatInterface = (userToChatWith) =>
    {
        this.setState({userToChatWith: userToChatWith})
        this.setState({showChatInterface: true})
        history.push({pathname: './chatpage', state: {userToChatWith: userToChatWith}})
    }

    render () {
        return (
            <div className='landing-page'>
                <Navbar></Navbar>
                <div className='landing-outer-container'>
                    <Searchbar></Searchbar>
                    <ConnectedUserList onClick={this.enableChatInterface}></ConnectedUserList>
                </div>
            </div>

        )
    }
}

export default LandingPage;