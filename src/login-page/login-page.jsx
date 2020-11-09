import React, { Component } from 'react';
import './login-page.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import ChatPage from '../chat-page/chat-page';
import Navbar from '../navbar/navbar';
import { connect } from 'react-redux';
import { loginReducer } from '../reducer';
import { login } from '../actions'
import history from '../history'
import store from '../store'

class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            password: '',
            invalidLogin: false,
            isLoggedIn: false
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
                alert("Login successful");
                localStorage.setItem('token', response.data.token)
                this.setState({loggedIn: true})
                
                console.log(response.data)
                // this.isLoggedIn();
                history.push('/')
            }
            else if (response.data.status === 'failed'){
                alert("Failed login");
                console.log(response.data)
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

    isLoggedIn = () =>
    {
        console.log(store.getState().isLoggedIn)
        // console.log("checking login")
        // console.log("Logged in state: " + this.state.loggedIn);
        if (this.state.loggedIn)
        {
            console.log("Logged in is true")
            return true
        }
        else
            console.log("Logged in is false")

            return false
    };

    render() {
        return (
            <div className='login-page'>
                <Navbar></Navbar>
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

const mapStateToProps = state => {
    return {
        isLoginSuccess: state.isLoginSuccess
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      login: () => dispatch(login())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);