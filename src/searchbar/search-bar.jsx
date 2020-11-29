import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { addUser } from '../actions'
import './searchbar.css'


class Searchbar extends Component {
    constructor(props)
    {
        super(props)
        this.state = {  
            inputUsername: '',
            loginStatus: false
        }
    }

    handleSearch(e){
        e.preventDefault();
        axios({
            method: "POST",
            url:"http://127.0.0.1:5000/user/search/",
            data: this.state
        }).then((response)=>{
            if (response.data.status === 'success'){
                alert("Search successful");
                let respUserName = response.data.username
                localStorage.setItem('searchedUser', respUserName)
                // this.setState({foundUser:true, userNameFound: respUserName})
                console.log(this.state)
                const { inputUsername } = this.state
                console.log({ inputUsername })
                this.props.addUser({ inputUsername })
                if (response.data.loginStatus === true)
                {
                    this.setState({loginStatus: true})
                }
                else
                {
                    this.setState({loginStatus: false})
                }
                // console.log(this.props.addUser)
            }
            else if (response.data.status === 'failed') 
            {
                alert("Search failed");
            }
        })
        
    }

    onInputUserNameChange(event){
        this.setState({inputUsername: event.target.value})
    }

    render() { 
        return ( 
            <form className="search-bar" onSubmit={this.handleSearch.bind(this)} method="POST">
                <input className="input-user" type="text" value={this.state.inputUsername} placeholder="Username" id="username" onChange={this.onInputUserNameChange.bind(this)}></input>
                <button type="submit" className="search-button" class="btn btn-primary">Search</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: addedUser => dispatch(addUser(addedUser))
    };
};
 
export default connect(null, mapDispatchToProps)(Searchbar);