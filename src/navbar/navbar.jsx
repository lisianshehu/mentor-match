import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

import './navbar.css'
import store from '../store'

class Navbar extends Component {
    state = {  };
    
    navStyles = 
    {
        backgroundColor: "#191970"
    };

    itemStyles = 
    {
        color: "#FFFAFA"
    }

    render() { 
        return (
            <nav class="navbar navbar-expand-lg navbar-light py-4" style={this.navStyles}>
            <a class="navbar-brand" style={this.itemStyles} href="#">Mentor Match</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContentn" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                    <Link className="nav-link" style={this.itemStyles} to="/">Home <span class="sr-only">(current)</span></Link>                
                    </li>
                    <li class="nav-item active">
                    <Link className="nav-link" style={this.itemStyles} to={"/landing-page"}>Profile<span class="sr-only">(current)</span></Link>                
                    </li>
                </ul>
                {store.getState().loginReducer.isLoggedIn ? 
                <ul class="nav navbar-nav ml-auto">
                <li class="nav-item" className="username-item">
                    <h6 style={this.itemStyles}>{localStorage.getItem('user')}</h6>
                </li>
                <li class="nav-item">
                    <Avatar src="../public/blank_avatar.jpg"></Avatar>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" style={this.itemStyles} to={"/logout"}>Logout</Link>
                </li>
                </ul> :
                <ul class="nav navbar-nav ml-auto">
                <li class="nav-item">
                    <Link className="nav-link" style={this.itemStyles} to={"/login"}>Login</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" style={this.itemStyles} to={"/signup"}>Sign-up</Link>
                </li>
                </ul> 
                }
            </div>
          </nav>
         );
    }
}
 
export default Navbar;