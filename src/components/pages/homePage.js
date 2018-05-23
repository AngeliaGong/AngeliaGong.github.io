import React, { Component } from 'react';

// components

// includes


class Homepage extends Component {
  render() {
    return (
      <div className='container-fluid homepage'>

        
        <img className='profile' src={require('../pics/profile.png')} />
        
        <h1>
          Angelia Gong
        </h1>

        <h3>
          Honors of Bachelor of Computer Science
        </h3>
        <h3>
          University of Waterloo
        </h3>

        <div className='contact'>
          <ul>

            <li className='first'>
              <a href="https://www.linkedin.com/in/angelia-yuqing-gong-ab5122140/">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </li>

            <li>
              <a href="https://github.com/AngeliaGong">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/angelia.gong">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
            </li>

            <li className='last'>
              <a href="https://www.instagram.com/angelia_gyq">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </li>

          </ul>
        </div>

      </div>
    );
  }
}

export default Homepage;
