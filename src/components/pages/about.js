import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


// components

// includes
// already included : import './Assets/css/default.min.css'

class About extends Component {
  render() {
    return (
      <div className='container-fluid about'>
        <div className='row'>
          <div className='col-xs-3 pic'>
            <img src={require('../pics/cartoon.png')} className='img-responsive' />
          </div>
          <div className='col-xs-9 info'>
          <h1><strong> Aloha! </strong></h1>
          <p>
            I am <strong>Angelia</strong>, a 3rd year student pursuing Honours Bachelor of <strong>Computer Science</strong> degree in University of Waterloo. I am constantly looking for co-op jobs and making new friends.
          </p>
          <p>
            In these 3 years, I have been enjoying my school life, career life as well as my personal spare time a lot.  I have done <strong>3 co-op</strong> terms so far. 
          </p>
          <p>
            In my first work term, I worked in <strong>Dell</strong>’s software group, and co-developed a <strong>conversation bot</strong> with C# .NET framework and Microsoft LUIS. It significantly eases the process of retreiving data from enterprise communication platforms.
          </p>
          <p>
            In my second work term, I developed various data-mining <strong>REST APIs</strong> for the <strong>national and provincial student loans</strong> websites using C# when I worked in D+H, and got an outstanding on my work term evaluation.
          </p>
          <p>
            Last term, I worked in <strong>OpenText</strong> as a software developer working in a small team of 3 people. With little supervision, I built an <strong>internal development tool</strong> for performance testing, analysis and reporting of OpenText’s most well known product, <strong>Content Server</strong>. It has successfully caught and reported performance issues before its release.
          </p>
          <p>
            I value experience. Besides school and work, I am also very passionate about trying new things in life.
          </p>
          <p>
            My greatest passion in life is travelling. By saving some money during work term, I was able to visit Yellowknife, Cuba, Japan and Morocco in the gaps between school terms. This summer, I am visiting Croatia. I can’t wait to see the gorgeous buildings and beautiful beaches!
          </p>
          <p>
            I love extreme sports. I tried bungee jumping in my 19th birthday. Scuba-diving and sky-diving are in my 2018 to-do list.
          </p>
          <p>
            To see more about me, please navigate through this website and <strong>download my resume</strong>. I'm looking forward to your contact!
          </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
