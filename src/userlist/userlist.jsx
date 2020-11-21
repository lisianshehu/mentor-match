import React, { Component } from 'react';
import { connect } from 'react-redux'
import './userlist.css'


class ConnectedUserList extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
        this.state = {
            userList: this.props.userList
        }
    }

    static getDerivedStateFromProps(nextProps, prevState)
    {
        return {
            userList: nextProps.userList
        }
    }

    showUserChat(){
        this.props.onClick()
    }

    render () {
        return (
            <div className="user-list"> 
                <ul class="list-group">
                    {this.state.userList.map(user => <button onClick={this.showUserChat.bind(this)} key={user} class="list-group-item list-group-item-action">{user}</button>)}
                </ul> 
            </div>
        );
    }
}

const mapStateToProps = (state) =>
{
    return { userList: state.addUserReducer.userList };
};
 


export default connect(mapStateToProps)(ConnectedUserList);