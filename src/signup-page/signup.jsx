import React, { Component } from 'react';
import './signup.css'

class SignUp extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="signup-form">
            <form>
                <div class="form-group">
                <label for="inputFirstName">First Name</label>
                <input type="text" class="form-control" id="inputFirst" placeholder="First Name"></input>
                </div>

                <div class="form-group">
                <label for="inputLastName">Last Name</label>
                <input type="text" class="form-control" id="inputLast" placeholder="Last Name"></input>
                </div>
                
                <div class="form-group">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4"></input>
                </div>

                <div class="form-group">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4"></input>
                </div>

        
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
        );
    }
}
 
export default SignUp;