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
            school: '',
            gradDate: '',
            major: '',
            password: '',
            successSignup: false,
            invalidUser: false
        }
    }
    
  
    jumboStyles =
    {
        backgroundColor: "#eceed2"
    };

    handleSubmit(e) {
        e.preventDefault();
        this.setState({invalidUser: false});
        axios({
            method: "POST",
            url: "http://127.0.0.1:5000/user/signup/",
            data: this.state
        }).then((response)=>{
            if (response.data.status === 'success'){
                this.resetForm();
                this.setState({successSignup: true});
            }
            else {
                // alert("Message failed");
                console.log("Failed signup");
                this.setState({invalidUser: true});
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


    onSchoolChange(event){
        this.setState({school: event.target.value})
    }

    onGradDateChange(event){
        this.setState({gradDate: event.target.value})
    }

    onMajorChange(event){
        this.setState({major: event.target.value})
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
            <div className="page-title">
                <div style={this.jumboStyles} class="jumbotron jumbotron-fluid text-center">
                    <div class="container">
                        <h1 class="display-4">Create Profile</h1>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="card bg-light text-center" style={this.cardStyles}>
                    <div class="card-body">
                        <h5 class="card-title">SignUp</h5>
                        <div className="signup-form">
                            <form class="needs-validation" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputFirst">First Name</label>
                                        <input type="text" className="form-control" id="inputFirst" placeholder="First Name" value={this.state.firstName} onChange={this.onFirstNameChange.bind(this)} required></input>
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label for="inputLastName">Last Name</label>
                                        <input type="text" className="form-control" id="inputLast" placeholder="Last Name" value={this.state.lastName} onChange={this.onLastNameChange.bind(this)} required></input>
                                    </div>
                                </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputUser">User Name</label>
                                            <input type="text" className="form-control" aria-describedby="userValidationFeedback" id="inputUser" placeholder="User Name" value={this.state.user_name} onChange={this.onUserNameChange.bind(this)} required></input>
                                            {this.state.invalidUser ? <div class="invalidUser" style={{color:"red"}}>Username already taken!</div> : null}
                                            
                                        </div>  

                                        <div class="form-group form-group col-md-6">
                                            <label for="inputPassword">Password</label>
                                            <input type="password" className="form-control" id="inputPassword" minLength="6" aria-describedby="passwordValidationFeedback" value={this.state.password} onChange={this.onPasswordChange.bind(this)} required></input>

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