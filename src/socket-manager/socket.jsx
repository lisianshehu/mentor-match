import React, { Component } from 'react';
import io from 'socket.io-client'

const socket = io('http://127.0.0.1:5000/api/chat/')
class SocketManager extends Component {
    state = {  }
    render() { 
        return (  );
    }
}
 
export default SocketManager;