import React, { Component } from 'react';

// components

// includes
// already included : import './Assets/css/default.min.css'

class Resume extends Component {

  render() {
    return (
      <div className='container-fluid resume'>
        <a href="https://angeliagong.github.io/img/resume_prj.pdf">
          <i class="fas fa-download"></i> <strong>Download</strong>
        </a>
        <img src={require('../pics/resume.png')} className='img-responsive' />
      </div>
    );
  }
}

export default Resume;
