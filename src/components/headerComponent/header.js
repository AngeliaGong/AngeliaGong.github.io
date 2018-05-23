import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

// components

// includes
// already included : import './Assets/css/default.min.css'

class Header extends Component {
  render() {
    return (
      <header>
      	
      	<div className='logo'>
      		<Link to="/">Angelia Gong</Link>
      	</div>

      	<nav>
      		<ul>
      			<li className='first'>
      				<Link to="/About">About</Link>
      			</li>
      			<li>
      				<Link to="/Projects">Projects</Link>
      			</li>
      			<li>
      				<Link to="/Life">Life</Link>
      			</li>
      			<li className='last'>
      				<Link to="/Resume">Resume</Link>
      			</li>
      		</ul>
      	</nav>


      </header>
    );
  }
}

export default Header;
