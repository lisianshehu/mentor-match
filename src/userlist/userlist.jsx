import React, { Component } from 'react';
import { connect } from 'react-redux'
import './userlist.css'

const ConnectedUserList = ({userList}) => (
    <div className="user-list"> 
        <ul class="list-group">
            {userList.map(user => <a href="#" key={user} class="list-group-item list-group-item-action">{user}</a>)}
        </ul> 
    </div>
);


const mapStateToProps = state =>
{
    return { userList: state.addUserReducer.userList };
};
 
const UserList = connect(mapStateToProps)(ConnectedUserList);

export default UserList;