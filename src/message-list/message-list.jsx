import React, { Component, useEffect, useRef } from 'react';
import ScrollableFeed from 'react-scrollable-feed'
import Message from '../message/message'

const MessageList = ({ messages, currentUser }) => {
    console.log("in message list")
    console.log(messages)
    return (
        <ScrollableFeed forceScroll="true" className="messages-list">
            {messages.map((message, key) => <div key={key}><Message message={message} currentUser={currentUser}/></div>)}
        </ScrollableFeed>
    );
};
 
export default MessageList;