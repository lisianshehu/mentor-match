import React, { Component } from 'react';

import './login-page.css'
import axios from 'axios'

class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            password: '',
            invalidLogin: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        axios({
            method: "POST",
            url: "http://127.0.0.1:5000/user/login/",
            data: this.state
        }).then((response)=>{
            if (response.data.status === 'success'){
                // alert("Login successful");
                this.resetForm();
            }
            else if (response.data.status === 'failed'){
                // alert("Failed login");
                this.setState({invalidLogin: true});
            }
        })
    }


    resetForm(){
        this.setState({ user_name: '', firstName: '', lastName: '', password: ''})
    }

    onUserNameChange(event){
        this.setState({user_name: event.target.value})
    }

    onPasswordChange(event){
        this.setState({password: event.target.value})
    }

    render() {
        return (
            <div className='login-page'>
                <div class="container-sm">
                    <div class="card bg-light text-center" style={this.cardStyles}>
                        <div class="card-body">
                            <h5 class="card-title">Login</h5>
                            <div className="login-form">
                                <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                                    
                                    <div class="form-group">
                                        <label for="inputUserName">User Name</label>
                                        <input type="text" className="form-control" id="inputUser" placeholder="User Name" value={this.state.user_name} onChange={this.onUserNameChange.bind(this)}></input>
                                    </div>  

                                    <div class="form-group">
                                        <label for="inputPassword">Password</label>
                                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange.bind(this)}></input>
                                    </div>

                                    {this.state.invalidLogin ? <div class="invalidLogin" style={{color:"red"}}>Username or password are invalid!</div> : null}

                            
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;