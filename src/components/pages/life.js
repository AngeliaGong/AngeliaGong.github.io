import React, { Component } from 'react';

// components


// includes
// already included : import './Assets/css/default.min.css'

class Life extends Component {
  render() {
    return (
      <div className='container-fluid row life'>
        <div className='col-sm-12 side-projects row'>
        <h1>Travelling</h1>
        <h2>Morroco 2017</h2>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/mor1.jpg')} className='img-responsive' />
          </div>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/mor2.jpg')} className='img-responsive' />
          </div>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/mor3.jpg')} className='img-responsive' />
          </div>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/mor4.jpg')} className='img-responsive' />
          </div>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/mor5.jpg')} className='img-responsive' />
          </div>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/mor6.jpg')} className='img-responsive' />
          </div>

          <h2>Tokyo 2016</h2>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/tok1.jpg')} className='img-responsive' />
          </div>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/tok2.jpg')} className='img-responsive' />
          </div>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/tok3.jpg')} className='img-responsive' />
          </div>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/tok4.jpg')} className='img-responsive' />
          </div>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/tok5.jpg')} className='img-responsive' />
          </div>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/tok6.jpg')} className='img-responsive' />
          </div>
        </div>
        <h2>Yellowknife 2016</h2>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/yel1.jpg')} className='img-responsive' />
          </div>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/yel2.JPG')} className='img-responsive' />
          </div>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/yel3.jpg')} className='img-responsive' />
          </div>
          <h2>Cuba 2016</h2>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/cub1.jpg')} className='img-responsive' />
          </div>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/cub2.jpg')} className='img-responsive' />
          </div>
          <div className='col-sm-4 pic'>
            <img src={require('../pics/cub3.jpg')} className='img-responsive' />
          </div>
       
      </div>
    );
  }
}

export default Life;
