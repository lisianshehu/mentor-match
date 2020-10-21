import React, { Component } from 'react';

import axios from 'axios'

import './signup.css'
import Navbar from '../navbar/navbar'

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            user_name: '',
            firstName: '',
            lastName: '',
            password: ''
        }
    }
   

    handleSubmit(e) {
        e.preventDefault();

        axios({
            method: "POST",
            url: "http://127.0.0.1:5000/user/ ",
            data: this.state
        }).then((response)=>{
            if (response.data.status === 'success'){
                alert("Message sent");
                this.resetForm()
            }
            else if (response.data.status === 'fail'){
                alert("Message failed");
            }
        })
    }

    resetForm(){
        this.setState({ user_name: '', firstName: '', lastName: '', password: ''})
    }

    onUserNameChange(event){
        this.setState({user_name: event.target.value})
    }


    onFirstNameChange(event){
        this.setState({firstName: event.target.value})
    }


    onLastNameChange(event){
        this.setState({lastName: event.target.value})
    }


    onPasswordChange(event){
        this.setState({password: event.target.value})
    }

    render() { 
        return ( 
        <div className="signup-page">
            <Navbar></Navbar>
            <div className="create-profile">
                <div class="card text-center" className="signup-card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">SignUp</h5>
                        <div className="signup-form">
                            <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputFirstName">First Name</label>
                                    <input type="text" className="form-control" id="inputFirst" placeholder="First Name" value={this.state.firstName} onChange={this.onFirstNameChange.bind(this)}></input>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="inputLastName">Last Name</label>
                                    <input type="text" className="form-control" id="inputLast" placeholder="Last Name" value={this.state.lastName} onChange={this.onLastNameChange.bind(this)}></input>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="inputUserName">User Name</label>
                                    <input type="text" className="form-control" id="inputUser" placeholder="User Name" value={this.state.user_name} onChange={this.onUserNameChange.bind(this)}></input>
                                    </div>

                                    <div class="form-group form-group col-md-6">
                                        <label for="inputPassword">Password</label>
                                        <input type="password" className="form-control" id="inputPassword" value={this.state.password} onChange={this.onPasswordChange.bind(this)}></input>
                                    </div>
                                </div>

                        
                                <button type="submit" className="btn btn-primary">Sign-up!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
 
export default SignUp;