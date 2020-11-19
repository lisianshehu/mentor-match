import React, { Component, useEffect, useRef } from 'react';
import ScrollableFeed from 'react-scrollable-feed'
import Message from '../message/message'

const MessageList = ({ messages }) => {
    return (
        <ScrollableFeed forceScroll="true" className="messages-list">
            {messages.map((message, key) => <div key={key}><Message message={message.message} fromMe={message.fromMe}/></div>)}
        </ScrollableFeed>
    );
};
 
export default MessageList;