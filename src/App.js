import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage'
import About from './components/pages/about'
import Projects from './components/pages/projects'
import Life from './components/pages/life'
import Resume from './components/pages/resume'

// includes
import './Assets/css/default.min.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        
        <Header />

        <Route exact path='/' component={Homepage} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Projects' component={Projects} />
        <Route exact path='/Life' component={Life} />
        <Route exact path='/Resume' component={Resume} />

        <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
