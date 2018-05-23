import React, { Component } from 'react';



// components
import Section from './section'

// includes
// already included : import './Assets/css/default.min.css'

class Projects extends Component {
  render() {
    return (
      <div className='container-fluid projects row'>

        <div className='col-sm-12 side-projects'>
          <h1>SIDE PROJECTS</h1>
          <Section 
          title='EduAce (ongoing)' 
          text1='Co-developing a React Native educational mobile app, targeting secondary school students and teachers, providing them a platform for communication.' 
          text2='Worked as the team leader, architect, database and UI designer in a team of 3 people from different universities in different countries.' 
          text3='Designed and implemented database structure with MongoDB; implemented server-side functions with Node.js; built REST APIs to communicate between Heroku server and front-end; created React Native login page.'
          picpath='../pics/profile.png' />

          <Section 
          title='Valentine-Matching' 
          text2='Co-developed a couple-matching program with Java to support a university club’s celebration event for Valentine’s Day. Manipulated the Stable Marriage Algorithm to support different gender participants’ populations.'
          text3='Among 180+ participants, the program successfully matched 80+ couples, where 2 participants became couples in real life and many became good friends.'
          text1='February 2016 | UWLTK Club event project'
          picpath='../pics/profile.png' />
        </div>

        <div className='col-sm-12 course-projects'>
          <h1>COURSE PROJECTS</h1>
          <Section 
          title='Snake (ongoing)' 
          text1='Project for UI course'
          text2='Developed the classic snake game X-program using C++ and the X-library.'
          text3='Implemented additional functions including adding obstacles, allowing the shortening of snake length, providing multiple lives and adding tron-like features to improve gaming experience.'
          picpath='../pics/profile.png' />
          <Section 
          title='CC3K' 
          text1='2-week final group-project for Object-Oriented Software Development course.'
          text2='Co-developed ChamberCrawler3000, a rogue-like console game by first design UML class diagram and then implementing using C++ and vairous design patterns, including factory method, observer pattern, strategy pattern, template method, etc.'
          text3 = 'Received 100% for the project.'
          picpath='../pics/profile.png' />
   
          <Section 
          title='WLP4 Compiler' 
          text1='Project for Foundation of Sequential Programing course'
          text2='Developed a compiler for the simple C-like language, WLP4'
          text3='Implemented by applying Finit Automata, Context Free Grammars and Context-sensitive lanugages.'
          picpath='../pics/profile.png' />
          

        </div>

      </div>
    );
  }
}

export default Projects;
