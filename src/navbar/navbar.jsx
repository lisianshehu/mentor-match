import React, { Component } from 'react';

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
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item1">
                    <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Mentees</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Mentors</a>
                    </li>
                </ul>
                <ul class="nav navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sign-up</a>
                </li>

                </ul>
            </div>
          </nav>
         );
    }
}
 
export default Navbar;