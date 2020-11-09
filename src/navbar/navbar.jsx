import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SignUp from '../signup-page/signup'


class Navbar extends Component {
    state = {  };
    
    navStyles = 
    {
        backgroundColor: "#98fb98"
    };

    render() { 
        return (
            <nav class="navbar navbar-expand-lg navbar-light py-4" style={this.navStyles}>
            <a class="navbar-brand" href="#">Mentor Match</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                    <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>                
                    </li>
                    <li class="nav-item active">
                    <Link className="nav-link" to={"/chatpage"}>Chat page <span class="sr-only">(current)</span></Link>                
                    </li>
                </ul>
                <ul class="nav navbar-nav ml-auto">
                <li class="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to={"/signup"}>Sign-up</Link>
                </li>

                </ul>
            </div>
          </nav>
         );
    }
}
 
export default Navbar;