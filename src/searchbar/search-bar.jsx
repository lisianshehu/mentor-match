import React, { Component } from 'react';
import axios from 'axios'
import store from '../store'
import './search-bar.css'


class Searchbar extends Component {
    constructor(props)
    {
        super(props)
        this.state = {  
            inputUsername: '',
            foundUser: false,
            userNameFound: ''
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
                this.setState({foundUser:true, userNameFound: respUserName})
                console.log(this.state)
            }
            else if (response.data.status === 'failed') 
            {
                alert("Search failed");
            }
        })
        
    }

    onInputUserNameChange(event){
        // console.log("setting username")
        this.setState({inputUsername: event.target.value})
        // console.log(this.state.inputUsername)
    }


    render() { 
        return ( 
            <div class="container-sm">
                <form onSubmit={this.handleSearch.bind(this)} method="POST">
                    <div class="form-group row">
                        <div class="col-sm-15">
                            <input class="form-control" type="text" value={this.state.inputUsername} placeholder="Username" id="username" onChange={this.onInputUserNameChange.bind(this)}></input>
                        </div>
                        <div class="col-sm-15">
                            <button type="submit" class="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Searchbar;